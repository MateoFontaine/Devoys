import { NextResponse } from 'next/server';

// 1. Credenciales
const TELEGRAM_TOKEN = "8625708171:AAGV_E-8D1itQ9NE82_5AYS4AK4acWz6T7U";
const CHAT_ID = "-1003971681377";

// 2. Configuración de Proyectos
const URL_MONITOR = "https://devoys.com.ar/api/monitor?token=devoys_monitor_2026&daily=true"; 

const PROYECTOS = [
  { nombre: "Devoys Landing", url: "https://devoys.com.ar" },
  { nombre: "DevMenu", url: "https://devmenu.com.ar" },
  { nombre: "LaSaiguesWeb", url: "https://landing-padel-pinamar-35p2hdf8y-agustins-projects-75d6f267.vercel.app/" }
];

async function enviarTelegram(mensaje: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
  const cuerpo = {
    chat_id: CHAT_ID,
    text: mensaje,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 Reintentar Chequeo", url: URL_MONITOR }]
      ]
    }
  };

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // 1. Verificamos el token de seguridad
  const token = searchParams.get('token');
  const SECRET_TOKEN = process.env.MONITOR_TOKEN || "devoys_monitor_2026";
  
  if (token !== SECRET_TOKEN) {
    return new NextResponse("Acceso Denegado: Token inválido", { status: 401 });
  }

  // Verificamos si se forzó el reporte diario por URL (ej: /api/monitor?token=devoys_monitor_2026&daily=true)
  const isDaily = searchParams.get('daily') === 'true';

  let operando: string[] = [];
  let conProblemas: string[] = [];
  let hayError = false;

  for (const proyecto of PROYECTOS) {
    const inicio = performance.now();
    try {
      const res = await fetch(proyecto.url, { 
        cache: 'no-store',
        signal: AbortSignal.timeout(10000) 
      });
      
      const fin = performance.now();
      const latencia = Math.round(fin - inicio);

      if (res.ok) {
        if (latencia > 3000) {
          operando.push(`⚠️ ${proyecto.nombre} (${latencia}ms)`);
        } else {
          operando.push(`✅ ${proyecto.nombre} (${latencia}ms)`);
        }
      } else {
        conProblemas.push(`🔴 *${proyecto.nombre}*\n└ Problema: Error de servidor (${res.status})`);
        hayError = true;
      }
    } catch (e) {
      conProblemas.push(`❌ *${proyecto.nombre}*\n└ Problema: Sin respuesta del servidor`);
      hayError = true;
    }
  }

  // Comprobamos la hora local en Argentina para enviar el reporte diario
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });
  const timeString = formatter.format(now);
  const [hourStr, minStr] = timeString.split(':');
  const currentHourAR = parseInt(hourStr, 10);
  const currentMinuteAR = parseInt(minStr, 10);

  // Mandamos el estado general a las 20:00 (entre el minuto 0 y 10 para atajar el cron)
  const isDailyTime = currentHourAR === 20 && currentMinuteAR < 10;

  let mensajeEnviado = false;

  // Condiciones para enviar el mensaje a Telegram
  if (hayError || isDailyTime || isDaily) {
    const fecha = new Intl.DateTimeFormat('es-AR', { 
      timeZone: 'America/Argentina/Buenos_Aires', 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(now);
    
    const hora = new Date().toLocaleTimeString('es-AR', { 
      timeZone: 'America/Argentina/Buenos_Aires', 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    let mensajeFinal = "";

    if (hayError) {
      mensajeFinal += `🚨 *DEVOYS* | Alerta de Infraestructura\n`;
      mensajeFinal += `🗓️ ${fecha} - ${hora} hs\n\n`;
      mensajeFinal += `⚠️ *Se requiere atención en los siguientes servicios:*\n\n`;
      mensajeFinal += conProblemas.join('\n\n') + `\n\n`;
      
      if (operando.length > 0) {
        mensajeFinal += `*Servicios estables:*\n`;
        mensajeFinal += operando.join('\n');
      }
    } else {
      mensajeFinal += `🏢 *DEVOYS* | Reporte de Sistemas\n`;
      mensajeFinal += `🗓️ ${fecha} - ${hora} hs\n\n`;
      mensajeFinal += `✅ *Todos los servicios operan con normalidad.*\n\n`;
      mensajeFinal += `*Rendimiento actual:*\n`;
      mensajeFinal += operando.join('\n');
    }

    await enviarTelegram(mensajeFinal);
    mensajeEnviado = true;
  }

  return NextResponse.json({ 
    success: true, 
    hayError,
    mensajeEnviado
  });
}