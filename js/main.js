var preloader = document.getElementById('loading');
function myFunction() {
    preloader.style.display = 'none';
}


$(document).ready(function(){
        $(".toggle").click(function(){
        $(".icon").toggleClass("active");
        $("input[type='text']").toggleClass("active");
    });
    $(".nav").click(function(){
        $(".menu").slideToggle();
    });
});