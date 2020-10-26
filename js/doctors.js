'use strict';
var container = document.getElementById('doctors-container');
var containerFav = document.getElementById('favDoctors-container');
var allButton = document.getElementById('all');
var favButton = document.getElementById('fav');

var favDoctors=JSON.parse( localStorage.getItem('fav') ) ||   [];


// array of doctors
var doctorsArray =['name:Mohamad, major: internal, phone:078824756373, email: hh@gmail.com, about: graduated from harvared university'
,'name: Hana, major: general practice, phone: 0796542788,email: mm@gmail.com, about: graduated from jordan univerity',
'name Aseel, major :internal, phone:0798643844, email: as@hotmail.com, about: clinic located at jordan hospital',
'name:mahmood, major: respiratory, phone:0789635473, email: mh@gmail.com, about: '];

// render the data inside the doctorsArray 
function renderData (){
     
    container.innerHTML='';
    for (var i=0; i<doctorsArray.length; i++){
        var text = doctorsArray[i];
        var email = text.slice(text.indexOf('email:')+7 , text.indexOf('about')-2 );
        var div = document.createElement('div');
        var data =document.createElement('p');
        var starIcon = document.createElement('i');
        data.textContent= doctorsArray[i];
        div.appendChild(data);
        div.appendChild(starIcon);
        container.appendChild(div);
        div.setAttribute('class','info-container');
        // div.setAttribute('id',`div${i}`);
        starIcon.setAttribute('class','my-star fas fa-star');
        starIcon.setAttribute('id',email);
        
        

    }
};
renderData();

function renderFavData (){
     
    containerFav.innerHTML='';
    if(favDoctors.length === 0 ){
        
        // render any thing to tell the user he doesn't have any favorite data 
    }
    else{

        for (var i=0; i<favDoctors.length; i++){
            var div = document.createElement('div');
            var data =document.createElement('p');
            data.textContent= favDoctors[i];
            div.appendChild(data);
            containerFav.appendChild(div);
            div.setAttribute('class','info-container');
      
        }
    }
    };
    renderFavData();




// add data to doctors array: 
function refreshDoctors(){

    // get the data from local storage if excist
    var localDoctors =JSON.parse( localStorage.getItem('doctors')) || []; 

    if(localDoctors.length>0){ 
        for(var i =0 ; i< localDoctors.length; i++){
            var name = localDoctors[i].name;
            var major = localDoctors[i].major;
            var phone = localDoctors[i].phone;
            var email = localDoctors[i].email;
            var about = localDoctors[i].about;
            var newData =`Name: ${name}, Major: ${major}, PhoneNumber: ${phone}, Email: ${email}, About: ${about} `;
            doctorsArray.push(newData);
        }

        renderData();
    }

}

refreshDoctors();

// my favorite doctors


container.addEventListener('click',function(event){
    var star = event.target;
    var id = star.id;
    if (id.includes('@')){ // check of click on stars by emails 

       if(event.target.classList.contains('favorite')){ // if already in favorite and lick again
        var len = favDoctors.length;
        for (var i =0 ; i< len; i++ ){
            if(favDoctors[i].includes(id)){
                favDoctors.splice(i,1);
                localStorage.setItem('fav', JSON.stringify(favDoctors));
                star.classList.remove('favorite'); // remove it from favorite and delete the class name(favorite)
            }
        }

       }
       else{
           for (var i =0 ; i< doctorsArray.length; i++ ){
               if(doctorsArray[i].includes(id)){
                   favDoctors.push(doctorsArray[i]);
                   localStorage.setItem('fav', JSON.stringify(favDoctors));
                   star.classList.add('favorite'); // add it to favorite array and add the class name
               }
           }
       }
    };


});

function setFav(){
    for(var i =0; i<favDoctors.length;i++){
        var text = favDoctors[i];
        var email = text.slice(text.indexOf('email:')+7 , text.indexOf('about')-2 );
        var icon = document.getElementById(email);
        icon.classList.add('favorite');
    }
}
setFav();


// listenes for buttons show and hide
allButton.addEventListener('click',function(){
    container.style.display='block';
    containerFav.style.display='none';
});

favButton.addEventListener('click',function(){
    renderFavData();
    containerFav.style.display='block';
    container.style.display='none';
})


