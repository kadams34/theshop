/*
Template Name: 
Template URI: http://coderboys.net/
Author: CoderHut
Author URI: http://coderboys.net/
Version: 1.0
Tags: 
*/

(function ($) {

    'use strict';

    /*======================================
        Scroll To Menu fixed On Top
    ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.site-header').addClass('fixed-hdr');
        } else {
            $('.site-header').removeClass('fixed-hdr');
        }
    });

    /*======================================
        Smooth scroll
    ====================================== */

    var smoothScroll = $('.main-menu ul li a');
    smoothScroll.on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    var smoothScroll2 = $('.bottom-nxt-section');
    smoothScroll2.on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*======================================
        Bootstrap scrollspy
    ====================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('body').scrollspy({
                target: '.main-menu',
                offset: 63.8
            });
        } else {
            $('body').scrollspy({
                target: '.main-menu',
                offset: -1
            });
        }
    });

    /*======================================
        Mobile Menu Active
     ====================================== */
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
    });


    /*======================================
        Slider Active
    ====================================== */
    $(".slider-active").owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        autoplayTimeout: 6000, // auto play time
        autoplay: true,
        nav: true,
        navText: ["Prev", "Next"],
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            767: {
                items: 1,
                nav: false,
                dots: false,
            },
            991: {
                items: 1,
                nav: true,
                dots: true,
            }
        }
    });
    $(".slider-active").on('translate.owl.carousel', function () {
        $('.single-slider-item h1').removeClass('fadeInLeft animated animated-04s').hide();
        $('.single-slider-item p').removeClass('fadeIn animated animated-2s').hide();
    });

    $(".slider-active").on('translated.owl.carousel', function () {
        $('.owl-item.active .single-slider-item h1').addClass('fadeInLeft animated animated-04s').show();
        $('.owl-item.active .single-slider-item p').addClass('fadeIn animated animated-2s').show();
    });
    /*======================================
        Testimonial Active
    ====================================== */

    $(".testimonial-active").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            767: {
                items: 1,
                nav: true,
                dots: false,
            },
            991: {
                items: 1,
                nav: true,
                dots: false,
            }
        }
    });

    /*======================================
        CownDown Js
    ====================================== */

    var themeCountDown = $("#coundt-down");
    themeCountDown.countdown("2020/10/10", function (event) {
        var $this = $(this).html(event.strftime('' + '<div class="single-count"><span>%-D</span> Days</div>' + '<div class="single-count"><span>%H</span> Hours</div>' + '<div class="single-count"><span>%M</span> Min(s)</div>' + '<div class="single-count"><span>%S</span> Sec(s)</div>'));
    });


    /*======================================
       Date picker
    ====================================== */
    $("#datepicker").datepicker();


    /*======================================
            Ajax Contact form
    ====================================== */

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'alert-success' class.
                $(formMessages).removeClass('alert alert-danger');
                $(formMessages).addClass('alert alert-success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'alert-danger' class.
                $(formMessages).removeClass('alert alert-success');
                $(formMessages).addClass('alert alert-danger');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });


    $(window).on('load', function () {

        /*======================================
            Preloader
        ====================================== */


        /*======================================
        Portfolio
        ====================================== */

        $('.portfolio-list button').on('click', function () {
            $('.portfolio-list button').removeClass('active');
            $(this).addClass('active');
        });

        var $container = $('.grid');
        $container.isotope({
            itemSelector: '.grid .grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });

        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
            return false;
        });



    });

}(jQuery));

function getCurrentYear() {
    let year = new Date().getFullYear()
    document.getElementById('copyright').innerHTML = `© The Shop | <span>${year}</span><br>Website created by: <a href="https://github.com/kadams34">Kevin Adams</a>`
}

getCurrentYear()