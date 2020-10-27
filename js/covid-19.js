'use srict'


var i = 0;
var txt = 'Stay home except to get medical care, Separate yourself from other people, Monitor your symptoms, Call ahead before visiting your doctor, If you are sick, wear a mask over your nose and mouth, Cover your coughs and sneezes, Clean your hands often, Avoid sharing personal household items, Clean all “high-touch” surfaces everyday';

var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}