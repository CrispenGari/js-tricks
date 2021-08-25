### Intersection Observer API

### This is a simple javascript code that shows how `Intersection Observers` works.

This code basically toggles the className of certain div when they are visible in the `viewport`:

```js
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
    root: null, //
    threshold: 0.5,
    rootMargin: "0px",
  }
);
ps.forEach((p) => {
  observer.observe(p);
});
```

### `root`

The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.

### rootMargin

Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros

### threshold

Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

### Ref

- [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
