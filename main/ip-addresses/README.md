### IP Address

In this one we are going to show how to get the `IP Address` of a device using JavaScript.

```js
fetch("https://api.ipify.org?format=json")
  .then((x) => x.json())
  .then((data) => {
    console.log(data);
  });
```

You will get the following response:

```json
{ "ip": "257.1.1.1" }
```
