

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


// Change this to define your colors. Can also be rgb(0,0,0) etc
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


// Google maps

var map;
  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.326574, lng: -81.659498},
      zoom: 9
  });
}
