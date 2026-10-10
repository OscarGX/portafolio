// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const offcanvasMenu = document.getElementById('offcanvas-menu');
  const overlay = document.getElementById('menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Función para abrir el menú
  const openMenu = () => {
    offcanvasMenu.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    // Pequeño retraso para que la transición de opacidad funcione
    setTimeout(() => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden'; // Evita el scroll del body
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    offcanvasMenu.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    // Espera a que termine la animación antes de ocultar el overlay
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
    document.body.style.overflow = ''; // Restaura el scroll
  };

  // Event Listeners
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Cerrar el menú al hacer clic en cualquier enlace móvil
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ===============================
  // LÓGICA DE TABS (TECNOLOGÍAS)
  // ===============================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Quitar estado activo de todos los botones
      tabBtns.forEach(b => {
        b.classList.remove('text-brand-500', 'border-brand-500');
        b.classList.add('text-text-muted', 'border-transparent');
      });

      // 2. Ocultar todos los paneles
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });

      // 3. Activar el botón clicado
      btn.classList.remove('text-text-muted', 'border-transparent');
      btn.classList.add('text-brand-500', 'border-brand-500');

      // 4. Mostrar el panel correspondiente
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });

  const footerCopy = document.getElementById('footerCopy');
  const now = new Date();
  footerCopy.innerText = `Oscar Reyes - ${now.getFullYear()}`;
});