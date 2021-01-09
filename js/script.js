function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigate").style.top = "0";
    } else {
    document.getElementById("navigate").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}

$(window).scroll(function(){
    $(".javascroll").css("opacity", 1 - $(window).scrollTop() / 250);
  });


// document ready
// (function ($) {

//     // scroll functions
//     $(window).scroll(function(e) {
    
//         // add/remove class to navbar when scrolling to hide/show
//         var scroll = $(window).scrollTop();
//         if (scroll >= 150) {
//             $('.shamalan').addClass("navbar-hide");
//         } else {
//             $('.shamalan').removeClass("navbar-hide");
//         }
    
//     });
    
// })(jQuery);    