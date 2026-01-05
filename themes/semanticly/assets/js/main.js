/**
 * Main JavaScript for semanticly.ai
 * Minimal, accessible, and progressively enhanced
 */

(function() {
  'use strict';

  // Mobile navigation toggle
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-open');
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('is-open') &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  // FAQ accordion
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      // Set up ARIA attributes
      const answerId = 'faq-answer-' + Math.random().toString(36).substr(2, 9);
      answer.id = answerId;
      question.setAttribute('aria-controls', answerId);
      question.setAttribute('aria-expanded', 'false');

      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('is-open');

        // Close all other items (optional - for single open at a time)
        // faqItems.forEach(function(otherItem) {
        //   otherItem.classList.remove('is-open');
        //   otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        // });

        item.classList.toggle('is-open');
        question.setAttribute('aria-expanded', !isOpen);
      });

      // Keyboard support
      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  }

  // Smooth scroll for anchor links (progressive enhancement)
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  // Header scroll behavior (add shadow on scroll)
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Contact form handling (for Formspree)
  function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
    });
  }

  // Initialize all components when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initFaqAccordion();
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
  });

})();
