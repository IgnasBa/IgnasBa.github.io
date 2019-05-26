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
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          console.log('User\'s Country', response.country);
      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}
ipLookUp();
