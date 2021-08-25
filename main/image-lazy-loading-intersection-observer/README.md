### `code`:

The `observer.unobserve(ent)` just unobserve the entity once it has been observed

```js
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.setAttribute(
          "src",
          "https://picsum.photos/id/169/2500/1662"
        );
      } else {
        return;
      }
      observer.unobserve(ent.target);
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.5,
    root: null,
  }
);

const images = document.querySelectorAll("img");

images.forEach((img) => {
  observer.observe(img);
});
```
