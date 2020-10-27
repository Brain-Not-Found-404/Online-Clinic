'use srict'


var i = 0;
var txt = 'Stay home – especially if you have a fever In general, it’s recommended that you stay home if you have a fever and for at least 24 hours after your fever goes away. If you don’t have a fever, but you have other COVID-19 or flu symptoms, speak with your doctor before heading out.Call one of our care lines for advice Our care lines allow you to talk directly with a nurse 24/7, 365 days a year completely free of charge. They can help you decide if it’s time to see a doctor, as well as provide helpful home remedy advice.Get treatment and care virtually Whether you’re stuck at home with a fever or you aren’t ready to leave your house just yet, there are a couple ways to get quality virtual care that fits your preferences. Make a video visit appointment for face-to-face care from a doctor or nurse practitioner. With video visits, your doctor will listen to your symptoms, answer questions and work with you to create a tailored treatment plan if needed. For example, your doctor may prescribe antivirals to treat the flu. Try to relax and take care of yourself If you’re not feeling well of you’ve been officially diagnosed with an illness, try to get lots of rest and stay hydrated. Also, talk with your doctor about which over-the-counter medications they recommend to reduce your fever, aches and pains.';

var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}