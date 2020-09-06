

var UXDefenders = 'Hello, Your homeIndex.js file is loaded correctly! Enjoy!'

console.log(UXDefenders)

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    


    var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}
