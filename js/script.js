/* Navigation from materialize.js */

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  $(document).ready(function(){
    $('.collapsible').collapsible();
      $(".rotate1").click(function () {
    $(".rotate11").toggleClass("down");
          $(".rotate33").removeClass("down");
           $(".rotate22").removeClass("down");
           $(".rotate44").removeClass("down");
});
       $(".rotate2").click(function () {
    $(".rotate22").toggleClass("down");
           $(".rotate11").removeClass("down");
           $(".rotate33").removeClass("down");
           $(".rotate44").removeClass("down");
});
       $(".rotate3").click(function () {
    $(".rotate33").toggleClass("down");
           $(".rotate11").removeClass("down");
           $(".rotate22").removeClass("down");
           $(".rotate44").removeClass("down");
});
       $(".rotate4").click(function () {
    $(".rotate44").toggleClass("down");
           $(".rotate11").removeClass("down");
           $(".rotate22").removeClass("down");
           $(".rotate33").removeClass("down");
});
  });
function ipLookUp () {
  $.ajax('http://worldtimeapi.org/api/ip')
  .then(
      function success(response) {
          console.log('User\'s Country', response.timezone);
          $.ajax('http://api.timezonedb.com/v2.1/convert-time-zone?key=WRGOM452TQQY&format=json&from='+ response.timezone + '&to=Europe/Copenhagen')
          .then( function success(response2)
                {
              console.log(response2.offset);
              // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(response2.toTimestamp*1000);
// Hours part from the timestamp
var hours = date.getHours();


              if(hours > 8 && hours < 20){
              document.getElementById("call").innerHTML= "00 45 53 32 32 52 (Available to call)";}
              else {
                  document.getElementById("call").innerHTML= "00 45 53 32 32 52 (Not available to call)";}
              }
          
          
          )
      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp();
$(function() {
  //if ($(window).width() < 768) {
   $('#contact').click(function() {
    $('#contactForm2').fadeToggle();
  })
     $('#close').click(function() {
    $('#contactForm').fadeToggle();
  })
     
//}
//else {

   $('#contact2').click(function() {
    $('#contactForm').fadeToggle();
  })
     $('#close2').click(function() {
    $('#contactForm2').fadeToggle();
  })
//}
})
  // contact form animations
  

  


document.getElementById("processArrow").addEventListener('click', function() {
    if(document.getElementById("processArrow").classList.contains("rotate")){
    setTimeout(function(){document.getElementById("processArrow").classList.toggle('rotate');},300);
  document.getElementById("containerp5").classList.toggle('expand');
    setTimeout(function(){document.getElementById("containerp4").classList.toggle('expand');},300);
    setTimeout(function(){document.getElementById("containerp3").classList.toggle('expand');},600);
    setTimeout(function(){document.getElementById("containerp2").classList.toggle('expand');},900);
    setTimeout(function(){document.getElementById("containerp1").classList.toggle('expand');},1200);
         
    
}  
    else{
    document.getElementById("processArrow").classList.toggle('rotate');
  document.getElementById("containerp1").classList.toggle('expand');
    setTimeout(function(){document.getElementById("containerp2").classList.toggle('expand');},300);
    setTimeout(function(){document.getElementById("containerp3").classList.toggle('expand');},600);
    setTimeout(function(){document.getElementById("containerp4").classList.toggle('expand');},900);
    setTimeout(function(){document.getElementById("containerp5").classList.toggle('expand');},1200);
                                                         
                                                         }})
