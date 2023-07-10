//typing
document.addEventListener('DOMContentLoaded', function(event) {
 var dataText = ["BSIT-1 STUDENT.", "LOGO DESIGNER.", "PROGRAMMER."];
 var element = document.getElementById('typing-text');
 var textIndex = 0;
 var charIndex = 0;

 function type() {
   if (charIndex < dataText[textIndex].length) {
     element.innerHTML += dataText[textIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type, 50);
   } else {
     setTimeout(erase, 2000);
   }
 }

 function erase() {
   if (charIndex > 0) {
     element.innerHTML = dataText[textIndex].substring(0, charIndex - 1);
     charIndex--;
     setTimeout(erase, 50);
   } else {
     textIndex++;
     if (textIndex >= dataText.length) {
       textIndex = 0;
     }
     setTimeout(type, 1000);
   }
 }

 setTimeout(type, 1000);
});

//pre-loader
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
    // Page is loading, show the preloader
    document.querySelector('.preloader').style.visibility = 'visible';
  } else if (state == 'complete') {
    // Page has finished loading, hide the preloader
    setTimeout(function(){
      document.querySelector('.preloader').style.display = 'none';
      document.body.style.overflow = 'visible';
    }, 1000);
  }
};

document.getElementById('dmButton').addEventListener('click', function() {
  var email = 'rysianbulala155@gmail.com';
  var subject = 'Greetings!';
  var body = 'You are Hired!';

  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
});

document.getElementById('1').addEventListener('click', function(event){
  event.preventDefault();

  document.getElementById('cycling').style.display='block';
  document.getElementById('volleyball').style.display='none';
  document.getElementById('photography').style.display='none';

});

document.getElementById('2').addEventListener('click', function(event){
  event.preventDefault();

  document.getElementById('cycling').style.display='none';
  document.getElementById('volleyball').style.display='block';
  document.getElementById('photography').style.display='none';

});

document.getElementById('3').addEventListener('click', function(event){
  event.preventDefault();

  document.getElementById('cycling').style.display='none';
  document.getElementById('volleyball').style.display='none';
  document.getElementById('photography').style.display='block';

});

