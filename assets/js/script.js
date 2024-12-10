$(document).ready(function() {
    /* _________________ start home page _________________ */
    
    // ... side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });
    
    function checkScroll() {
        if ($(window).scrollTop() > 50) {
            $("body").addClass('scrolled_header');
        } else {
            $("body").removeClass('scrolled_header');
        }
    }
    checkScroll();
    $(window).on('scroll', function() {
        checkScroll();
    });

    /* _________________ end home page _________________ */
});