$(function () {
    $(".js-mobileShare-toggle").click(function () {
        $(".mobileShare-content").slideToggle(200);
    });

    $('.js-include-Animate').load("https://arx827.github.io/vue_animate_movie/");
});
// loading
document.addEventListener("DOMContentLoaded", function () {
    $('.preloader-background').delay(2500).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(2500)
        .fadeOut();
});