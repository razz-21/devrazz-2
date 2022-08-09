let intersectionObserver: IntersectionObserver;

export default function viewport(node: HTMLElement, params: { once: boolean } = { once: true }) {
  ensureIntersectionObserver(params.once);

  intersectionObserver.observe(node);

  return {
    destroy() {
      intersectionObserver.unobserve(node);
    }
  }
}

function ensureIntersectionObserver(once: boolean) {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let eventName = "";
      if (once) {
        eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
      } else {
        eventName = entry.isIntersecting ? "enterViewport" : "";
      }

      if (eventName !== "") entry.target.dispatchEvent(new CustomEvent(eventName));
    })
  })
}