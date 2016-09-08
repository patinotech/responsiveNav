var initialLoad = true;

$(document).ready(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
    initialLoad = false;
    console.log("hi");
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000);
        return false;
      }
    }
  });
  $(".header_arrow").click(function(){
    $("body").css("background-color", "white");
    $("*").css("color", "black");
  });
  $(".bio_up_arrow").click(function(){
    $("body").css("background-color", "black");
    $("*").css("color", "white");
  });
  $(".bio_down_arrow").click(function(){
    $("body").css("background-color", "black");
    $("*").css("color", "white");
  });
  $(".contact_up_arrow").click(function(){
    $("body").css("background-color", "white");
    $("*").css("color", "black");
  });

});
