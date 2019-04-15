
$('.ui.form.countdown').addClass('loading')
let date = $('#userDateDiv').text() // get date from DB not implemented
let interval;
$.ajax({
    url: "https://2gl2bug4fj.execute-api.eu-west-3.amazonaws.com/latest/countdown?date=" + date,
    type: "get", //send it through get method
    data: {

    },
    success: function (result) {
        //Do Something


        $('#hiddenDiv').text(result.remainingTime)
        var counter = result.remainingTime;
        newCountDown(result.calculusDate)
        let string=result.prestring
        
        function newCountDown(date) {

          

            var countDownDate = new Date(date).getTime();
            

            // Update the count down every 1 second
            var x = setInterval(function () {
               
                intrerval = x
                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds

                    let finalstring= string +moment(now).countdown(countDownDate).toString()
                     // If the count down is 0, write some text 
                    if (distance==0){
                        finalstring="DONE!!!"
                    }
                // Output the result in an element with id="demo"
                document.getElementById("countDiv").innerHTML = finalstring
                $("#DateDiv").text(result.countDownDateFormatted);
              
                    $('.fakeloader').fadeIn(600)
                    $('.ui.form.countdown').removeClass('loading')
                
              
               


                
                if(distance<0){
                    string='ELAPSED TIME: '
                }
            }, 1000);
        }

    },
    error: function (err) {

        console.log('Api Error')


    }
});
