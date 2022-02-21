const linksInternos = document.querySelectorAll(".header-principal-menu a");
const sections = document.querySelectorAll(".js-sobre");

function initScrollSuave() {
  function scrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  function animacaoScroll() {
    const windowMetade = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionAnimacao =
        section.getBoundingClientRect().top - windowMetade;
      console.log(sectionAnimacao);
      if (sectionAnimacao < 0) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animacaoScroll();

  window.addEventListener("scroll", animacaoScroll);
}
initAnimacaoScroll();
