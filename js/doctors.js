'use strict';
var container = document.getElementById('doctors-container');
//info-container class to div  ==> .setAttribute('class', 'info-container')
//"my-star fas fa-star" classes to i ==> .setAttribute('class', 'my-star fas fa-star');




// array of doctors [4];
var doctorsArray =['name:Mohamad, major: internal, phone:078824756373, email:hh@gmail.com, about: graduated from harvared university'
,'name: Hana, major: general practice, phone: 0796542788,email:mm@gmail.com, about: graduated from jordan univerity',
'name Aseel, major :internal, phone:0798643844, email: as@hotmail.com, about: clinic located at jordan hospital',
'name:mahmood, phone:0789635473,email: mh@gmail.com, major: respiratory'];

function renderData (){
    for (var i=0; i<doctorsArray.length; i++){
        var div = document.createElement('div');
        var data =document.createElement('p');
        var starIcon = document.createElement('i');
        data.textContent= doctorsArray[i];
        div.appendChild(data);
        div.appendChild(starIcon);
        container.appendChild(div);
        div.setAttribute('class','info-container');
        starIcon.setAttribute('class','my-star fas fa-star');
    }


};
renderData();


//render doctors function()
//loop
//create div  parent 
//create p i   ==> p textContent= array[i]

