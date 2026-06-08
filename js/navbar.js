/* =============================================
   navbar.js — Scroll effect + mobile hamburger
   ============================================= */

(function () {
    'use strict';

    const navbar     = document.getElementById('navbar');
    const hamburger  = document.getElementById('hamburger-menu');
    const navMenu    = document.getElementById('nav-menu');
    const navLinks   = document.querySelectorAll('.nav-link');

    // ── Scroll: add .scrolled class ──────────────
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── Hamburger toggle ─────────────────────────
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        hamburger.querySelector('i').className = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    });

    // ── Close menu on link click ──────────────────
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
})();
