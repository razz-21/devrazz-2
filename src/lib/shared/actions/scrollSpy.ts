export function scrollSpy(node: HTMLElement, params: { spiedTags: string[], section: string }) {
  let currentSection = "section-1";
  let section = params.section;

  const handleScroll = (event: Event) => {

    const children = node.children;
    const scrollTop = window.scrollY;

    for (let i = 0; i < children.length; i++) {
      const element = children[i] as HTMLElement;

      if (params.spiedTags.some((tag) => tag === element.tagName && element.id !== "")) {
        if ((element.offsetTop - 100) <= scrollTop) {
          currentSection = element.id;
        }

        if (Math.ceil(scrollTop) >= (document.body.offsetHeight - window.innerHeight)) {
          currentSection = "section-6";
        }
      }
    }

    if (currentSection !== section) {
      node.dispatchEvent(new CustomEvent("sectionChange", {
        detail: currentSection
      }))
    }
  }

  document.addEventListener('scroll', handleScroll);
  
  return {
    update(params: { spiedTags: string[], section: string }) {
      section = params.section;
    },
    destroy() {
      document.removeEventListener('scroll', handleScroll);
    }
  }
}