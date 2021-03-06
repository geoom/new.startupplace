// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-migrate-min
//= require jquery_ujs
//= require turbolinks
//= require bootstrap

//= require flexslider.min
//= require jquery.cslider
//= require slider
//= require fancybox

$(document).on('ready', function(){

	$('#flex1').flexslider();

	$('#footer-menu-back-to-top a').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 300); 
        return false; 
    });

	$('.picture a').hover(function () {
            $(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 1);
    },function () {
            $(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 0);
    });

    $(".meter > span").each(function() {
        $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("origWidth")
        }, 1200);
    });

    /***************** go to position config ************************/

    $('a[href^=#]:not([href=#])').click(function() {
        widget = $(this).closest('div.widget');
        console.log(widget.attr("id")); 
        if(widget.attr("id")=="menuFloatAutomatic"){
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']')
            if ($target.length) {
              var targetOffset = $target.offset().top
              $('html,body')
              .animate({scrollTop: targetOffset}, 500)
              return false;
            }
        }
    });

    /*************** static positon toggle config *******************/

    var headOffset = jQuery('#menuFloatAutomatic').offset();
    jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() < headOffset.top) {
            jQuery('#menuFloatAutomatic').css({ position: "static"}); 
        } else {
            jQuery('#menuFloatAutomatic').css({ position: "fixed", top: "0px" }); 
        }   
    });

    $('#swu-program a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    })

});