/* =============================================
   faq.js — Accordion open / close
   ============================================= */

(function () {
    'use strict';

    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const btn = item.querySelector('.faq-question');

        btn.addEventListener('click', () => {
            const isAlreadyOpen = item.classList.contains('active');

            // Close all open items first (accordion behaviour)
            items.forEach(i => i.classList.remove('active'));

            // Toggle the clicked item (if it was closed, open it)
            if (!isAlreadyOpen) {
                item.classList.add('active');
            }
        });
    });
})();
