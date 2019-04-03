---
title:  "Algorithms in Javascript"
date:   2018-04-07 09:30:00 -0000
tags: javascript kids
author: Agustin & Felipe
label: Algorithms
---

# Materials
*   [jsfiddle](https://jsfiddle.net "Javascript runtime")
	



## Course #3
Algorithms introduction in Javascript.

* Variables
```js
var a = 0;
var b,c = '1';
var my_array = [1,2,3,4,5,6]; 
```
* Types

Primitives 
```js
boolean
null
undefined
number
string
```

Complex
```js
Object
```
JS is a dynamic language (loosely typed)
```js
typeof(foo); 	 //returns the current type
var foo = 42;    // foo is now a number
var foo = 'bar'; // foo is now a string
var foo = true;  // foo is now a boolean
```


* Arrays

![](/course-3/array.gif)

* Iterations
```js
for (var i = 0; i<10; i++){
	//do something
}
```

### Coding time

The cinema problem. Can we order people in such way that EVERYONE sees the screen? 

Hint: tall people in the back, small people in the front! 

Brief animation to see how it works

![](/course-3/bubble-sort.gif)

#### Examples
```js
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([-9,7,5,4,3,1]); //[-9, 1, 3, 4, 5, 7]
```


#### Solution
*   [code](https://jsfiddle.net/fieder/ts34hoag "Try to solve it yourself first :) ")


### More brain exercise

Let's say now suddenly the cinema screen moves to the back of the room.

Tall people on the front, oh no! 

Hint: What about changing the order of the already sorted list? 


### String challenge
You can think of a string as an array of characters right? Let's try to do the following: reverse the letters

#### Examples
```js
reverse('you are cool'); //"looc era uoy"
```

#### Solution
*   [code](https://jsfiddle.net/fieder/g5kysbpw "Try to solve it yourself first :) ")

