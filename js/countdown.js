/* =============================================
   countdown.js — Deadline countdown timer
   =============================================
   To change the deadline, update TARGET_DATE below.
   ============================================= */

(function () {
    'use strict';

    // ── Configuration ────────────────────────────
    // Set the registration close date here (ISO string or Date constructor args)
    const TARGET_DATE = new Date();
    TARGET_DATE.setDate(TARGET_DATE.getDate() + 14); // 14 days from now

    // ── DOM refs ─────────────────────────────────
    const daysEl    = document.getElementById('days');
    const hoursEl   = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // ── Helper: zero-pad a number ────────────────
    function pad(n) {
        return n.toString().padStart(2, '0');
    }

    // ── Tick function ─────────────────────────────
    function tick() {
        const diff = TARGET_DATE - Date.now();

        if (diff <= 0) {
            daysEl.textContent = minutesEl.textContent =
            hoursEl.textContent = secondsEl.textContent = '00';
            return;
        }

        const days    = Math.floor(diff / 86_400_000);
        const hours   = Math.floor((diff % 86_400_000) / 3_600_000);
        const minutes = Math.floor((diff % 3_600_000)  /    60_000);
        const seconds = Math.floor((diff % 60_000)     /     1_000);

        daysEl.textContent    = pad(days);
        hoursEl.textContent   = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
    }

    tick();
    setInterval(tick, 1000);
})();
