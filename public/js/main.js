//Email  form

const ContactForm = document.querySelector('.contact-form');

let Name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');


ContactForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let FormData = {
      name:Name.value, 
      email:email.value, 
      phone:phone.value,
      message:message.value
    }
  
    let xhr = new XMLHttpRequest();
  xhr.open('POST','/');
  xhr.setRequestHeader('content-type','application/json');
  xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.responseText == 'success'){
        Toastify({
          text: "Email Sent Successfully😊",
          duration: 2100
          }).showToast();

          Name.value = '';
          email.value = '';
          phone.value = '';
          message.value = '';
      }
      else {
        Toastify({
          text: "Something Went Wrong!🤷‍♂️",
          duration: 3000,
          backgroundColor: '#de0b0b',
          }).showToast();
      }
  };

  xhr.send(JSON.stringify(FormData));

});


// slider 
 // Initialize Swiper 
 
 var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   loop: true,
   autoplay : {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });



//bottom up 

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});



// age 

var birth = new Date('1997-07-24');
var now = new Date();
var difference = now - birth;
// Dates are set from 1970, so remove that to get the year 
var age = new Date(difference).getFullYear() - 1970

var span = document.getElementById('age');
span.innerHTML = age;



