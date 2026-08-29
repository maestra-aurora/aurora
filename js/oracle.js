/**
 * =========================================================================
 * ORÁCULO SAGRADO DE TAROT INTERACTIVO 3D
 * =========================================================================
 * Maneja la selección, barajado, volteo 3D con cartas auténticas de Tarot
 * y llamado de alta atracción para consultar por WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
    initOracle();
});

function initOracle() {
    const cardsContainer = document.getElementById('oracle-cards-container');
    const resultBox = document.getElementById('oracle-result-box');
    const shuffleBtn = document.getElementById('oracle-shuffle-btn');
    const oracleCtaBtn = document.getElementById('oracle-cta-whatsapp');
    const oracleSummaryText = document.getElementById('oracle-summary-text');
    const oracleCardsDrawn = document.getElementById('oracle-cards-drawn');

    if (!cardsContainer) return;

    let drawnCards = [];
    let flippedCount = 0;
    let isRevealing = false;

    const positions = [
        { label: "1. Pasado & Raíz", desc: "El origen de tu situación actual" },
        { label: "2. Presente & Revelación", desc: "Lo que está oculto y actúa hoy sobre ti" },
        { label: "3. Futuro & Destino", desc: "El camino que los Arcanos te señalan" }
    ];

    // Barajar cartas aleatoriamente
    function pickRandomCards() {
        const pool = [...SITE_CONFIG.oracleCards];
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        return pool.slice(0, 3);
    }

    // Renderizar cartas en estado boca abajo
    function setupCards() {
        cardsContainer.innerHTML = '';
        drawnCards = pickRandomCards();
        flippedCount = 0;
        isRevealing = false;
        if (resultBox) resultBox.classList.remove('active');

        positions.forEach((pos, idx) => {
            const cardData = drawnCards[idx];
            const cardEl = document.createElement('div');
            cardEl.className = 'oracle-card-wrapper';
            cardEl.innerHTML = `
                <div class="card-position-tag">${pos.label}</div>
                <div class="oracle-card" id="card-${idx}" data-idx="${idx}">
                    <div class="oracle-card-inner">
                        <!-- Lado Trasero (Boca Abajo: Dorso Sagrado de Tarot) -->
                        <div class="oracle-card-face card-back">
                            <span class="card-back-prompt"><i class="fas fa-wand-magic-sparkles"></i> Toca para Revelar tu Tirada</span>
                        </div>
                        <!-- Lado Delantero (Revelado: Ilustración Auténtica de Carta de Tarot) -->
                        <div class="oracle-card-face card-front tarot-art-face">
                            <div class="tarot-art-container">
                                <img src="${cardData.image}" alt="${cardData.name} - ${cardData.frenchName}" class="tarot-art-image" loading="lazy">
                            </div>
                            <div class="tarot-card-name-pill">
                                <span>${cardData.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-hint">${pos.desc}</div>
            `;

            // Evento de clic: activa la revelación en cascada con auto-scroll que acompaña cada carta
            const cardInner = cardEl.querySelector('.oracle-card');
            cardInner.addEventListener('click', () => {
                if (!cardInner.classList.contains('flipped')) {
                    revealAllCardsInCascade();
                }
            });

            cardsContainer.appendChild(cardEl);
        });
    }

    // Revelar las 3 cartas secuencialmente 1 por 1 con auto-scroll suave que acompaña cada carta
    function revealAllCardsInCascade() {
        if (isRevealing || flippedCount === 3) return;
        isRevealing = true;

        const allCardWrappers = cardsContainer.querySelectorAll('.oracle-card-wrapper');
        allCardWrappers.forEach((wrapperEl, index) => {
            const cardEl = wrapperEl.querySelector('.oracle-card');
            // Cada carta espera 950ms para que el usuario aprecie el giro 3D completo
            setTimeout(() => {
                if (cardEl && !cardEl.classList.contains('flipped')) {
                    // Auto-scroll suave guiando la vista hacia la carta que se está revelando
                    wrapperEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    cardEl.classList.add('flipped');
                    triggerCardParticles(cardEl);
                    flippedCount++;
                    if (flippedCount === 3) {
                        checkAllFlipped();
                        isRevealing = false;
                    }
                }
            }, index * 950);
        });
    }

    // Pequeño efecto de partículas místicas al voltear
    function triggerCardParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 14; i++) {
            const spark = document.createElement('div');
            spark.className = 'oracle-spark';
            const x = (Math.random() - 0.5) * 130;
            const y = (Math.random() - 0.5) * 130;
            spark.style.setProperty('--tx', `${x}px`);
            spark.style.setProperty('--ty', `${y}px`);
            spark.style.left = `${rect.width / 2}px`;
            spark.style.top = `${rect.height / 2}px`;
            element.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }
    }

    // Verificar si se voltearon las 3 cartas para mostrar resultado y botón de WhatsApp
    function checkAllFlipped() {
        if (flippedCount === 3) {
            setTimeout(() => {
                if (resultBox) {
                    const cardNames = drawnCards.map(c => c.name).join(' ✦ ');
                    if (oracleCardsDrawn) oracleCardsDrawn.textContent = cardNames;

                    if (oracleSummaryText) {
                        oracleSummaryText.innerHTML = `
                            Escríbele a la Maestra Aurora ahora mismo para recibir lectura de Tarot personalizada.</strong>
                        `;
                    }

                    // Asignar mensaje a WhatsApp
                    if (oracleCtaBtn) {
                        const cardNamesStr = drawnCards.map(c => c.name).join(', ');
                        const waMsg = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsapp && typeof SITE_CONFIG.whatsapp.oracleMessage === 'function')
                            ? SITE_CONFIG.whatsapp.oracleMessage(cardNamesStr)
                            : `Hola Maestra Aurora, acabo de realizar mi tirada de Tarot con las cartas [${cardNamesStr}] y deseo mi lectura completa.`;

                        if (typeof getWhatsAppUrl === 'function') {
                            oracleCtaBtn.href = getWhatsAppUrl(waMsg);
                        } else if (typeof buildWhatsAppUrl === 'function') {
                            oracleCtaBtn.href = buildWhatsAppUrl(waMsg);
                        }
                    }

                    resultBox.classList.add('active');
                    // Scroll suave guiando la vista al resultado y botón de WhatsApp
                    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 950);
        }
    }

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            shuffleBtn.classList.add('spinning');
            setupCards();
            setTimeout(() => shuffleBtn.classList.remove('spinning'), 600);
        });
    }

    setupCards();
}
