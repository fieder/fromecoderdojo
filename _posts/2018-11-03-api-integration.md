---
title:  "API Integration"
date:   2018-11-03 09:30:00 -0000
categories: api kids
label: API
---

# Materials

*   [Download course material](/course-5/example.zip "Download the starter pack")
*   [Example](/course-5/index.html "This is an example")


## Server

*   [core API documentation](https://test.havefunhub.com/api-doc "API documentation")

## Client

*   [jsfiddle example](https://jsfiddle.net/fieder/q4bv0w9p "Template")
*    Browser console
*    curl command	


## Course #5

* API Integration basic example

![](/course-5/POST-for-Creation.svg)

* HTTP verbos

![](/course-5/HTTP-Verbs.jpg)

* HTTP response 

![](/course-5/HTTP-Response.png)

```sh
GET https://test.havefunhub.com/api/place/47
GET https://test.havefunhub.com/api/event/47
```
* JSON Representation

```json
{
  "placeId": 47,
  "name": "Edventure Frome",
  "description": "info@edventurefrome.org\n\nhttp://www.edventurefrome.org",
  "category": "",
  "priceIndicator": 0,
  "address": "Park Hill Dr",
  "address2": null,
  "postCode": null,
  "city": "Frome",
  "latitude": 51.23781967163,
  "longitude": -2.31991004944,
  "active": true,
  "imageId": null,
  "imageHash": "b5670f2f4230a3bea63f29ea81651e35079d76dcf62482aaff4c0b5b1bbd62b1",
  "hasPromo": false,
  "country": "United Kingdom",
  "phone": "+447548014066",
  "imageURL": null,
  "userName": "Coder",
  "facebookId": null,
  "lastUpdated": null,
  "imageURLLarge": null,
  "imageURLSmall": null
}


```

* curl command

```sh
curl https://test.havefunhub.com/
curl -H 'Accept: application/json' https://test.havefunhub.com/api/event/47
curl -verbose https://test.havefunhub.com/api/events
curl -XPUT ....

```

* Browser console

```sh
https://www.bbc.co.uk/

```

### Playing time

Let's try to integrate with the core API to find out more details about the data we consume
