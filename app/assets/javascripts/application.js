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
//= require jquery_ujs
//= require turbolinks
//= require colorbox-rails
//= require bootstrap-sprockets
//= require_tree .

$(function () {

    "use strict";

    var $bgobj = $(".ha-bg-parallax"); // assigning the object

    $(window).on("scroll", function () {

        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

        // Put together our final background position

        var coords = '100% ' + yPos + 'px';

        // Move the background

        $bgobj.css({ backgroundPosition: coords });

      });
        $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
    $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
    $(this).addClass('selected');
    $(this).find('input[type="radio"]').prop("checked", true);
    
  });
    
  

});

$(document).ready(function(){
  $(".example6").colorbox({iframe:true, innerWidth:560, innerHeight:315});
});




