"use strict";

// Google Maps
function initialize() {
    var myLatlng = new google.maps.LatLng(51.5068837, -0.1286353, 16); // here you can specify your location
    var styles = [{
        "featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65},
            {"visibility": "on"}]
    }, {
        "featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51},
            {"visibility": "simplified"}]
    }, {
        "featureType": "road.highway", "stylers": [{"saturation": -100},
            {"visibility": "simplified"}]
    }, {
        "featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30},
            {"visibility": "on"}]
    }, {
        "featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40},
            {"visibility": "on"}]
    }, {
        "featureType": "transit", "stylers": [{"saturation": -100},
            {"visibility": "simplified"}]
    }, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {
        "featureType": "water", "elementType": "labels",
        "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"hue": "#438482"}, {"lightness": -25}, {"saturation": -97}]
    }];

    var mapOptions = {
        zoom: 11,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({styles: styles});
}

google.maps.event.addDomListener(window, 'load', initialize);
// Google Maps end

jQuery(document).ready(function ($) {
    // subscribe:
    $("#buttonSubscribe").on('click', function () {
        var vemail = $("#email").val();
        if (vemail == '') {
            alert("Please fill out the form");
        }
        else if (vemail == '') {
            alert('Email field is required')
        }
        else {
            $.get("php/email.php", {email: vemail},
                function (response, status) {
                    $("#email").val('');
                    alert(response + "\n\nStatus : " + status);
                });
        }
    });

    // contact
    $("#buttonContact").on('click', function () {
        var vname = $("#InputName").val();
        var vemail = $("#InputEmail").val();
        var vmessage = $("#InputMessage").val();
        if (vname == '' || vemail == '' || vmessage == '') {
            alert("Please fill out the form");
        }
        else {
            $.get("php/contact.php", {name: vname, email: vemail, message: vmessage},
                function (response, status) {
                    $("#InputName").val('');
                    $("#InputEmail").val('');
                    $("#InputMessage").val('');
                    alert(response + "\n\nStatus : " + status);
                });
        }
    });


    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow': 'visible'});

    // counterUp
    $('span').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
    });

    // ScrollReveal
    window.sr = new scrollReveal();

    // cache the window object
    var $window = $(window);

    $('section[data-type="background"]').each(function () {
// declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function () {
// HTML5 proves useful for helping with creating JS functions!
// also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

// background position
            var coords = '50% ' + yPos + 'px';

// move the background
            $scroll.css({backgroundPosition: coords});
        }); // end window scroll
    });  // end section function
});
