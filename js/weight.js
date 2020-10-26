"use strict"
//calculate optimal weight 
function calculateBMI(event) 
{console.log(event.target.id);
    var weight = document.bmiForm.weight.value; //to take the input from the user 
    var height = document.bmiForm.height.value;
    if(weight > 0 && height > 0){	
    var finalBmi = parseInt( weight/(height/100*height/100));
    var p = document.getElementById('finalBmi');
    var meaning=document.getElementById('text');
    p.innerHTML= finalBmi;
    if(event.target.id === 'reset'){
        p.innerHTML="";
        meaning.innerHTML="";
        return;
    }
    
    if(finalBmi < 18.5){
    meaning.innerHTML= "That you are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    meaning.innerHTML = "That you are healthy."
    }
    if(finalBmi > 25){
    meaning.innerHTML = "That you have overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }

    }


    