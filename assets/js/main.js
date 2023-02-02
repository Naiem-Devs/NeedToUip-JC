(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        //------------ Offcanvas menu -------------

        $('.open__menu').on('click', function () {
            $('.sidebar__area, .overlay').addClass('active');
        })
        $('.close_menu, .overlay').on('click', function () {
            $('.sidebar__area, .overlay').removeClass('active');
        })



        //------------ Hero slider -------------

        $('.hero-slier-main').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });



        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


    }); //---document-ready-----



    $('select').niceSelect();



    /*magnificPopup active*/
    $('.play__button').magnificPopup({
        type: 'iframe'

    });






    $('.cover').on('click', function () {
        $(this).children().css({
            'z-index': 1,
            'opacity': 1
        });
        $(this).children().trigger('play');

    });

    $('video').on('click', function () {
        console.log('a');
    });

    function uploadFile(files) {
        console.log('Files:', files);
        console.log('Upload initial');
    }




    console.clear();

    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-bar__text");
    const statusBar = document.getElementById("progress-bar__status-bar");
    let progressStatus = 0;
    let id = null;

    id = setInterval(updateProgressBar, 10);


    function updateProgressBar() {
        if (progressStatus === 75) {
            return clearInterval(id);
        }

        progressStatus++;
        progressText.textContent = progressStatus + "%";
        statusBar.setAttribute("style", `--status: ${progressStatus}`);
        statusBar.style.width = progressStatus + "%";
    }





}(jQuery));