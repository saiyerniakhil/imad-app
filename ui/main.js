console.log('Loaded!');
//change the text in main text id
var element = document.getElementById("main-text");
element.innerHTML = " New Values";

// move the madi img

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
     var interval = setInterval(moveRight,50);
}