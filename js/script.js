$(function () {
    $(".js-mobileShare-toggle").click(function () {
        $(".mobileShare-content").slideToggle(200);
    });
});
// loading
document.addEventListener("DOMContentLoaded", function () {
    $('.preloader-background').delay(2500).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(2500)
        .fadeOut();
});