
document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú móvil
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  // 2. Botones "Quiero este plan" → preselecciona y scrollea al form
  const planButtons = document.querySelectorAll('.plan__btn');
  const planSelect = document.getElementById('planSelect');
  const form = document.getElementById('subscribeForm');

  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const planValue = btn.getAttribute('data-plan');
      if (planSelect && planValue) {
        const options = Array.from(planSelect.options);
        const match = options.find(o => o.value === planValue || o.text === planValue);
        if (match) planSelect.value = match.value || match.text;
      }
      const target = document.getElementById('suscribirme');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const card = target.querySelector('.form-card');
        if (card) {
          card.style.transition = 'transform 0.4s ease';
          card.style.transform = 'scale(1.015)';
          setTimeout(() => { card.style.transform = ''; }, 500);
        }
      }
    });
  });

  // 3. Submit del form → arma mensaje de WhatsApp
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const nombre = (formData.get('nombre') || '').trim();
      const telefono = (formData.get('telefono') || '').trim();
      const plan = (formData.get('plan') || '').trim();
      const comentarios = (formData.get('comentarios') || '').trim();
      const note = document.getElementById('formNote');

      if (!nombre || !telefono || !plan) {
        if (note) {
          note.textContent = '✗ Faltan campos por completar.';
          note.style.color = '#d4622a';
        }
        return;
      }

      let msg = `¡Hola Cool Auntie! 🌟\n\nMe interesa el plan: ${plan}\n\nMis datos:\n• Nombre: ${nombre}\n• Teléfono: ${telefono}`;
      if (comentarios) msg += `\n• Comentarios: ${comentarios}`;
      msg += `\n\n¡Espero más info!`;

      const waUrl = `https://wa.me/50672950167?text=${encodeURIComponent(msg)}`;

      if (note) {
        note.textContent = '✓ ¡Listo! Te llevamos a WhatsApp para terminar...';
        note.style.color = 'var(--purple)';
      }

      setTimeout(() => {
        window.open(waUrl, '_blank');
        form.reset();
        if (note) setTimeout(() => { note.textContent = ''; }, 4000);
      }, 600);
    });
  }

  // 4. Reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.product, .plan, .feature, .contact__card, .form-card, .about__content, .section__header'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // 5. Header sombra al scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 0 rgba(26, 13, 58, 0.08)';
      } else {
        header.style.boxShadow = '';
      }
    }, { passive: true });
  }
});
  