/**
 * =========================================================================
 * CONFIGURACIÓN CENTRALIZADA - TEMPLO ESOTÉRICO & ALTA MAGIA
 * =========================================================================
 * Puedes modificar fácilmente los datos del Maestro/a, teléfono de WhatsApp,
 * mensajes personalizados y textos principales desde este único archivo.
 */

const SITE_CONFIG = {
    // Datos Principales de la Maestra / Guía Espiritual
    master: {
        name: "Maestra Aurora",
        title: "Guía Espiritual & Consejería",
        subtitle: "Tradición Espiritual Ancestral",
        experienceYears: "+25 años de experiencia",
        location: "Salem, Massachusetts & Atención a Distancia",
        rating: "4.99",
        reviewsCount: "Experiencia Espiritual"
    },

    // =========================================================================
    // 🔴 1. NÚMERO Y MENSAJES DE WHATSAPP (CAMBIA EL NÚMERO AQUÍ Y CAMBIA EN TODA LA WEB)
    // =========================================================================
    whatsapp: {
        // Formato internacional (con o sin signo +, ej: "5020000000" o "+1 (555) 123-4567")
        phone: "+1 3803457738",
        defaultMessage: "Hola Maestra Aurora, deseo una consulta espiritual confidencial.",
        urgencyMessage: "Hola Maestra Aurora, deseo apartar mi consulta de orientación espiritual hoy.",
        oracleMessage: (cardNames) => `Hola Maestra quiero consultar`,
        diagnosisMessage: () => "Hola Maestra quiero consultar",
        serviceMessage: (serviceName) => `Hola Maestra Aurora, solicito información y orientación sobre el servicio: "${serviceName}".`,
        testimonialMessage: "Hola Maestra Aurora, vi los testimonios en su página y deseo orientación para mi caso."
    },

    // Notificaciones de Prueba Social en Vivo (Social Proof en USA)
    liveActivity: [
        { name: "Carlos M.", city: "Los Angeles, CA", service: "Orientación de Pareja", time: "hace 3 minutos" },
        { name: "Valeria S.", city: "Miami, FL", service: "Apertura de Caminos & Prosperidad", time: "hace 7 minutos" },
        { name: "Andrés G.", city: "Houston, TX", service: "Limpieza Energética & Destrabe", time: "hace 11 minutos" },
        { name: "Lucía P.", city: "New York, NY", service: "Acompañamiento en el Amor", time: "hace 15 minutos" },
        { name: "Fernando T.", city: "Dallas, TX", service: "Prosperidad y Negocios", time: "hace 19 minutos" },
        { name: "Mariana R.", city: "Chicago, IL", service: "Protección Espiritual", time: "hace 24 minutos" },
        { name: "Roberto V.", city: "Phoenix, AZ", service: "Endulzamiento y Armonía", time: "hace 29 minutos" },
        { name: "Elena B.", city: "Las Vegas, NV", service: "Apertura de Caminos y Bienestar", time: "hace 33 minutos" }
    ],

    // Cartas Clásicas de Tarot (Arcanos Mayores Tradición Marsella)
    oracleCards: [
        {
            id: "sol",
            name: "El Sol",
            arcana: "XVIIII",
            frenchName: "Le Soleil",
            category: "Fortuna & Éxito",
            image: "img/tarot/tarot-sol.jpg"
        },
        {
            id: "amantes",
            name: "Los Enamorados",
            arcana: "VI",
            frenchName: "L'Amoureux",
            category: "Amor & Pasión",
            image: "img/tarot/tarot-amantes.jpg"
        },
        {
            id: "rueda",
            name: "La Rueda de la Fortuna",
            arcana: "X",
            frenchName: "La Roue de Fortune",
            category: "Destino & Giros",
            image: "img/tarot/tarot-rueda.jpg"
        },
        {
            id: "mago",
            name: "El Mago",
            arcana: "I",
            frenchName: "Le Bateleur",
            category: "Poder & Inicios",
            image: "img/tarot/tarot-mago.jpg"
        },
        {
            id: "estrella",
            name: "La Estrella",
            arcana: "XVII",
            frenchName: "L'Étoile",
            category: "Esperanza & Guía",
            image: "img/tarot/tarot-estrella.jpg"
        },
        {
            id: "luna",
            name: "La Luna",
            arcana: "XVIII",
            frenchName: "La Lune",
            category: "Secretos & Videncia",
            image: "img/tarot/tarot-luna.jpg"
        },
        {
            id: "mundo",
            name: "El Mundo",
            arcana: "XXI",
            frenchName: "Le Monde",
            category: "Realización",
            image: "img/tarot/tarot-mundo.jpg"
        },
        {
            id: "carro",
            name: "El Carro",
            arcana: "VII",
            frenchName: "Le Chariot",
            category: "Avance & Determinación",
            image: "img/tarot/tarot-carro.jpg"
        }
    ],

    // Servicios y Rituales
    services: [
        {
            id: "amarres",
            category: "amor",
            title: "Amarres y Unión de Pareja",
            subtitle: "Armonía y Vínculo Afectivo",
            desc: "Orientación espiritual para ayudar a superar el distanciamiento, enfriamiento y dudas en tu relación, fomentando el entendimiento mutuo.",
            img: "img/union-pareja.jpg",
            tag: "Más Consultado",
            features: ["Superación del orgullo", "Acompañamiento a distancia", "100% Sin daño ni malas intenciones"]
        },
        {
            id: "retorno",
            category: "amor",
            title: "Retorno del Ser Amado",
            subtitle: "Búsqueda de Reconciliación",
            desc: "Trabajos de energía espiritual para buscar el reencuentro, sanar heridas del pasado y propiciar el diálogo sincero con quien amas.",
            img: "img/retorno.jpg",
            tag: "Orientación",
            features: ["Favorece el diálogo", "Disuelve bloqueos emocionales", "Protección para la armonía"]
        },
        {
            id: "pasion",
            category: "amor",
            title: "Endulzamientos y Armonía",
            subtitle: "Afecto y Comprensión",
            desc: "Rituales de tradición espiritual para fomentar el afecto, la lealtad y el entendimiento en la convivencia de la pareja.",
            img: "img/amarre-se.jpg",
            tag: "Armonía",
            features: ["Atracción y empatía", "Lealtad y respeto", "Tranquilidad en el hogar"]
        },
        {
            id: "alejamiento",
            category: "amor",
            title: "Retiro de Interferencias",
            subtitle: "Protección de la Relación",
            desc: "Acompañamiento espiritual para ayudar a neutralizar la influencia de terceras personas o malas intenciones que afectan tu tranquilidad.",
            img: "img/alejamiento.jpg",
            tag: "Protección",
            features: ["Alejamiento discreto", "Tranquilidad de pareja", "Cuidado espiritual"]
        },
        {
            id: "fortuna",
            category: "fortuna",
            title: "Apertura de Caminos y Prosperidad",
            subtitle: "Bienestar y Desbloqueo Personal",
            desc: "Rituales de armonización energética orientados a desbloquear caminos, atraer oportunidades y superar etapas de estancamiento personal.",
            img: "img/fortuna.jpg",
            tag: "Abundancia",
            features: ["Enfoque de abundancia", "Atracción de oportunidades", "Desbloqueo de caminos"]
        },
        {
            id: "apertura",
            category: "fortuna",
            title: "Apertura de Negocios y Emprendimiento",
            subtitle: "Impulso y Crecimiento Laboral",
            desc: "Orientación espiritual para negocios estancados o proyectos laborales, atrayendo energía positiva y motivación comercial.",
            img: "img/apertura.jpg",
            tag: "Éxito Comercial",
            features: ["Atracción de clientes", "Superación de trabas", "Estabilidad y progreso"]
        },
        {
            id: "limpieza",
            category: "limpieza",
            title: "Purificación de Aura y Destrabe",
            subtitle: "Limpieza de Malas Energías",
            desc: "Trabajos de descarga energética para liberar pesadez, envidias y cargas negativas que frenan tu paz y crecimiento personal.",
            img: "img/limpieza.jpg",
            tag: "Liberación",
            features: ["Limpieza energética", "Renovación de vitalidad", "Paz interior"]
        },
        {
            id: "escudos",
            category: "proteccion",
            title: "Escudos Energéticos y Protección",
            subtitle: "Protección de Hogar y Negocio",
            desc: "Cerco espiritual de resguardo contra malas intenciones, envidias y vibraciones discordantes en tu entorno.",
            img: "img/escudos.jpg",
            tag: "Protección",
            features: ["Resguardo espiritual", "Armonía en el entorno", "Tranquilidad continua"]
        },
        {
            id: "videncia",
            category: "videncia",
            title: "Lectura de Cartas y Tarot",
            subtitle: "Claridad y Consejo Espiritual",
            desc: "Consulta a través del Tarot para obtener orientación sobre tu momento actual, tus relaciones y decisiones importantes.",
            img: "img/videncia.jpg",
            tag: "Consejo Espiritual",
            features: ["Orientación honesta", "Claridad para tus decisiones", "Acompañamiento cercano"]
        },
        {
            id: "magia-dual",
            category: "ancestral",
            title: "Tradición Espiritual Ancestral",
            subtitle: "Acompañamiento en Casos Complejos",
            desc: "Orientación profunda para situaciones complejas que requieren análisis detallado y dedicación espiritual personalizada.",
            img: "img/magia-dual.jpg",
            tag: "Casos Complejos",
            features: ["Atención detallada", "Tradición ancestral", "Dedicación personalizada"]
        }
    ],

    // Preguntas Frecuentes
    faqs: [
        {
            q: "¿Cómo se desarrolla el acompañamiento espiritual?",
            a: "Cada caso posee una situación particular y se atiende con dedicación. Durante la consulta analizamos las energías del entorno y establecemos un seguimiento espiritual continuo y respetuoso."
        },
        {
            q: "¿Cómo es el trato y la privacidad?",
            a: "La discreción es prioritaria. Toda conversación, consulta y dato compartido se mantiene bajo estricta confidencialidad personal."
        },
        {
            q: "¿Existe algún riesgo o daño en estos rituales?",
            a: "Ninguno. Nuestras prácticas se fundamentan en la búsqueda de armonía, paz y bienestar espiritual, sin recurrir a prácticas dañinas ni buscar perjudicar a terceros."
        },
        {
            q: "¿Cómo es el proceso de consulta a distancia por WhatsApp?",
            a: "Es directo y confidencial. Me contactas por WhatsApp, me explicas tu situación personal y te brindo orientación honesta y acompañamiento paso a paso."
        },
        {
            q: "¿Qué métodos de atención se ofrecen?",
            a: "Atención personalizada a distancia mediante WhatsApp y llamadas para mayor comodidad y privacidad desde cualquier estado del país."
        }
    ]
};

