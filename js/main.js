/**
 * =========================================================================
 * SCRIPT PRINCIPAL - EXPERIENCIA INTERACTIVA & ALTA CONVERSIÓN
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initParticlesCanvas();
    initMasterInfo();
    initServicesGrid();
    initServiceFilters();
    initEnergyDiagnosis();
    initFaqAccordion();
    initLiveSocialProof();
    initTestimonialLightbox();
    initAudioSimulator();
    initGlobalWhatsAppLinks();
    initMobileNav();
    initUrgencyCounters();
});

/* -------------------------------------------------------------------------
   1. CANVAS DE PARTÍCULAS CELESTIALES Y DESTELLOS DE ORO
   ------------------------------------------------------------------------- */
function initParticlesCanvas() {
    const canvas = document.getElementById('mystic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4 - 0.2;
            this.alpha = Math.random() * 0.7 + 0.1;
            this.fadeSpeed = Math.random() * 0.008 + 0.002;
            this.color = Math.random() > 0.4 ? '#f3c64c' : (Math.random() > 0.5 ? '#a855f7' : '#ffffff');
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha += this.fadeSpeed;
            if (this.alpha > 0.8 || this.alpha < 0.1) {
                this.fadeSpeed = -this.fadeSpeed;
            }
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.alpha);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const count = Math.min(window.innerWidth < 768 ? 40 : 80, 100);
    particles = Array.from({ length: count }, () => new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

/* -------------------------------------------------------------------------
   2. RELLENAR DATOS GLOBALES DEL MAESTRO DESDE CONFIG
   ------------------------------------------------------------------------- */
function initMasterInfo() {
    const config = window.SITE_CONFIG;
    if (!config) return;

    // Actualizar nombres y títulos
    document.querySelectorAll('.dyn-master-name').forEach(el => el.textContent = config.master.name);
    document.querySelectorAll('.dyn-master-title').forEach(el => el.textContent = config.master.title);
    document.querySelectorAll('.dyn-master-subtitle').forEach(el => el.textContent = config.master.subtitle);
    document.querySelectorAll('.dyn-master-exp').forEach(el => el.textContent = config.master.experienceYears);
    document.querySelectorAll('.dyn-master-loc').forEach(el => el.textContent = config.master.location);

    // Año actual en el footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------------
   3. RENDERIZADO DEL CATÁLOGO DE SERVICIOS
   ------------------------------------------------------------------------- */
function initServicesGrid() {
    const grid = document.getElementById('services-grid');
    if (!grid || !SITE_CONFIG.services) return;

    grid.innerHTML = SITE_CONFIG.services.map(s => {
        const waLink = buildWhatsAppUrl(SITE_CONFIG.whatsapp.serviceMessage(s.title));
        const featuresHtml = s.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');

        return `
            <article class="service-card" data-category="${s.category}">
                <div class="service-card-glow"></div>
                <div class="service-image-box">
                    <img src="${s.img}" alt="${s.title}" loading="lazy" class="service-img">
                    <span class="service-tag">${s.tag}</span>
                </div>
                <div class="service-content">
                    <span class="service-subtitle">${s.subtitle}</span>
                    <h3 class="service-title">${s.title}</h3>
                    <p class="service-desc">${s.desc}</p>
                    <ul class="service-features">
                        ${featuresHtml}
                    </ul>
                    <div class="service-footer">
                        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-service-wa whatsapp-link">
                            <i class="fab fa-whatsapp"></i> Consultar este Ritual
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/* -------------------------------------------------------------------------
   4. FILTROS DE SERVICIOS
   ------------------------------------------------------------------------- */
function initServiceFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = () => document.querySelectorAll('.service-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            serviceCards().forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

/* -------------------------------------------------------------------------
   5. DIAGNÓSTICO ENERGÉTICO INTERACTIVO (TEST RÁPIDO EN 3 PASOS)
   ------------------------------------------------------------------------- */
function initEnergyDiagnosis() {
    const step1 = document.getElementById('diag-step-1');
    const step2 = document.getElementById('diag-step-2');
    const step3 = document.getElementById('diag-step-3');
    const resultDiv = document.getElementById('diag-result');
    const progressFill = document.getElementById('diag-progress-fill');
    const waDiagBtn = document.getElementById('diag-cta-whatsapp');
    const diagMeterScore = document.getElementById('diag-score-text');
    const diagAdviceText = document.getElementById('diag-advice-text');

    if (!step1) return;

    let selectedArea = '';
    let selectedSymptom = '';
    let selectedDuration = '';

    // Manejar opciones paso 1
    document.querySelectorAll('.diag-opt-1').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedArea = btn.getAttribute('data-val');
            step1.classList.remove('active');
            step2.classList.add('active');
            if (progressFill) progressFill.style.width = '66%';
        });
    });

    // Manejar opciones paso 2
    document.querySelectorAll('.diag-opt-2').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedSymptom = btn.getAttribute('data-val');
            step2.classList.remove('active');
            step3.classList.add('active');
            if (progressFill) progressFill.style.width = '100%';
        });
    });

    // Manejar opciones paso 3
    document.querySelectorAll('.diag-opt-3').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDuration = btn.getAttribute('data-val');
            step3.classList.remove('active');
            showDiagnosisResult();
        });
    });

    function showDiagnosisResult() {
        const score = Math.floor(Math.random() * 20) + 78; // 78% a 98%
        const scoreValEl = document.getElementById('diag-score-val') || document.getElementById('diag-score-text');
        if (scoreValEl) scoreValEl.textContent = `${score}%`;
        
        let needSummary = `${selectedArea} con síntoma de ${selectedSymptom} (${selectedDuration})`;
        if (diagAdviceText) {
            diagAdviceText.innerHTML = `
                Tu campo áurico presenta un <strong>nivel crítico de interferencia (${score}%)</strong>. 
                Los patrones de <em>${selectedArea}</em> indican que existe un bloqueo energético que 
                no cederá por sí solo sin un trabajo de corte y transmutación sagrada.
            `;
        }

        if (waDiagBtn) {
            const waMsg = SITE_CONFIG.whatsapp.diagnosisMessage(score, needSummary);
            waDiagBtn.href = buildWhatsAppUrl(waMsg);
        }

        if (resultDiv) {
            resultDiv.classList.add('active');
        }
    }

    const resetBtn = document.getElementById('diag-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (resultDiv) resultDiv.classList.remove('active');
            step2.classList.remove('active');
            step3.classList.remove('active');
            step1.classList.add('active');
            if (progressFill) progressFill.style.width = '33%';
        });
    }
}

/* -------------------------------------------------------------------------
   6. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
   ------------------------------------------------------------------------- */
function initFaqAccordion() {
    const faqContainer = document.getElementById('faq-accordion');
    if (!faqContainer || !SITE_CONFIG.faqs) return;

    faqContainer.innerHTML = SITE_CONFIG.faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}">
            <button class="faq-question" aria-expanded="${index === 0}">
                <span>${faq.q}</span>
                <i class="fas fa-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-inner">
                    <p>${faq.a}</p>
                </div>
            </div>
        </div>
    `).join('');

    faqContainer.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isOpen = item.classList.contains('active');

            faqContainer.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                item.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* -------------------------------------------------------------------------
   7. NOTIFICACIONES DE PRUEBA SOCIAL EN VIVO (TOASTS)
   ------------------------------------------------------------------------- */
function initLiveSocialProof() {
    const toast = document.getElementById('social-proof-toast');
    if (!toast || !SITE_CONFIG.liveActivity || SITE_CONFIG.liveActivity.length === 0) return;

    let index = 0;

    function showToast() {
        const item = SITE_CONFIG.liveActivity[index];
        toast.innerHTML = `
            <div class="toast-avatar">
                <i class="fas fa-user-shield"></i>
            </div>
            <div class="toast-content">
                <span class="toast-name"><strong>${item.name}</strong> (${item.city})</span>
                <span class="toast-action">Solicitó: <em>${item.service}</em></span>
                <span class="toast-time"><i class="fas fa-clock"></i> ${item.time}</span>
            </div>
            <button class="toast-close" aria-label="Cerrar"><i class="fas fa-times"></i></button>
        `;

        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
        });

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);

        index = (index + 1) % SITE_CONFIG.liveActivity.length;
    }

    // Primer toast a los 3 segundos, luego cada 14 segundos
    setTimeout(() => {
        showToast();
        setInterval(showToast, 14000);
    }, 3000);
}

/* -------------------------------------------------------------------------
   8. LIGHTBOX PARA CAPTURAS DE TESTIMONIOS
   ------------------------------------------------------------------------- */
function initTestimonialLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    if (!modal || !modalImg) return;

    document.querySelectorAll('.testimonio-card img, .gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('open');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    }
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
}

/* -------------------------------------------------------------------------
   9. REPRODUCTOR DE NOTA DE VOZ CON AUDIO LATINO REAL (SPEECH & WEB AUDIO)
   ------------------------------------------------------------------------- */
function initAudioSimulator() {
    const playBtns = document.querySelectorAll('.audio-play-btn');
    let activeBtn = null;
    let activeInterval = null;

    function playWhatsAppChime() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {
            // AudioContext bloqueado o no disponible
        }
    }

    function stopCurrentAudio() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        if (activeInterval) {
            clearInterval(activeInterval);
            activeInterval = null;
        }
        if (activeBtn) {
            activeBtn.innerHTML = '<i class="fas fa-play"></i>';
            activeBtn.classList.remove('playing');
            const card = activeBtn.closest('.audio-note-card');
            if (card) {
                const bar = card.querySelector('.audio-progress-bar');
                if (bar) bar.style.width = '0%';
            }
            activeBtn = null;
        }
    }

    // Cargar catálogo de voces del sistema
    let availableVoices = [];
    function loadVoices() {
        if ('speechSynthesis' in window) {
            availableVoices = window.speechSynthesis.getVoices();
        }
    }
    loadVoices();
    if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    playBtns.forEach(btn => {
        const card = btn.closest('.audio-note-card');
        const progressBar = card ? card.querySelector('.audio-progress-bar') : null;
        const timeDisplay = card ? card.querySelector('.audio-time') : null;
        const speechText = card ? card.getAttribute('data-speech') : '';
        const gender = card ? (card.getAttribute('data-gender') || 'female') : 'female';

        btn.addEventListener('click', () => {
            const isThisPlaying = (activeBtn === btn);

            if (isThisPlaying) {
                stopCurrentAudio();
                return;
            }

            stopCurrentAudio();
            playWhatsAppChime();

            btn.innerHTML = '<i class="fas fa-pause"></i>';
            btn.classList.add('playing');
            activeBtn = btn;

            const totalDurationSec = (gender === 'male') ? 15 : 14;
            let elapsedSec = 0;

            if ('speechSynthesis' in window && speechText) {
                const utter = new SpeechSynthesisUtterance(speechText);
                utter.lang = 'es-US';

                // Calibrar tono y velocidad según género
                if (gender === 'male') {
                    utter.pitch = 0.76; // Tono grave y masculino
                    utter.rate = 0.92;
                } else {
                    utter.pitch = 1.06; // Tono femenino claro
                    utter.rate = 0.95;
                }

                if (availableVoices.length === 0) {
                    availableVoices = window.speechSynthesis.getVoices();
                }

                // Filtrar voces en español con prioridad a acentos latinos
                const latinVoices = availableVoices.filter(v => {
                    const l = v.lang.toLowerCase();
                    return (l.includes('es-us') || l.includes('es-mx') || l.includes('es-419') || l.includes('es-co') || l.includes('es-ar') || l.includes('es-cl') || (l.startsWith('es') && !l.includes('es-es')));
                });
                const allSpanishVoices = availableVoices.filter(v => v.lang.toLowerCase().startsWith('es'));

                let selectedVoice = null;

                if (gender === 'male') {
                    // Buscar voz masculina específica en español
                    selectedVoice = latinVoices.find(v => {
                        const n = v.name.toLowerCase();
                        return n.includes('jorge') || n.includes('raul') || n.includes('diego') || n.includes('miguel') || n.includes('david') || n.includes('pablo') || n.includes('male');
                    }) || allSpanishVoices.find(v => {
                        const n = v.name.toLowerCase();
                        return n.includes('jorge') || n.includes('raul') || n.includes('diego') || n.includes('miguel') || n.includes('david') || n.includes('pablo') || n.includes('male');
                    }) || latinVoices[1] || latinVoices[0] || allSpanishVoices[0];
                } else {
                    // Buscar voz femenina específica en español latino
                    selectedVoice = latinVoices.find(v => {
                        const n = v.name.toLowerCase();
                        return n.includes('paulina') || n.includes('monica') || n.includes('sabina') || n.includes('dalia') || n.includes('elena') || n.includes('mia') || n.includes('lupe') || n.includes('female');
                    }) || allSpanishVoices.find(v => {
                        const n = v.name.toLowerCase();
                        return n.includes('paulina') || n.includes('monica') || n.includes('sabina') || n.includes('dalia') || n.includes('elena') || n.includes('mia') || n.includes('lupe') || n.includes('female');
                    }) || latinVoices[0] || allSpanishVoices[0];
                }

                if (selectedVoice) {
                    utter.voice = selectedVoice;
                }

                utter.onend = () => stopCurrentAudio();
                utter.onerror = () => stopCurrentAudio();

                window.speechSynthesis.speak(utter);
            }

            // Animación de la barra de progreso
            activeInterval = setInterval(() => {
                elapsedSec += 0.2;
                const progressPct = Math.min(100, (elapsedSec / totalDurationSec) * 100);
                if (progressBar) progressBar.style.width = `${progressPct}%`;
                if (timeDisplay) {
                    const currentSec = Math.floor(elapsedSec);
                    timeDisplay.textContent = `0:${currentSec < 10 ? '0' : ''}${currentSec} / 0:${totalDurationSec}`;
                }
                if (progressPct >= 100) {
                    stopCurrentAudio();
                }
            }, 200);
        });
    });
}

