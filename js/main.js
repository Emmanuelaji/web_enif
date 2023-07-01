// counting days to official Launching
const countDownDateTime = new Date(2023, 4, 18, 0, 0).getTime();
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");
// run this function every 1000 ms or 1 second
let x = setInterval(function () {
 const dateTimeNow = new Date().getTime();
 let difference = countDownDateTime - dateTimeNow;
 // calculating time and assigning values
 daysValue.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
 hoursValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 minutesValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60)) / (1000 * 60)
 );
 secondsValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
 if (difference < 0) {
 clearInterval(x);
 }
}, 1000);


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back.to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
});