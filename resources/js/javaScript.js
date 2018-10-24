

//Smooth scroll

var $smoothScroll = $('html, body');
$('a[href^="#"]').click(function () {
    $smoothScroll.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});




//  scrollspy
    $(document).ready(function(e) {

        $('#nav').scrollSpy()
        $('#nav ul li a').bind('click', function(e) {
            e.preventDefault();
            target = this.hash;
            console.log(target);
            $.scrollTo(target, 1000);
        });
    });



// Colors for the dot nav
var ColorForSection = {
  '#top': 'white',
  '#prosection': "white",
  '#Projects': "white",
  '#exp': "white",
  '#contact': "white",
}

// Change the navbar's link color to a defined one based on the active nav link
function ChangeNavColor() {
        // Get the section name from the navbar' now active URL
    var currentSection = $(".nav li.active > a").attr('href');
    // Set the link color
    $(".nav a:link").css('color', ColorForSection[currentSection]);  
}

// When scrollspy activates a new section, execute the ChangeNavColor function
$(document).on('activate.bs.scrollspy', ChangeNavColor);

// Call the function when the navbar's done loading
// So we also have the correct color to begin with.
$('.nav').ready(ChangeNavColor);





// Hide dot nav 

var menu = $("#myScrollspy");
$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() >= 450 ){
       menu.show();

  //less then 100px from top
  } else {
     menu.hide();

  }
});



// Hide scroll to top button  

var buttonTop = $(".scrollTop");
$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() >= 450 ){
       buttonTop.show();

  //less then 100px from top
  } else {
     buttonTop.hide();

  }
});



// Google maps API

var map;
  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.326574, lng: -81.659498},
      zoom: 9
  });
}
