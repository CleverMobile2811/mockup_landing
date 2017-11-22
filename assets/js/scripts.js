var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    reviewsCarousel: function() {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function() {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function() {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function() {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function() {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    },

    revSlider: function() {

        var docHeight = $(window).height();


        var mainSlider = $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            touchenabled: false,
            fullWidth: "on",
            hideTimerBar: "on",
            fullScreen: "on",
            onHoverStop: "off",
            fullScreenOffsetContainer: ""
        });
        $('.tp-banner').show();
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles
        if ($(window).scrollTop() > num) {
            $('nav').addClass('scrolled');
        }
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });

        $('ul.navbar-nav li a').bind('click', function(){
            if($(this).closest('.navbar-collapse').hasClass('in')){
                $(this).closest('.navbar-collapse').removeClass('in');
            }
        });
        
    },
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    },
    sliderHowDoesItWork: function(){
        var owl = $("#screenshots");
        $('.num').html('S T E P 1');
        owl.owlCarousel({
            autoPlay: false,
            pagination: false,
            stopOnHover: true,
            singleItem:true,
            slideSpeed : 300,
            paginationSpeed : 400,
            afterMove: function (elem) {
                var current = this.currentItem + 1;
                $('.num').html('S T E P '+current);
            }
        });
        $("#screenshots").on()
        $(".next").click(function(){
            owl.trigger('owl.next');
        });
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        });
        // owl.owlCarousel({
        //
        //     slideSpeed : 300,
        //     paginationSpeed : 400,
        //     singleItem:true,
        //
        //
        //     // "singleItem:true" is a shortcut for:
        //     // items : 1,
        //     // itemsDesktop : false,
        //     // itemsDesktopSmall : false,
        //     // itemsTablet: false,
        //     // itemsMobile : false
        //
        // });
    },

    sliderExplain: function(){
        var owl = $("#explain");

        owl.owlCarousel({
            autoPlay: false,
            pagination: false,
            stopOnHover: true,
            singleItem:true,
            slideSpeed : 300,
            paginationSpeed : 400,
        });

        // Custom Navigation Events
        $(".next").click(function(){
            owl.trigger('owl.next');
        })
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        })
        // owl.owlCarousel({
        //
        //     slideSpeed : 300,
        //     paginationSpeed : 400,
        //     singleItem:true,
        //
        //
        //     // "singleItem:true" is a shortcut for:
        //     // items : 1,
        //     // itemsDesktop : false,
        //     // itemsDesktopSmall : false,
        //     // itemsTablet: false,
        //     // itemsMobile : false
        //
        // });
    }

}; // AppMaster


$(document).ready(function() {

    appMaster.smoothScroll();

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.animateScript();

    appMaster.revSlider();

    appMaster.scrollMenu();

    appMaster.placeHold();

    appMaster.sliderHowDoesItWork();

    appMaster.sliderExplain();

});
