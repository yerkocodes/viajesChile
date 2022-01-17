$(document).ready(function(){

  //$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 10) {
        $("nav").addClass("navbar-bg-scroll", 1000, "easeOut");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("nav").removeClass("navbar-bg-scroll", 1000, "ease");
      }
    });
  //});

});
