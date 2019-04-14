
$('.ui.form.countdown').addClass('loading')
let date=$('#userDateDiv').text() // get date from DB not implemented
let interval;
$.ajax({ 
    url: "https://2gl2bug4fj.execute-api.eu-west-3.amazonaws.com/latest/countdown?date="+date,
    type: "get", //send it through get method
    data: {

    },
    success: function (result) {
        //Do Something
        
        
        $('#hiddenDiv').text(result.remainingTime)
        var counter = result.remainingTime;
        newCountDown(result.calculusDate)
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
                var days= Math.floor((distance % (1000 * 60 * 60 * 24*365)) / (1000 * 60 * 60*24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("countDiv").innerHTML = days+" jours "+ hours+" heures "+
                    minutes + " minutes et " + seconds + "secondes ";
                    $("#DateDiv").text(result.countDownDateFormatted);
                    $('.fakeloader').fadeIn(600)
                    $('.ui.form.countdown').removeClass('loading')
                // If the count down is over, write some text 
                   

                if (distance < 0) {
                    document.getElementById("countDiv").innerHTML = "It's time to get noisy champs!!!";
                    clearInterval(x);
                   
                }
            }, 1000);
        }

    },
    error: function (err) {

        console.log('Api Error')


    }
});
