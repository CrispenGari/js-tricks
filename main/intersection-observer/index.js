const ps = document.querySelectorAll(".flex>p");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("display");
      } else {
        entry.target.classList.remove("display");
        return;
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
  }
);

ps.forEach((p) => {
  observer.observe(p);
});
