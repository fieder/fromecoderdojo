---
title:  "API Integration"
date:   2019-10-07 09:30:00 -0000
label: API Integration
tags: api kids
author: Agustin & Felipe
---

# Description

In this class we are going to learn about web services exposed via REST entpoints. We will be using those to show how dynamic content is generated in the backend and we will build a simple HTML site to consume the information and show it to users via a browser.
If none of this makes sense to you, then come along and find out! :)


## Server

*   [Amazon API Gateway](https://aws.amazon.com/api-gateway/ "API gateway")

## Client

*   [jsfiddle example](https://jsfiddle.net/adandreiz/3kdz86fs/43/ "Template")
*   [Browser console](#console)
*   [curl command](#curl)	
*   [Example](/course-8/tilly/index.html "Animals by Tilly"){:target="_blank"}


## Course #8

* API Integration basic example

![](/course-5/POST-for-Creation.svg)

* HTTP verbos

![](/course-5/HTTP-Verbs.jpg)

* HTTP response 

![](/course-5/HTTP-Response.png)
<a id="curl">
```sh
curl -X GET \
  https://dtawyo8d49.execute-api.us-east-1.amazonaws.com/test/animals \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: dtawyo8d49.execute-api.us-east-1.amazonaws.com' \
```

* HTTP Response. JSON Representation

```json
[{
  "id": 1,
  "name": "Tiger",
  "picture": "https://images.app.goo.gl/1nZRXrPixorEXYgS7",
  "fun_fact": "The tiger is the biggest species of the cat family"
},
{
  "id": 2,
  "name": "Badger",
  "picture": "https://images.app.goo.gl/hVf5rGCNGbHutaNQ6",
  "fun_fact": "UK biggest predator"
}]


```

* curl command

```sh
curl http://host/path
curl -H 'Accept: application/json' http://host/path
curl -verbose http://host/path
curl -XPUT ....

```

* Browser console
<a id="console">
```sh
https://www.bbc.co.uk/
```

### Playing time

Let's try to integrate with our animals API to find out more details about the data we consume
