---
title:  "Remakery CSS"
date:   2019-04-06 13:00:00 -0000
tags: css kids
label: CSS
author: Agustin & Felipe
---
# Table of contents
1. [Introduction](#introduction)
2. [CSS basics](#basics)
3. [Playing time](#exercise)

## Internet to CSS <a name="introduction"></a>
It's all about styling the web pages. Colours, sizes, borders, margins, fonts, etc. CSS is used to tell browsers how to render 
and visualise HTML pages.

## CSS Basics <a name="basics"></a>
Cascading Style Sheet (CSS) : It's a text file that follows a rule set to describe the way the user interface looks like.
Browsers interpret it and render user interfaces accordingly.

You can style things in HTML in two ways
- via CSS: loading CSS source file into the HTML like this: `<link type="text/css" rel="stylesheet" href="css/style.css"/>`
- via HTML inline: You can also apply styles to a HTML tag with the `style` attribute like `<p style="font-size: 18px">Big Font</p>`, inline styling has more precedence than applying a class.

### Building blocks

* This example will style all the `<h1>` tags with a red colour.
```css
h1 {
    color: red;
}
```

* This will make the background of our `<header>` yellow.
```css
header {
	background: yellow;
}
```

* Can you see that we are addressing the html tags by their name?
* The folowing example will add a margin of `20px` to the top `0px` to the right `0px` to the bottom and `20px` to the left of the image inside the header.
We target the image inside the header like this because we don't want every single image of our website to have this margin.

```css
header img {
	margin: 20px 0 0 20px;
}
```

* Now let's target an element by it's class, this would be the html markup `<li class="selected">My selected link</li>` check the code in the css file:

```css
.selected {
    color: yellow;
}
```

## Playing time <a name="exercise"></a>

* Let's make the website you have built on the HTML course, to look better adding a CSS file.
* Remember the html markup to include the stylesheet.
* Download a basic css stylesheet to form [here](/course-6/exercise-css.zip), unzip the file and place the `css` folder inside website folder.
* If you did not take the HTML course, don't worry. You can play with our Rolling Stones website and style it as you wish! Download it from [here](/course-6/example.zip)
* Now feel free to play with colours, positions, fonts and where your imagination and creativity takes you...
* Check out all the styles and properties that we include in the `style.css` for references, for example we added a class `.background-image` that includes a background image reference.
