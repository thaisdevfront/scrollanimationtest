 const items = document.querySelectorAll(".scroll-item");

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.75;
  const triggerTop = window.innerHeight * 0.2;

  items.forEach(item => {
    const box = item.getBoundingClientRect();

    // ENTRADA
    if (box.top < triggerBottom && box.bottom > triggerTop) {
      item.classList.add("show");
      item.classList.remove("hide");
    }

    // SAÍDA
    else if (box.top <= triggerTop) {
      item.classList.remove("show");
      item.classList.add("hide");
    }

    else {
      item.classList.remove("show", "hide");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

