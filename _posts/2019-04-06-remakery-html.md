---
title:  "Remakery HTML"
date:   2019-04-06 10:00:00 -0000
label: HTML
tags: html kids
author: Agustin & Felipe
---
# Showcase what kids did on the day :)

*   [Josh](/course-6/josh/index.html "Josh's work")
*   [Tilly](/course-6/tilly/index.html "Tilli's work")
*   [Marley](/course-6/marley/index.html "Marley's work")

# Table of contents
1. [Introduction](#introduction)
2. [HTML basics](#basics)
3. [Playing time](#exercise)

## Internet building blocks <a name="introduction"></a>
How does the Internet works. Computers, networks, servers, websites, DNS, HTML and CSS 

## HTML Basics <a name="basics"></a>
Hyper Text Markup Language (HTML) : It's a text file that follows a rule set to describes the blocks of the user interface.
Browsers interpret it and render user interfaces accordingly.


### Building blocks

* Inside the `<head></head>` blocks we define the main attributes of the page. For example the `<title></title>` of the page which shows on the tab of the browser, we call files we want to include like css stylesheets `<link type="text/css" rel="stylesheet" href="css/style.css"/>`, etc. 
* All the content we display on the page will be placed inside the `<body></body>` tags.
* As a basic html markup we will use a `<header></header>` for the content on the top, `<article></article>` for the content that the user reads and `<footer></footer>` for a signature! It is not mandatory to use this tags, as everything you place inside the `<body>` will be rendered, but it is always a good practice to guide our readers.
* In the following example we will see some basic tags such as `<img>` (call for image), `<h1>` (first heading), `<p>` (paragraph), `<i>` (italic font), `<b>` (bold font), `<ul>` (unordered list), `<li>` (list item), `<a>` (links or anchor points) and `<span>` (inline block of text).
* Almost every html tag closes with the same name but with a backlash `/` after the `<` symbol but some  of them are self closing like `<img />`
* Some tags include attributes such as `<img src="url-to-image">`, in here we can see that we have `src` as an attribute to tell the browser where to find the image.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>The Rolling Stones</title>
		<link type="text/css" rel="stylesheet" href="css/style.css"/>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<header>
			<img src="images/rs.png">
			<ul class="menu">
				<li class="selected">The Rolling Stones</li>
				<li><a href="members.html">Band Members</a></li>
				<li><a href="videos.html">Videos</a></li>
			</ul>
		</header>
		<article>
			<h1>The Rolling Stones</h1>
			<p><b>The Rolling Stones</b> are an English rock band formed in London in 1962.<br>
			 <a href="https://en.wikipedia.org/wiki/Mick_Jagger" target="_blank">
			 Mick Jagger</a> <i>(lead vocals, harmonica)</i>...
	    </article>
		<footer>
			<p>Copyright © 2019 <span>The Rolling Stones</span></p>
		</footer>
	</body>
</html>
```

* In the following example we include more html tags for creating a table to show information in an organised way.

```html
<table>
    <thead>
        <th>Name</th>
        <th>Instrument</th>
        <th>Link to bio</th>
    </thead>
    <tbody>
        <tr>
            <td>Mick Jagger</td>
            <td>lead vocals, harmonica</td>
            <td><a href="https://en.wikipedia.org/wiki/Mick_Jagger" target="_blank"><img src="images/bio.png"></a></td>
        </tr>
        <tr>
            <td>Keith Richard</td>
            <td>guitars</td>
            <td><a href="https://en.wikipedia.org/wiki/Mick_Jagger" target="_blank"><img src="images/bio.png"></a></td>
        </tr>
        <tr>
            <td>Chalie Watts</td>
            <td>drums</td>
            <td><a href="https://en.wikipedia.org/wiki/Mick_Jagger" target="_blank"><img src="images/bio.png"></a></td>
        </tr>
        <tr>
            <td>Ronnie Wood</td>
            <td>guitars</td>
            <td><a href="https://en.wikipedia.org/wiki/Mick_Jagger" target="_blank"><img src="images/bio.png"></a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">The Rolling Stones  1962 - 2019 and Rolling!</td>
        </tr>
    </tfoot>
</table>
```

* Nowadays websites such as Vimeo, Youtube, Twitter, etc want users to distribute their content and let us developers embed it in an easy way. 
* In those websites you will find a button for sharing the content and an option to embed the code and copy it. In the following example we embeded a video from Vimeo.
* Check that the code comes inside an `<iframe>` tag and has attributes such as `width` and `height`


```html
<iframe src="https://player.vimeo.com/video/247750718" width="100%" height="480"></iframe>
```

## Playing time <a name="exercise"></a>

* Let's try to build your own website, the subject... Your favourite band, film or super hero.
* We made a full working example and picked The Rolling Stones as our favourite band. Check it out [here](/course-6/example/index.html) 
* Download a basic html markup to start form [here](/course-6/exercise-html.zip)

