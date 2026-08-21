export function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  // 🔥 DETECTAR IPAD - Si es iPad, NO ejecutar scrollReveal
  const isIPad = (): boolean => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /iPad/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  };

  // 🔥 EN IPAD: Forzar visibilidad inmediata y salir
  if (isIPad()) {
    elements.forEach(el => el.classList.add("is-visible"));
    // Inyectar CSS para anular cualquier transición
    const style = document.createElement('style');
    style.textContent = `
      [data-reveal] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
    return;
  }

  // Fallback sin soporte
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  let ticking = false;
  let observerActive = true;

  // Función optimizada para revelar
  function revealVisible(): void {
    if (!observerActive) return;
    
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    elements.forEach(el => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < windowHeight + 150 && rect.bottom > -150;
      const isNarrowScreen = windowWidth < 768;
      
      if (isInViewport || isNarrowScreen) {
        el.classList.add("is-visible");
      }
    });
  }

  // Verificación inicial con delay para asegurar layout
  setTimeout(revealVisible, 150);
  setTimeout(revealVisible, 350);

  // Observer con rootMargin optimizado
  const observer = new IntersectionObserver(
    (entries) => {
      let hasChanges = false;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        const remaining = document.querySelectorAll("[data-reveal]:not(.is-visible)");
        if (remaining.length === 0 && observerActive) {
          observerActive = false;
          observer.disconnect();
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onResize);
        }
      }
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 150px 0px",
    }
  );

  elements.forEach(el => observer.observe(el));

  let scrollTimeout: number | null = null;
  
  function onScroll(): void {
    if (!observerActive) return;
    if (ticking) return;
    
    ticking = true;
    requestAnimationFrame(() => {
      revealVisible();
      ticking = false;
    });
    
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const remaining = document.querySelectorAll("[data-reveal]:not(.is-visible)");
      if (!remaining.length && observerActive) {
        observerActive = false;
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      }
    }, 500);
  }

  let resizeTimeout: number | null = null;
  function onResize(): void {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      revealVisible();
    }, 200);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
}