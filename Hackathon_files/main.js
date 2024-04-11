/*

Script  : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function() {

    "use strict";

    /* ================================================
       On Scroll Menu
       ================================================ */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $('.js-reveal-menu').removeClass('reveal-menu-hidden').addClass('reveal-menu-visible');
        } else {
            $('.js-reveal-menu').removeClass('reveal-menu-visible').addClass('reveal-menu-hidden');
        }
    });

    /* ================================================
       Parallax Header
       ================================================ */

    if ($('.parallax-bg').length) {
        $('.parallax-bg').parallax({
            speed: 0.20
        });
    }

    /* ================================================
       FLEX SLIDER
       ================================================ */

    if ($('.flexslider').length) {
        $('.flexslider').flexslider({
            animation: "slide",
            useCSS: Modernizr.touch
        });
    }

    /* ================================================
       Initialize Countdown
       ================================================ */

    /*Fetch Event Date From HTML. For Not tech Savvy Users */

    var get_date = $('#countdown').data('event-date');

    if (get_date) {
        $("#countdown").countdown({
            date: get_date,
            /*Change date and time in HTML data-event-date attribute */
            format: "on"
        });
    }

    /* ================================================
       Initialize Tabs
       ================================================ */

    $('#schedule-tabs a').on("click",function(e) {
        e.preventDefault()
        $(this).tab('show')
    });

    /* ================================================
       Stat Counter
       ================================================ */

    $('#stats-counter').appear(function() {
        $('.count').countTo({
            refreshInterval: 50
        });
    });

    /* ================================================
       Initialize Slick Slider 
       ================================================ */

    /* 
       SLICK SLIDER
       ------------ */

    if ($('.slick-slider').length) {
        $('.slick-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            autoplay: false,
            arrows: true,
            dots: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    /* 
    SPONSORS
    -------- */

    if ($('.sponsor-slider').length) {
        $('.sponsor-slider').slick({
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 3,
            autoplay: true,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
        });
    }

    /* 
       SPEAKERS
       -------- */

    if ($('.speaker-slider').length) {
        $('.speaker-slider').slick({
            slidesToShow: 6,
            autoplay: false,
            arrows: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 5
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    /* ================================================
       Scroll Functions
       ================================================ */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('.back_to_top').fadeIn('slow');
        } else {
            $('.back_to_top').fadeOut('slow');
        }
    });

    $('nav a[href^=#]:not([href=#]), .back_to_top').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500);
        event.preventDefault();
    });

});

/* ================================================
  Video Gallery
  ================================================ */

$(".play-video").on("click",function(e) {
    e.preventDefault();
    var videourl = $(this).data("video-url");
    $(this).append('<i class="video-loader fa fa-spinner fa-spin"></i>')
    $('.media-video iframe').attr('src', videourl);
    setTimeout(function() {
        $('.video-loader').remove();
    }, 1000);
});

/* ================================================
   Magnific Popup
   ================================================ */
if ($('.popup-gallery').length) {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
}

/* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'small',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        }
        if (element.parent('label').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

/* ================================================
   Add to Calendar
   ================================================ */

(function() {
    if (window.addtocalendar)
        if (typeof window.addtocalendar.start == "function") return;
    if (window.ifaddtocalendar == undefined) {
        window.ifaddtocalendar = 1;
        var d = document,
            s = d.createElement('script'),
            g = 'getElementsByTagName';
        s.type = 'text/javascript';
        s.charset = 'UTF-8';
        s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
        var h = d[g]('body')[0];
        h.appendChild(s);
    }
})();

/* ================================================
   Twitter Widget
   ================================================ */

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

/* ================================================
   Paypal Form Validation
   ================================================ */

// validate Registration Form
$("#paypal-regn").validate({
    rules: {
        first_name: "required",
        last_name: "required",
        email: {
            required: true,
            email: true
        },
        os0: "required",
        quantity: "required",
        agree: "required"
    },
    messages: {
        first_name: "Your first name",
        last_name: "Your last name",
        email: "We need your email address",
        os0: "Choose your Pass",
        quantity: "How many seats",
        agree: "Please accept our terms and privacy policy"
    },
    submitHandler: function(form) {
        $("#reserve-btn").attr("disabled", true);
        form.submit();
    }
});

/*
 * // End $ Strict Function
 * ------------------------ */

$(function() {

    /* ================================================
       Initialize WOW JS
       ================================================ */

    if ($('body').hasClass('animate-page')) {
        wow = new WOW({
            animateClass: 'animated',
            offset: 100,
            mobile: false
        });
        wow.init();
    }
});

/*
 * End $ Function
 * -------------- */


// faq accoridan 
function toggleAnswer(faqId) {
    const answer = document.getElementById(faqId);
    const icon = document.querySelector(`#${faqId} + .question .icon`);
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.classList.remove('open');
    } else {
      answer.style.display = 'block';
      icon.classList.add('open');
    }
  }
