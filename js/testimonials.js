/* =============================================
   testimonials.js — Manual dot-nav slider
   ============================================= */

(function () {
    'use strict';

    const track = document.getElementById('testimonial-track');
    const dots  = document.querySelectorAll('.nav-dot');
    let current = 0;
    let autoTimer;

    // ── Switch to a specific slide ────────────────
    function goTo(index) {
        current = index;

        // Slide the track (LTR direction on the element, RTL is handled by layout)
        track.style.transform = `translateX(${index * 33.333}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // ── Wire up dot buttons ───────────────────────
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(autoTimer);   // pause auto-play on manual click
            goTo(i);
            startAuto();                // restart auto-play after pause
        });
    });

    // ── Auto-play every 5 s ───────────────────────
    function startAuto() {
        autoTimer = setInterval(() => {
            goTo((current + 1) % dots.length);
        }, 5000);
    }

    // ── Init ─────────────────────────────────────
    goTo(0);
    startAuto();
})();
