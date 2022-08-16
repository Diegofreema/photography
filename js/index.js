$(function(){
    $(".menu").click(function(){
        $(".menu-button").toggleClass("open");
        $(".nav-links").toggleClass("open");
    });

    $(".nav-links li").click(function(){
        $(".nav-links").removeClass("open");
        $(".menu-button").toggleClass("open");
    })


    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $("nav").addClass("scroll");
            $(".scrollup").fadeIn("slow");

        }else{
            $("nav").removeClass("scroll");
            $(".scrollup").fadeOut("slow");

        }
    });
})
$(".scrollup").click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000)
})

$(window).scroll(function(){
    let windowscroll = $(window).scrollTop();
    let height = $(document).height() - $(window).height();
    var scrolled = (windowscroll / height) * 100;
    $(".scrollbar").css("width", scrolled + "%");
})

var waypoints = $('.w').waypoint(function(direction){
    $('.w').addClass('animate__animated animate__fadeInUpBig');
  
  },{
    offset: '100%'
  })
var waypoints = $('.x').waypoint(function(direction){
    $('.x').addClass('animate__animated animate__fadeInUpBig');
  
  },{
    offset: '100%'
  })
var waypoints = $('.y').waypoint(function(direction){
    $('.y').addClass('animate__animated animate__fadeInUpBig');
  
  },{
    offset: '100%'
  })
var waypoints = $('.z').waypoint(function(direction){
    $('.z').addClass('animate__animated animate__fadeInUpBig');
  
  },{
    offset: '100%'
  })
var waypoints = $('.a').waypoint(function(direction){
    $('.a').addClass('animate__animated animate__fadeInUpBig');
  
  },{
    offset: '100%'
  })

  $(".darkmodet").click(function(){
    $("body").toggleClass("dark");
      $(".darkmode").toggleClass("flip");
    if($("body").hasClass("dark")){
        $(".darkmode").html("<i class=\"uil uil-sun\"></i>").css("color", "white");
    }else {
        $(".darkmode").html("<i class=\"uil uil-moon\"></i>")
    }
  })

  $(".pc").click(function(){
    $("body").toggleClass("indigo");
      $(" html, body").removeClass("dark");
    $(".darkmode").html("<i class=\"uil uil-moon\"></i>").removeClass("flip");
    if($("body").hasClass("indigo")){
        $(".pc").css("border", "2px solid #003347");
        $(".purple").css("background", " #003347");

    }else{
        $(".pc").css("border", "2px solid purple");
        $(".purple").css("background", " purple");
    }
  })


const textButs = document.querySelectorAll(".contact-btn");

textButs.forEach(textBut => {
    let text = textBut.querySelector("p");

   text.innerHTML = text.innerHTML.split("").map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join("")
   
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
  });