// =========================================================================
// FUNCIONES GLOBALES UNIVERSALES DE WHATSAPP
// =========================================================================

/**
 * Genera la URL de WhatsApp limpia y lista para usar.
 * @param {string} customMessage - Mensaje opcional. Si no se pasa, usa el mensaje por defecto.
 * @returns {string} Enlace https://wa.me/...
 */
function getWhatsAppUrl(customMessage) {
    const rawPhone = (window.SITE_CONFIG && window.SITE_CONFIG.whatsapp && window.SITE_CONFIG.whatsapp.phone)
        ? window.SITE_CONFIG.whatsapp.phone
        : (SITE_CONFIG.whatsapp.phone || '+1 3803457738');
    const cleanPhone = String(rawPhone).replace(/[^0-9]/g, '');
    const msg = customMessage || (SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp.defaultMessage) || 'Hola Maestra Aurora, deseo una consulta espiritual.';
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Abre directamente WhatsApp en una nueva pestaña
 * @param {string} customMessage - Mensaje opcional
 */
function openWhatsApp(customMessage) {
    const url = getWhatsAppUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Retrocompatibilidad con nombres anteriores
const buildWhatsAppUrl = getWhatsAppUrl;

// Exportar globalmente al objeto window
window.SITE_CONFIG = SITE_CONFIG;
window.getWhatsAppUrl = getWhatsAppUrl;
window.buildWhatsAppUrl = getWhatsAppUrl;
window.openWhatsApp = openWhatsApp;
