(function ($) {
    "use strict"; // Start of use strict

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        }
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

})(jQuery); // End of use strict

// Call the dataTables jQuery plugin
$(document).ready(function() {
    if ($(window).width() > 768) {
        $('#dataTable').DataTable({
            'dom': '<"container-fluid"<"row"<"col-lg-4"f><"col-lg-8"p>><"table-responsive"rt><"row"<"col-lg-6"i><"col-lg-6"p>>>',
        });
    } else {
        $('#dataTable').DataTable({
            'dom': '<"container-fluid"<"row"<"col-lg-4"f><"col-lg-8"p>><"table-responsive"rt><"row"<"col-lg-6"i><"col-lg-6"p>>>',
            'pagingType': 'simple'
        });
    }
});