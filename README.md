
---

1. What HTML element indicates the most important header text in the body of a web page?  
   `<h1>`

2. What HTML elements make text italic by default on most web browsers? List two different tags.  
   `<em>` `<i>` `<var>`

3. What HTML elements indicate computer code? List two different tags.  
   `<var>` `<code>` `<samp>`

4. What HTML element allows you to embed CSS?  
   `<style>`

5. Fix this HTML code so it will validate:  
   `<a href="http://cnn.com>"News</a>`  
   `<a href="http://cnn.com">News</a>`

6. Fix the syntax error in this CSS code:  `p { font-size = 10rem }`  
   `p { font-size: 10rem }`

7. Show at least two different ways to specify bright red in CSS code.  
   `#FF0000` `rgb(255,0,0)` `rgba(255,0,0,1.0)`

8. Which language defines the structural layer of a web page? Write the full name.  
   HyperText Markup Language

9. Which language defines the presentational layer of a web page? Write the full name.  
   Cascading Style Sheets

10. Which language defines the behavioral layer of a web page? Write the full name.  
    JavaScript

11. What are the four required elements in an HTML5 document?  
    `<html>` `<body>` `<title>` `<meta charset="utf-8">`

12. Rewrite the following content to mark it up as an HTML table. Use as many appropriate tags as possible.


Name Exam 1 Exam 2
Eric 75 79
Darren 106 103
Ave. 90.5 91.0


