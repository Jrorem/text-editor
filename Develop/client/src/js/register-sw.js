export const registerSW = () => {
  if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./src-sw.js');
      });
    }
  };