/* -------------------------------------------------------------------------
   10. ENLACES UNIVERSALES DE WHATSAPP
   ------------------------------------------------------------------------- */
function initGlobalWhatsAppLinks() {
    // 1. Configurar todos los botones y enlaces de WhatsApp
    document.querySelectorAll('.whatsapp-link, a[href="#contacto"]').forEach(link => {
        let msg = link.getAttribute('data-wa-msg');
        if (!msg) {
            if (link.classList.contains('urgency-link')) {
                msg = SITE_CONFIG.whatsapp.urgencyMessage;
            } else {
                msg = SITE_CONFIG.whatsapp.defaultMessage;
            }
        }
        
        link.href = getWhatsAppUrl(msg);
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.addEventListener('click', (e) => {
            // Evitar scroll o comportamiento por defecto si es link de ancla
            e.preventDefault();
            openWhatsApp(msg);
        });
    });

    // 2. Elementos del menú rápido flotante de WhatsApp
    document.querySelectorAll('.wp-menu-item').forEach(item => {
        const text = item.textContent.trim();
        const msg = `Hola Maestra Aurora, solicito información y ayuda urgente sobre el tema: "${text}".`;
        item.href = getWhatsAppUrl(msg);
        item.target = "_blank";
        item.rel = "noopener noreferrer";

        item.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp(msg);
        });
    });

    // 3. Notificación flotante de prueba social en vivo
    const toast = document.getElementById('social-proof-toast');
    if (toast) {
        toast.style.cursor = 'pointer';
        toast.addEventListener('click', (e) => {
            if (e.target.closest('.toast-close')) return;
            openWhatsApp("Hola Maestra Aurora, vi la atención en vivo en el santuario y deseo consultar mi caso ahora mismo.");
        });
    }

    // 4. Botón flotante principal de WhatsApp
    const floatBtn = document.getElementById('wp-flotante-btn');
    const floatMenu = document.getElementById('wp-quick-menu');
    if (floatBtn && floatMenu) {
        floatBtn.addEventListener('click', (e) => {
            floatMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!floatBtn.contains(e.target) && !floatMenu.contains(e.target)) {
                floatMenu.classList.remove('active');
            }
        });
    }
}

/* -------------------------------------------------------------------------
   11. MENÚ DE NAVEGACIÓN MÓVIL
   ------------------------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

/* -------------------------------------------------------------------------
   12. CONTADOR DE URGENCIA DINÁMICO
   ------------------------------------------------------------------------- */
function initUrgencyCounters() {
    const cuposEl = document.getElementById('cupos-count');
    if (cuposEl) {
        // Simular variación realista de 2 a 4 cupos disponibles
        const hours = new Date().getHours();
        const available = hours > 18 ? 2 : (hours > 12 ? 3 : 4);
        cuposEl.textContent = `${available} cupos`;
    }
}
