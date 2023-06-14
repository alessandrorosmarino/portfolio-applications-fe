const skill = document.querySelector(".pointer-container");

const rotationObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("rotate");
    } else {
      entry.target.classList.remove("rotate");
    }
  }
});
rotationObserver.observe(skill);
