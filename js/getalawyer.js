$(document).ready(function() {

var scrollink = $('.scroll');

scrollink.click(function(e) {
e.preventDefault();
$('body,html').animate({
    scrollTop: $(this.hash).offset().top
},1000)

})
})
