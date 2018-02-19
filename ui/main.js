console.log('Loaded!');
//change the text in main text id
var element = document.getElementById("main-text");
element.innerHTML = " New Values";

// move the madi img

var img = document.getElementById("madi");
img.onclick = function () {
     img.style.marginRight = '100px';
}