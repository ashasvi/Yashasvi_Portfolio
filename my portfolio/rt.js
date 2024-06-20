jQuery(document).ready(function($) {

    $(window).scroll(function()
    {
      var scroll = $(window).scroll(top);
  
      if(scroll>=10){
        $(".navbar").addClass("nav-scroll");
        $("back_to_top").addClass("show_btn");
      }else{
        $(".navbar").removeClass("nav-scroll");
        $("back_to_top").addClass("show_btn");
      }
    });
    // Your jQuery code using "$" goes here
    $('.pro').slick({
      // Slick carousel settings and responsive settings...
      dots: true,  
      arrows:false,             // Display navigation dots
      infinite: true,           // Loop the carousel
      speed: 300,               // Transition speed in milliseconds
      slidesToShow: 2,          // Number of slides to show at a time
      slidesToScroll: 1,        // Number of slides to scroll at a time
  
      // Responsive settings
      responsive: [
        {
          breakpoint: 1024,     // Screen width breakpoint
          settings: {
            slidesToShow: 2,    // Number of slides to show at this breakpoint
            slidesToScroll: 1,  // Number of slides to scroll at this breakpoint
            infinite: true,     // Loop the carousel
            dots: true          // Display navigation dots
          }
        },
        {
          breakpoint: 768,      // Screen width breakpoint
          settings: {
            slidesToShow: 1,    // Number of slides to show at this breakpoint
            slidesToScroll: 1   // Number of slides to scroll at this breakpoint
          }
        }
      ]
    });
  
    AOS.init();
  
  });



  // project 


  $(document).ready(function () {
    $('#carouselProjects').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 2;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  });

  // prpject


  


// work exp


  $(document).ready(function () {
    $('#carouselExperience').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 2;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  });


    $(document).ready(function () {
      $('#carouselExperience').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 2;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
          }
        }
      });
    });


    // end work exp section



    // skills section

    function funclick() {
      alert("Skills section button clicked!");
    }

    // end skill section

    //nav section

    function toggleNav() {
      var navbar = document.querySelector('.navbar');
      navbar.classList.toggle('active');
  }
  

  // end nav section
 
  

  