```html
<table>
<thead>
<tr><th>Name</th><th>Exam 1</th><th>Exam 2</th></tr>
</thead>
<tbody>
<tr><td>Eric</td><td>75</td><td>79</td></tr>
<tr><td>Darren</td><td>106</td><td>103</td></tr>
</tbody>
<tfoot>
<tr><td>Ave.</td><td>90.5</td><td>91.0</td></tr>
</tfoot>
</table>
2
3

This HTML attribute is used to specify the URL of an image in the <img> tag.
src

The main purpose of headings (<h1>, <h2>, etc.) is to control text size. True/False
False

By default, most web browsers will indent paragraphs. True/False
False

The names of HTML attributes should be in quotes. True/False
False

Which HTML tag is used to include an external style sheet?
<link>

Which HTML tag is used to include JavaScript?
<script>

Which tag is used to make a radio button?
<input type="radio">

Which two tags are used to make a drop down menu in a form?
<select> <option>

Which tag is used to define an ordered list?
<ol>

What symbol is used in CSS to select elements by their unique id?
#

What CSS property moves an element down to avoid previously floated element?
clear

Write the HTML code to insert a picture with the source file "smallpic.jpg" and then make this picture a hyperlink to "bigpic.jpg".

<a href="bigpic.jpg">
  <img src="smallpic.jpg">
</a>

Consider this CSS code:

nav ul li {
  background-color: red;
  font-weight: bold;
}

What part is the selector?
nav ul li

The colon (:) is used to separate CSS properties from their values. What values are used?
red and bold

In CSS, the . operator selects elements by their class name.

Consider this code:

<ol class="num">
<li id="first" class="best">Derpy</li>
<li id="second" class="good">Rarity</li>
<li id="third" class="good">Spike</li>
</ol>
<ul class="items">
<li class="good">Caring</li>
<li class="good">Friendship</li>
<li class="best">Ninjitsu</li>
</ul>

All <li> tags red text

li { color: red }

The second ordered <li> tag blue text

#second { color: blue }

All unordered <li> tags green text

ul li { color: green }

All elements with class="best" pink text

.best { color: pink }

All <li> tags with class="good" that are in an unordered list purple text

ul li.good { color: purple }
4

What color is the word My?
Blue

What color is the word Little?
Red

What color is the word Pony?
Green

What color is the word My?
Green

What color is the word Little?
Blue

What color is the word Pony?
Purple

What color is the word Friendship?
Pink

What color is the word is?
Red

What color is the word Magic?
Black

5

Circle at least 5 validation errors in the code.

How many HTML elements are direct children of the <body> element?
2

What is the deepest level?
7

Total number of different elements used?
18

How many different HTML attributes are used? List them.
charset, id, href, class, alt, src

Write the CSS code to make the Webpage Title text red.

#id { color: red }

Write the CSS code to make all paragraphs in the intro section italic.

section.intro p { font-style: italic }

Explain why it is difficult to use linked or
embedded CSS to change the style of the Author
Name. How you could modify the HTML to make
it easier to style the author name no matter
where it is or no matter how the document is
structured?
The h3 element appears in different places.
We could add an id to select it no matter
how the document is structured.
Assuming the author name always in the first h3
in the article, we could select it using:
article li:nth-child(1)


6

Which tag is the least semantic?
<b>

Explain your answer.
<b> describes appearance only.

Which tag is the most semantic?
<ol>

Explain your answer.
<ol> describes both structure and meaning.

Why do we give HTML elements id attributes?
To uniquely select elements.

Why do we give HTML elements class attributes?
To group elements for styling.

Why do we give HTML elements href attributes?
To specify a URL.

Why do we give HTML elements name attributes?
For form submission.

Correct charset syntax:

<meta charset="name_of_character_set">

External stylesheet:

<link rel="stylesheet" href="bootstrap.css">

External JavaScript:

<script src="script.js"></script>

<p style="text-align: center">Paragraph text.</p> is inline CSS.
True

Another reason for external CSS:
Avoid redundancy and centralize styling.

7
Consider this URL: http://pm4.breimer.net/project2/admin.php?status=active
The URL is:
Absolute

URL breakdown:
Protocol: http
File: admin.php
Folder: project2

The ? indicates:
Start of query string

CSS:

nav ol li { color: red }

CSS:

div.alert p { color: red }

CSS:

section#boxed_elements .box {
  border: 1px solid black;
}

Changes font size:
font-size

Changes background color:
background-color

Makes text underlined:
text-decoration

Draws a border:
border

Block/inline display:
display

Text shadow:

8

Function to change text to blue:

function changeToBlue() {
  var myBody = document.querySelector("body");
  myBody.setAttribute("style", "color: blue");
}

Event listener:

document.querySelector("#Blue")
  .addEventListener("click", changeToBlue);

Generate list:
<ol>
<li>Friendship</li>
<li>Love</li>
<li>Caring</li>
</ol>

function makeList(arrayOfValues, type) {
  var newList = document.createElement(type);
  for (var i = 0; i < arrayOfValues.length; i++) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(arrayOfValues[i]));
    newList.appendChild(newItem);
  }
  return newList;
}


9

Write a JavaScript function called makeBinaryChoice to create a pair of radios buttons with labels. The
function should take four parameters: a label, a name and two values.
makeBinaryChoice("Color: ", "color", "Black", "Blue") would return the following HTML.
<div>
<label>Color: </label>
<label for="Black">Black</label>
<input value="Black" name="color" id="Black" type="radio">
<label for="Blue">Blue</label>
<input value="Blue" name="color" id="Blue" type="radio">
</div>

function makeBinaryChoice(label, name, value1, value2) {
var newDiv = document.createElement("div");
var newLabel = document.createElement("label");
newLabel.appendChild(document.createTextNode(label));
var label1 = document.createElement("label");
label1.setAttribute("for", value1);
label1.appendChild(document.createTextNode(value1));
var radio1 = document.createElement("input");
radio1.setAttribute("value", value1);
radio1.setAttribute("name", name);
radio1.setAttribute("id", value1);
radio1.setAttribute("type", "radio");
var label2 = document.createElement("label");
label2.setAttribute("for", value2);
label2.appendChild(document.createTextNode(value2));
var radio2 = document.createElement("input");
radio2.setAttribute("value", value2);
radio2.setAttribute("name", name);
radio2.setAttribute("id", value2);
radio2.setAttribute("type", "radio");
newDiv.appendChild(newLabel);
newDiv.appendChild(label1);
newDiv.appendChild(radio1);
newDiv.appendChild(label2);
newDiv.appendChild(radio2);
return newDiv;
}
