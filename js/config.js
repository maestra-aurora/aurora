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
        title: "Guía Espiritual & Custodia de la Alta Magia",
        subtitle: "Secretos de Samayac & Tradición Ancestral",
        experienceYears: "+25 años de experiencia",
        location: "Samayac & Santuarios Sagrados",
        rating: "4.99",
        reviewsCount: "Experiencia Espiritual"
    },

    // =========================================================================
    // 🔴 1. NÚMERO Y MENSAJES DE WHATSAPP (CAMBIA EL NÚMERO AQUÍ Y CAMBIA EN TODA LA WEB)
    // =========================================================================
    whatsapp: {
        // Formato internacional (con o sin signo +, ej: "5020000000" o "+1 (555) 123-4567")
        phone: "50200000000",
        defaultMessage: "Hola Maestra Aurora, deseo una consulta espiritual inmediata y totalmente confidencial.",
        urgencyMessage: "Hola Maestra Aurora, veo que quedan pocos cupos para hoy. Deseo apartar mi consulta de inmediato.",
        oracleMessage: (cardNames) => `Hola Maestra quiero consultar`,
        diagnosisMessage: () => "Hola Maestra quiero consultar",
        serviceMessage: (serviceName) => `Hola Maestra Aurora, solicito información y consulta urgente sobre el ritual: "${serviceName}".`,
        testimonialMessage: "Hola Maestra Aurora, vi los testimonios en su página y deseo una ayuda y resultado similar para mi caso."
    },

    // Notificaciones de Prueba Social en Vivo (Social Proof en USA)
    liveActivity: [
        { name: "Carlos M.", city: "Los Angeles, CA", service: "Retorno del Ser Amado", time: "hace 3 minutos" },
        { name: "Valeria S.", city: "Miami, FL", service: "Apertura de Caminos & Fortuna", time: "hace 7 minutos" },
        { name: "Andrés G.", city: "Houston, TX", service: "Limpieza Áurica & Destrabe", time: "hace 11 minutos" },
        { name: "Lucía P.", city: "New York, NY", service: "Amarre de Dominio Total", time: "hace 15 minutos" },
        { name: "Fernando T.", city: "Dallas, TX", service: "Pacto de Prosperidad y Negocios", time: "hace 19 minutos" },
        { name: "Mariana R.", city: "Chicago, IL", service: "Protección contra Envidias", time: "hace 24 minutos" },
        { name: "Roberto V.", city: "Phoenix, AZ", service: "Endulzamiento de Pareja", time: "hace 29 minutos" },
        { name: "Elena B.", city: "Las Vegas, NV", service: "Apertura de Azar y Suerte", time: "hace 33 minutos" }
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
            category: "Triunfo Absoluto",
            image: "img/tarot/tarot-mundo.jpg"
        },
        {
            id: "carro",
            name: "El Carro",
            arcana: "VII",
            frenchName: "Le Chariot",
            category: "Victoria & Avance",
            image: "img/tarot/tarot-carro.jpg"
        }
    ],

    // Servicios y Rituales
    services: [
        {
            id: "amarres",
            category: "amor",
            title: "Amarres de Parejas Eternos",
            subtitle: "Unión Sagrada e Indestructible",
            desc: "Ato su corazón, mente y voluntad a ti. Elimino el orgullo, la frialdad y las dudas para que el amor florezca con más pasión que el primer día.",
            img: "img/union-pareja.jpg",
            tag: "Más Solicitado",
            features: ["Doblega el orgullo", "Sin importar distancia o tiempo", "100% Sin daño ni karma negativo"]
        },
        {
            id: "retorno",
            category: "amor",
            title: "Retorno del Ser Amado",
            subtitle: "Regreso Arrepentido y Sumiso",
            desc: "Hago que vuelva pidiendo perdón, desesperado/a por tu cariño y con la total convicción de que eres su único y verdadero destino.",
            img: "img/retorno.jpg",
            tag: "Resultados Rápidos",
            features: ["Reaviva la pasión dormida", "Quita bloqueos emocionales", "Protección permanente a la pareja"]
        },
        {
            id: "pasion",
            category: "amor",
            title: "Endulzamientos & Dominio",
            subtitle: "Atracción Irresistible y Fidelidad",
            desc: "Rituales de alta magia para avivar la llama del deseo carnal y la devoción absoluta, logrando fidelidad y adoración plena hacia ti.",
            img: "img/amarre-se.jpg",
            tag: "Poder de Atracción",
            features: ["Máxima atracción magnética", "Lealtad y fidelidad incondicional", "Armonía total en el hogar"]
        },
        {
            id: "alejamiento",
            category: "amor",
            title: "Retiro de Terceras Personas",
            subtitle: "Corte Definitivo de Amantes y Envidias",
            desc: "Destierro definitivamente a rivales amorosos, amantes, falsas amistades o familiares entrometidos que intentan arruinar tu relación.",
            img: "img/alejamiento.jpg",
            tag: "Corte Tajante",
            features: ["Separación fría y definitiva", "Cero sospechas", "Blindaje contra futuras interferencias"]
        },
        {
            id: "fortuna",
            category: "fortuna",
            title: "Fortuna, Lotería y Azar",
            subtitle: "Magnetismo de Dinero y Números Sagrados",
            desc: "Revelaciones y pactos de luz para atraer golpes de suerte, aciertos en juegos de azar, herencias y destrabe de deudas asfixiantes.",
            img: "img/fortuna.jpg",
            tag: "Abundancia",
            features: ["Canalización de números clave", "Atracción de riqueza constante", "Desbloqueo de caminos económicos"]
        },
        {
            id: "apertura",
            category: "fortuna",
            title: "Apertura de Negocios y Éxito",
            subtitle: "Prosperidad y Triunfo Laboral",
            desc: "Destrabo negocios estancados, clientes ausentes y fracasos repetitivos. Activo la vibración del oro y la victoria profesional.",
            img: "img/apertura.jpg",
            tag: "Éxito Comercial",
            features: ["Multiplica clientes y ventas", "Supera a la competencia", "Estabilidad financiera duradera"]
        },
        {
            id: "limpieza",
            category: "limpieza",
            title: "Purificación de Aura y Destrabe",
            subtitle: "Destrucción de Brujería y Salaciones",
            desc: "Limpio toda carga oscura, maleficios, entierros, mal de ojo y salaciones ancestrales que mantienen tu vida estancada y enferma.",
            img: "img/limpieza.jpg",
            tag: "Liberación Total",
            features: ["Corte de ataduras oscuras", "Renovación de vitalidad", "Paz interior inmediata"]
        },
        {
            id: "escudos",
            category: "proteccion",
            title: "Escudos Energéticos y Blindajes",
            subtitle: "Protección de Cuerpo, Hogar y Negocio",
            desc: "Cerco místico impenetrable contra enemigos ocultos, envidias tóxicas, traiciones y ataques espirituales nocturnos.",
            img: "img/escudos.jpg",
            tag: "Protección Absoluta",
            features: ["Sello sagrado protector", "Rebota el mal a su origen", "Vigencia y amparo espiritual"]
        },
        {
            id: "videncia",
            category: "videncia",
            title: "Lectura de Cartas y Videncia Pura",
            subtitle: "Verdades Ocultas Reveladas",
            desc: "Consulta a través del Tarot, tabaco y agua sagrada. Conoce intenciones ocultas, infidelidades, futuro amoroso y secretos enterrados.",
            img: "img/videncia.jpg",
            tag: "Revelación Clara",
            features: ["Sin rodeos ni engaños", "Respuestas directas a tus dudas", "Consejo espiritual preciso"]
        },
        {
            id: "magia-dual",
            category: "ancestral",
            title: "Alta Magia Ancestral de Samayac",
            subtitle: "Poder Secreto para Casos Extremos",
            desc: "Trabajos de máxima jerarquía espiritual para aquellos casos donde otros maestros fallaron o dijeron que no había solución.",
            img: "img/magia-dual.jpg",
            tag: "Casos Difíciles",
            features: ["Manejo de altas frecuencias", "Secretos de linaje milenario", "Eficacia demostrada"]
        }
    ],

    // Preguntas Frecuentes
    faqs: [
        {
            q: "¿En cuánto tiempo comienzan a verse los resultados?",
            a: "Cada caso posee una vibración única. Sin embargo, gracias a los rituales de Alta Magia y a la consagración en santuarios sagrados, los primeros cambios energéticos y de actitud suelen manifestarse entre las primeras 24 a 72 horas."
        },
        {
            q: "¿Mi pareja o la persona trabajada se dará cuenta de lo que hago?",
            a: "No, en lo absoluto. Todo trabajo se realiza bajo estricto sigilo místico y planos sutiles. La persona sentirá que sus deseos, pensamientos de amor y arrepentimiento nacen de forma totalmente natural y espontánea."
        },
        {
            q: "¿Existe algún riesgo, consecuencia o karma negativo?",
            a: "Ninguno. Nuestras consagraciones se efectúan mediante Alta Magia Blanca y Roja de transmutación de energías. No utilizamos magias destructivas que perjudiquen tu karma, tu salud ni la de tus seres queridos."
        },
        {
            q: "¿Cómo es el proceso de consulta a distancia por WhatsApp?",
            a: "Es 100% personalizado y confidencial. Me contactas directamente, me expones tu situación (nombres, fechas o fotos si las tienes), realizo un diagnóstico espiritual inicial y te indico el camino exacto para solucionar tu problema."
        },
        {
            q: "¿Qué métodos de atención y privacidad se garantizan?",
            a: "La discreción es absoluta e inquebrantable. Ningún dato ni conversación es compartida. Tu secreto queda resguardado bajo el juramento sagrado de nuestro templo."
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
        : (SITE_CONFIG.whatsapp.phone || '50200000000');
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
