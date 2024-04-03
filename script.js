//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(e) {
  const buttons = document.querySelectorAll('.sound-button');

  buttons.forEach(button => {
    button.addEventListener('soundstart', function(event) {
     
      const audio = document.getElementById('audio');
    audio.src = 'https://www.w3schools.com/jsref/horse.ogg';
    audio.play()
    });
  });
