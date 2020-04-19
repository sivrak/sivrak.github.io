/*show menu*/
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 200) {
            $('.navbar-fixed-top').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
        }else {
            $('.navbar-fixed-top').css({
                'margin-top': '0px',
                'opacity': '1'
            });
        }
       
    });
});
/* ============== smooth scroll===============*/
$(document).ready(function() {
    'use strict';
    $('.navbar-fixed-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});

/* -=======================active toggel =============*/
$(document).ready(function(){
    'use strict';
    $('.navbar-right li a').click(function(){
        'use strict';
        $('.navbar-right li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
/*========= counter *********/
$(document).ready(function(){
    $('.enrolled').counterUp({
    delay: 2,
    time: 1000
});
});
/* ==========================WOW animations*/
$(document).ready(function(){
    'use strict';
    new WOW().init();
    
});