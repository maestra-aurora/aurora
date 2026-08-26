/**
 * =========================================================================
 * ORÁCULO SAGRADO DE TAROT INTERACTIVO 3D
 * =========================================================================
 * Maneja la selección, barajado, volteo 3D de cartas y generación de
 * interpretación mística con enlace directo a WhatsApp.
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
    const positions = [
        { label: "1. Pasado & Raíz", desc: "El origen de tu bloqueo o situación actual" },
        { label: "2. Presente & Revelación", desc: "Lo que está oculto y actúa hoy sobre ti" },
        { label: "3. Futuro & Solución", desc: "El camino y ritual exacto para vencer" }
    ];

    // Barajar cartas aleatoriamente
    function pickRandomCards() {
        const pool = [...SITE_CONFIG.oracleCards];
        // Fisher-Yates shuffle
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
        if (resultBox) resultBox.classList.remove('active');

        const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];

        positions.forEach((pos, idx) => {
            const cardData = drawnCards[idx];
            const roman = romanNumerals[idx * 3 + Math.floor(Math.random() * 3)] || "VII";
            const cardEl = document.createElement('div');
            cardEl.className = 'oracle-card-wrapper';
            cardEl.innerHTML = `
                <div class="card-position-tag">${pos.label}</div>
                <div class="oracle-card" id="card-${idx}" data-idx="${idx}">
                    <div class="oracle-card-inner">
                        <!-- Lado Trasero (Boca Abajo: Dorso Sagrado de Tarot) -->
                        <div class="oracle-card-face card-back">
                            <span class="card-back-prompt"><i class="fas fa-hand-sparkles"></i> Toca para Revelar</span>
                        </div>
                        <!-- Lado Delantero (Revelado: Carta Consagrada) -->
                        <div class="oracle-card-face card-front">
                            <div class="tarot-inner-frame">
                                <div class="tarot-card-header">
                                    <span class="tarot-num">${roman}</span>
                                    <span class="card-badge">${cardData.category}</span>
                                    <span class="tarot-num">${roman}</span>
                                </div>
                                <div class="card-icon-wrap">
                                    <i class="${cardData.icon}"></i>
                                </div>
                                <h4 class="card-title">${cardData.name}</h4>
                                <div class="tarot-card-divider">✦</div>
                                <p class="card-meaning">${cardData.meaning}</p>
                                <div class="card-ritual-tag">
                                    <i class="fas fa-wand-magic-sparkles"></i> ${cardData.recommendation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-hint">${pos.desc}</div>
            `;

            // Evento de clic para voltear la carta
            const cardInner = cardEl.querySelector('.oracle-card');
            cardInner.addEventListener('click', () => {
                if (!cardInner.classList.contains('flipped')) {
                    cardInner.classList.add('flipped');
                    triggerCardParticles(cardInner);
                    flippedCount++;
                    checkAllFlipped();
                }
            });

            cardsContainer.appendChild(cardEl);
        });
    }

    // Pequeño efecto de partículas místicas al voltear
    function triggerCardParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 12; i++) {
            const spark = document.createElement('div');
            spark.className = 'oracle-spark';
            const x = (Math.random() - 0.5) * 120;
            const y = (Math.random() - 0.5) * 120;
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
                    const cardNames = drawnCards.map(c => c.name).join(' + ');
                    if (oracleCardsDrawn) oracleCardsDrawn.textContent = cardNames;

                    if (oracleSummaryText) {
                        oracleSummaryText.innerHTML = `
                            Has revelado la combinación sagrada de <strong>${drawnCards[0].name}</strong>, 
                            <strong>${drawnCards[1].name}</strong> y <strong>${drawnCards[2].name}</strong>. 
                            Las fuerzas espirituales muestran que hay una energía pendiente por destrabar. 
                            El <em>${drawnCards[2].recommendation}</em> es la clave para manifestar tus deseos.
                        `;
                    }

                    // Asignar mensaje a WhatsApp
                    if (oracleCtaBtn) {
                        const waMsg = SITE_CONFIG.whatsapp.oracleMessage(cardNames);
                        oracleCtaBtn.href = buildWhatsAppUrl(waMsg);
                    }

                    resultBox.classList.add('active');
                    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 600);
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
