/*
Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
*/


function addStrikeThrough(){
    let arguementItem1 = document.querySelector("li");
    arguementItem1.style.textDecoration = 'line-through';

}

addStrikeThrough();

/*
Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
*/

function setImage(id, url){

    let image = document.querySelector('#' + id);
    image.src = url;
    image.style.height = '300px'
}

setImage('image-1', 'https://images5.alphacoders.com/532/thumbbig-532559.webp')
setImage('image-2', 'https://images6.alphacoders.com/656/thumbbig-656029.webp')
setImage('image-3', 'https://images8.alphacoders.com/545/thumbbig-545905.webp')

/*
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
*/

function removeArgument(){

    let listItemRemoval = document.querySelector("li");
    listItemRemoval.remove();
}

removeArgument();
removeArgument();

/*
Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
Try using it to change the size of any text on the page.
*/


function setFontSize(size, id){
    let target = document.querySelector("#"+id);
    target.style.fontSize = size
}

setFontSize('50px', 'heading');
setFontSize('100px', 'thing-1');
setFontSize('68px', 'thing-c');


/*
Write a function that takes in a DOM element and appends it to the Arguments <ul>.
Let's use it! Create an image element in Javascript and pass it into your function.
*/

function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}
let newImage = document.createElement("img")
newImage.src = 'https://images.alphacoders.com/643/thumbbig-643497.webp'
newImage.style.height = '300px'
addElementToList(newImage)

/*
Write a function that takes in an image element and modifies its height to be 30 pixels.
Let's use it. Query an image element and then pass it into the function
*/

function setImageHeight(image){

        image.style.height = '30px';
}
let img = document.querySelector("#image-2");
setImageHeight(img);

/*
Write a function that takes in an element and gives it the class invisible.
Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
*/

function goInvisible(element){
    //element.className = "invisible"  // same as below
    element.style.visibility = "hidden"
}
let h1 = document.querySelector("h1")
goInvisible(h1);

/*
Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
*/

function createNewLi(text){
    let newText = document.createElement('li');
    newText.innerText = text;
    return newText;
}
addElementToList(createNewHeader("Yesssirrrrskiiii"))


/*
Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
*/

function createNewHeader(size, text){
    let newHeader = document.createElement(`h${size}`)
    newHeader.innerText = text;

    return newHeader;
}

addElementToList(createNewHeader("1", "Yessssirrrrrrrrr"))