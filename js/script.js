
/* Collapsible from W3 Schools https://www.w3schools.com/howto/howto_js_collapsible.asp*/

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  $(document).ready(function(){
    $('.collapsible').collapsible();
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
ipLookUp()