### Sketching images on Canvas

In this readme file we are going to have a look at how we can draw images on canvas.

### html

The html file contains the following content:

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="index.css" />
  <title>Canvas Images</title>
</head>
<body>
  <div class="app">
    <canvas id="canvas"></canvas>
    <button id="clear-btn">Clear</button>
  </div>
  <script src="index.js"></script>
</body>
```

### css

The styles are very simple, and they look as follows:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.app {
  width: 100vw;
  display: grid;
  place-items: center;
  height: 100vh;
}
#canvas {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: black;
  cursor: pointer;
}
```

### javascript

In this section of the readme.md we are going to have a look on each and every line of code and what it does for the task.

First we get the canvas element by id as follows:

```js
const canvas = document.getElementById("canvas");
```

We then going to create the resize function. This function just resize the canvas it's width and height.

```js
const resize = () => {
  const { width, height } = canvas.getBoundingClientRect();
  ctx.canvas.width = width;
  ctx.canvas.height = height;
};
```

Next we get the 2d context of the canvas and resize the canvas as well as setting the default position of the mouse:

```js
const ctx = canvas.getContext("2d");
resize();
const pos = { x: 0, y: 0 };
```

The next step is to create function that set position of the mouse to our `pos` variable everytime it is called:

```js
const setPosition = (e) => {
  pos.x = e.pageX - canvas.offsetLeft;
  pos.y = e.pageY - canvas.offsetTop;
};
```

Our draw function will draw a white line when the if and only if the user is pressing the the mousedown and he is moving the mouse.

```js
const draw = (e) => {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};
```

Event listeners

```js
canvas.addEventListener("resize", resize);
canvas.addEventListener("mousemove", draw, false);
window.addEventListener("mousedown", setPosition, false);
window.addEventListener("mouseenter", setPosition, false);
```

A simple button that clears the current drawing when the canvas is clicked.

```js
document.querySelector("#clear-btn").addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
```

### index.js

The whole code in the index.js will look as follows:

```js
const canvas = document.getElementById("canvas");
const resize = () => {
  const { width, height } = canvas.getBoundingClientRect();
  ctx.canvas.width = width;
  ctx.canvas.height = height;
};

const ctx = canvas.getContext("2d");
resize();
const pos = { x: 0, y: 0 };

const setPosition = (e) => {
  pos.x = e.pageX - canvas.offsetLeft;
  pos.y = e.pageY - canvas.offsetTop;
};

const draw = (e) => {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};

canvas.addEventListener("resize", resize);
canvas.addEventListener("mousemove", draw, false);
window.addEventListener("mousedown", setPosition, false);
window.addEventListener("mouseenter", setPosition, false);

document.querySelector("#clear-btn").addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
```

### Converting the canvas drawing to image:

To convert a canvas drawing to an image you do it as follows:

```js
const image = new Image();
image.id = "pic";
image.src = canvas.toDataURL();
document.getElementById("image_for_crop").appendChild(image);
```

> Note that this conversion will convert the image as a `png` mime type by default.

### Converting a canvas drawing to a file.

To convert a canvas drawing to a file we do it as follows:

```js
const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

const url = canvas.toDataURL("image/jpeg");
const file = dataURLtoFile(url, "hello");
console.log(file);
```

### Ref

1. [stackoverflow.com](https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse)
2. [dev.opera.com](https://dev.opera.com/articles/html5-canvas-painting/)
3. [stackoverflow.com](https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f)