//   form 
function addRow() {
    // Create the new row
    var newRow = document.createElement('div');
    newRow.className = 'row';

    // Create the sibling column
    var siblingCol = document.createElement('div');
    siblingCol.className = 'col-md-6';

    var siblingFormGroup = document.createElement('div');
    siblingFormGroup.className = 'form-group';

    var siblingLabel = document.createElement('label');
    siblingLabel.innerHTML = 'Sibling\'s name';

    var siblingInput = document.createElement('input');
    siblingInput.type = 'text';
    siblingInput.className = 'form-control';
    siblingInput.name = 'sibling';
    siblingInput.placeholder = 'Sibling\'s name';

    siblingFormGroup.appendChild(siblingLabel);
    siblingFormGroup.appendChild(siblingInput);
    siblingCol.appendChild(siblingFormGroup);

    // Create the occupation column
    var occupationCol = document.createElement('div');
    occupationCol.className = 'col-md-5';

    var occupationFormGroup = document.createElement('div');
    occupationFormGroup.className = 'form-group';

    var occupationLabel = document.createElement('label');
    occupationLabel.innerHTML = 'Occupation';

    var occupationInput = document.createElement('input');
    occupationInput.type = 'text';
    occupationInput.className = 'form-control';
    occupationInput.name = 'occupation';
    occupationInput.placeholder = 'Occupation';

    occupationFormGroup.appendChild(occupationLabel);
    occupationFormGroup.appendChild(occupationInput);
    occupationCol.appendChild(occupationFormGroup);

    // Create the delete button column
    var deleteCol = document.createElement('div');
    deleteCol.className = 'col-md-1';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        document.getElementById('row-container').removeChild(newRow);
    };

    deleteCol.appendChild(deleteButton);

    // Append the columns to the row
    newRow.appendChild(siblingCol);
    newRow.appendChild(occupationCol);
    newRow.appendChild(deleteCol);

    // Append the new row to the container
    document.getElementById('row-container').appendChild(newRow);
}


//   for email 
function addEmailColumn() {
    var emailContainer = document.getElementById('email-container');

    // Create a new email column
    var newEmailColumn = document.createElement('div');
    newEmailColumn.className = 'col-md-6 email-column';

    var emailFormGroup = document.createElement('div');
    emailFormGroup.className = 'form-group';

    var emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Email Address';

    var emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.className = 'form-control';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email Address';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger delete-button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
      emailContainer.removeChild(newEmailColumn);
    };

    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);
    newEmailColumn.appendChild(emailFormGroup);
    newEmailColumn.appendChild(deleteButton);

    // Append the new email column to the container
    emailContainer.appendChild(newEmailColumn);
  }
//   phone number 

function addContactColumn() {
    var contactContainer = document.getElementById('contact-container');

    // Create a new contact column
    var newContactColumn = document.createElement('div');
    newContactColumn.className = 'col-md-6 contact-column';

    var phoneFormGroup = document.createElement('div');
    phoneFormGroup.className = 'form-group';

    var phoneLabel = document.createElement('label');
    phoneLabel.innerHTML = 'Phone Number';

    var phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.className = 'form-control';
    phoneInput.name = 'phone';
    phoneInput.placeholder = 'Phone Number';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger delete-button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
      contactContainer.removeChild(newContactColumn);
    };

    phoneFormGroup.appendChild(phoneLabel);
    phoneFormGroup.appendChild(phoneInput);
    newContactColumn.appendChild(phoneFormGroup);
    newContactColumn.appendChild(deleteButton);

    // Append the new contact column to the container
    contactContainer.appendChild(newContactColumn);
  }


//   image 
function addImageField() {
    // Create the new row
    var newRow = document.createElement('div');
    newRow.className = 'row';

    // Create the image column
    var imageCol = document.createElement('div');
    imageCol.className = 'col-md-5';

    var imageFormGroup = document.createElement('div');
    imageFormGroup.className = 'form-group';

    var imageLabel = document.createElement('label');
    imageLabel.innerHTML = 'Image';

    var imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.className = 'form-control';
    imageInput.name = 'images[]';
    imageInput.accept = 'image/*';

    imageFormGroup.appendChild(imageLabel);
    imageFormGroup.appendChild(imageInput);
    imageCol.appendChild(imageFormGroup);

    // Create the delete button column
    var deleteCol = document.createElement('div');
    deleteCol.className = 'col-md-1';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        document.getElementById('image-container').removeChild(newRow);
    };

    deleteCol.appendChild(deleteButton);

    // Append the columns to the row
    newRow.appendChild(imageCol);
    newRow.appendChild(deleteCol);

    // Append the new row before the last row (button row)
    document.getElementById('image-container').insertBefore(newRow, document.getElementById('image-container').lastElementChild);
}

// for file
function addFileField() {
    // Create the new row
    var newRow = document.createElement('div');
    newRow.className = 'row';

    // Create the file column
    var fileCol = document.createElement('div');
    fileCol.className = 'col-md-5';

    var fileFormGroup = document.createElement('div');
    fileFormGroup.className = 'form-group';

    var fileLabel = document.createElement('label');
    fileLabel.innerHTML = 'File';

    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.className = 'form-control';
    fileInput.name = 'files[]';
    fileInput.accept = '.pdf, .doc, .docx';

    fileFormGroup.appendChild(fileLabel);
    fileFormGroup.appendChild(fileInput);
    fileCol.appendChild(fileFormGroup);

    // Create the delete button column
    var deleteCol = document.createElement('div');
    deleteCol.className = 'col-md-1';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        document.getElementById('file-container').removeChild(newRow);
    };

    deleteCol.appendChild(deleteButton);

    // Append the columns to the row
    newRow.appendChild(fileCol);
    newRow.appendChild(deleteCol);

    // Append the new row before the last row (button row)
    document.getElementById('file-container').insertBefore(newRow, document.getElementById('file-container').lastElementChild);
}
