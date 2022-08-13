### Getting Geo-Coords and IP address

In this one we are going to show how we can get the location of a current device using the [ipinfo](https://ipinfo.io/) api.

### Using cURL

To get the ip infomation of any device using curl you run the following command:

```shell
cURL https://ipinfo.io/
```

### Using JavaScript fetch api

We can use the JavaScript fetch api to perform the same task. Here is a an example:

```JavaScript
fetch('https://ipinfo.io').then(res=>res.json()).then(d=>console.log(d)).catch(e=>console.error(e))
```

### Expected Response.

Here is the expected response from the API:

```json
{
  "ip": "IP_ADDRESS",
  "city": "East London",
  "region": "Eastern Cape",
  "country": "ZA",
  "loc": "-33.0153,27.9116",
  "org": "AS3741 Dimension Data",
  "postal": "5201",
  "timezone": "Africa/Johannesburg",
  "readme": "https://ipinfo.io/missingauth"
}
```

? Note that the location contain a latitude and a longitude value.
