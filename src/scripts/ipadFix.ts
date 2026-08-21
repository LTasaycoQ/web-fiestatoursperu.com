export function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  const ua = navigator.userAgent;
  const isIPad = /iPad/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isIPhone = /iPhone/.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  return (isIPad || isIPhone) && isSafari;
}

export function isIPadOnly(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /iPad/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function fixGlobalImages(): void {
  if (!isIOS()) return;

  const images = document.querySelectorAll("img");
  const lazyImages: HTMLImageElement[] = [];
  
  images.forEach(img => {
    if (!img.complete || img.naturalWidth === 0) {
      const originalSrc = img.src;
      const currentSrc = img.currentSrc;
      
      if (originalSrc && !img.hasAttribute('data-fixed')) {
        img.setAttribute('data-fixed', 'true');
        lazyImages.push(img);
        
        setTimeout(() => {
          if (img.naturalWidth === 0 || img.naturalHeight === 0) {
            const src = img.src;
            img.src = '';
            setTimeout(() => {
              img.src = src;
            }, 10);
          }
        }, 50);
      }
    }

    img.addEventListener("error", () => {
      if (!img.hasAttribute("data-retry")) {
        img.setAttribute("data-retry", "true");
        setTimeout(() => {
          const src = img.src;
          img.src = '';
          setTimeout(() => {
            img.src = src;
          }, 50);
        }, 100);
      }
    }, { once: true });
  });
  
  if (lazyImages.length > 0) {
    setTimeout(() => {
      lazyImages.forEach(img => {
        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
          const src = img.src;
          img.src = '';
          setTimeout(() => {
            img.src = src;
          }, 10);
        }
      });
    }, 200);
  }
}

export function initIPadFixes(): void {
  if (!isIOS()) return;

  fixGlobalImages();
  
  const setVH = (): void => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 100);
  });

  const observer = new MutationObserver((mutations) => {
    let hasNewImages = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'IMG' || element.querySelectorAll('img').length > 0) {
              hasNewImages = true;
            }
          }
        });
      }
    });
    
    if (hasNewImages) {
      setTimeout(fixGlobalImages, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
  (window as any).__ipadFixObserver = observer;
}

export function cleanupIPadFixes(): void {
  const observer = (window as any).__ipadFixObserver;
  if (observer) {
    observer.disconnect();
    delete (window as any).__ipadFixObserver;
  }
}