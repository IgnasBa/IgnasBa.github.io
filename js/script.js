/* Navigation from materialize.js */

$(document).ready(function () {
    $('.sidenav').sidenav();
});

/* Navigation from materialize.js */

$(document).ready(function () {
    /* Collapsible from materialize.js */

    $('.collapsible').collapsible();

    /* Collapsible from materialize.js */

    /* Making arrows rotate on collapsible */

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

/* Making arrows rotate on collapsible */

/* Using TimezoneDB api to get current time in Denmark */
function Time() {

    $.ajax('http://api.timezonedb.com/v2.1/convert-time-zone?key=WRGOM452TQQY&format=json&from=Europe/Vilnius&to=Europe/Copenhagen')
        .then(function success(response2) {
                // Create a new JavaScript Date object based on the timestamp

                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var date = new Date(response2.toTimestamp * 1000);

                // Hours part from the timestamp
                var hours = date.getHours();
                /* Showing if ScandiMate is available for calls, depending on current time */

                if (hours > 8 && hours < 20) {
                    document.getElementById("call").innerHTML = "00 45 53 32 32 52 (Available to call)";
                } else {
                    document.getElementById("call").innerHTML = "00 45 53 32 32 52 (Not available to call)";
                }
                /* Showing if ScandiMate is available for calls, depending on current time */
            }


        )
}
/* Using TimezoneDB api to get current time in Denmark */

Time();


/* Using jQuery fadeToggle function to make the contact form appear */
$(function () {
    $('#contact').click(function () {
        $('#contactForm2').fadeToggle();
    })
    $('#close').click(function () {
        $('#contactForm').fadeToggle();
    })

    $('#contact2').click(function () {
        $('#contactForm').fadeToggle();
    })
    $('#close2').click(function () {
        $('#contactForm2').fadeToggle();
    })
})

/* Using jQuery fadeToggle function to make the contact form appear */


/* Making process section animation with text expanding */

document.getElementById("processArrow").addEventListener('click', function () {
    if(document.getElementById("processArrow").classList.contains("rotate")) {
        setTimeout(function () { document.getElementById("processArrow").classList.toggle('rotate');
        }, 300); document.getElementById("containerp5").classList.toggle('expand');
        setTimeout(function () { document.getElementById("containerp4").classList.toggle('expand');
        }, 300);
        setTimeout(function () { document.getElementById("containerp3").classList.toggle('expand');
        }, 600);
        setTimeout(function () {  document.getElementById("containerp2").classList.toggle('expand');
        }, 900);
        setTimeout(function () { document.getElementById("containerp1").classList.toggle('expand');
        }, 1200);} 
    else { document.getElementById("processArrow").classList.toggle('rotate'); document.getElementById("containerp1").classList.toggle('expand');
        setTimeout(function () { document.getElementById("containerp2").classList.toggle('expand');
        }, 300);
        setTimeout(function () { document.getElementById("containerp3").classList.toggle('expand');
        }, 600);
        setTimeout(function () { document.getElementById("containerp4").classList.toggle('expand');
        }, 900);
        setTimeout(function () { document.getElementById("containerp5").classList.toggle('expand');
        }, 1200);
    }
})

/* Making process section animation with text expanding */
