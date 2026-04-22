function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMode() {
  document.body.classList.toggle("light");
}

function handleReveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    skillCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("is-active");
  });

  card.addEventListener("click", () => {
    skillCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });
});
