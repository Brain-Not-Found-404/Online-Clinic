'use strict';
var container = document.getElementById('doctors-container');
var containerFav = document.getElementById('favDoctors-container');
var allButton = document.getElementById('all');
var favButton = document.getElementById('fav');

var favDoctors=JSON.parse( localStorage.getItem('fav') ) ||   [];


// array of doctors
// var doctorsArray =['name:Mohamad, major: internal, phone:078824756373, email: hh@gmail.com, about: graduated from harvared university'
// ,'name: Hana, major: general practice, phone: 0796542788,email: mm@gmail.com, about: graduated from jordan univerity',
// 'name Aseel, major :internal, phone:0798643844, email: as@hotmail.com, about: clinic located at jordan hospital',
// 'name:mahmood, major: respiratory, phone:0789635473, email: mh@gmail.com, about: '];
var doctorsArray= [
`<p class="follow" align="center"> <i class="my-star fas fa-star"></i> </p>
<img class="profile-img" src="../img/doctor1.jpg">
<img class="background-img" src="img/profile-packground.jpg">
<p class="name">Mohammad<span id="major">Internal</span> </p>
<p class="bio"><span>Phone:</span> 078824756373 <br><span>Email:</span> mohammad@gmail.com<br><span>About:</span> Graduated from harvared university</p>`
,
`<p class="follow" align="center"> <i class="my-star fas fa-star"></i> </p>
<img class="profile-img" src="../img/doctor2.jpg">
<img class="background-img" src="img/profile-packground.jpg">
<p class="name">Hanaa<span id="major">General practice</span> </p>
<p class="bio"><span>Phone:</span> 07878542573 <br><span>Email:</span> hanaa@gmail.com<br><span>About:</span> Graduated from jordan univerity</p>`
,
`<p class="follow" align="center"> <i class="my-star fas fa-star"></i> </p>
<img class="profile-img" src="../img/doctor3.jpg">
<img class="background-img" src="img/profile-packground.jpg">
<p class="name">Hadeel<span id="major">Respiratory</span> </p>
<p class="bio"><span>Phone:</span> 0778547856 <br><span>Email:</span> hadeel@gmail.com<br><span>About:</span> Clinic located at jordan hospital</p>`
,
`<p class="follow" align="center"> <i class="my-star fas fa-star"></i> </p>
<img class="profile-img" src="../img/doctor4.jpg">
<img class="background-img" src="img/profile-packground.jpg">
<p class="name">Ahmad<span id="major">Internal</span> </p>
<p class="bio"><span>Phone:</span> 0785214562 <br><span>Email:</span> Ahmad@gmail.com<br><span>About:</span>My Clinic located at Irbid</p>`
];

// render the data inside the doctorsArray 
function renderData (){
     
    container.innerHTML='';
    for (var i=0; i<doctorsArray.length; i++){
        var text = doctorsArray[i];
        var email = text.slice(text.indexOf('Email:')+14 , text.indexOf('About')-10 );
        var div = document.createElement('div');
        div.innerHTML=doctorsArray[i];
        div.firstChild.childNodes[1].setAttribute('id',email);
        console.log(div.firstChild.childNodes[1]);
        container.appendChild(div);
        div.setAttribute('class','container');
        div.addEventListener('click',function(){addToFav(event)});
    }
};
renderData();

function renderFavData (){
     
    containerFav.innerHTML='';
    if(favDoctors.length === 0 ){
        
        containerFav.innerHTML=`<h1></h1><div class="container">
        <img class="profile-img" src="https://www.driscollchildrens.org/wp/wp-content/themes/driscollchildrens/assets/images/default-doctor-image.jpg">
        <img class="background-img" src="img/profile-packground.jpg">
        <p class="name">UnKnown<span id="major">.......</span> </p>
        <br>
        <br>
        <p class="bio"><span>You don't have any favorite doctor yet!</span></p></div>`;
    }
    else{

        for (var i=0; i<favDoctors.length; i++){
            var div = document.createElement('div');
            div.innerHTML=favDoctors[i];
            containerFav.appendChild(div);
            div.setAttribute('class','container');
      
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


            var newData =`<p class="follow" align="center"> <i class="my-star fas fa-star"></i> </p>
            <img class="profile-img" src="https://www.driscollchildrens.org/wp/wp-content/themes/driscollchildrens/assets/images/default-doctor-image.jpg">
            <img class="background-img" src="img/profile-packground.jpg">
            <p class="name">${name}<span id="major">${major}</span> </p>
            <p class="bio"><span>Phone:</span> ${phone} <br><span>Email:</span> ${email}<br><span>About:</span> ${about}</p>`;
            
            
            doctorsArray.push(newData);
        }

        renderData();
    }

}

refreshDoctors();

// my favorite doctors


function addToFav(event){
    var star = event.target;
    var id = star.id;
    if (id.includes('@')){ // check of click on stars by emails 
        console.log('clicked');
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
                   var data = doctorsArray[i].slice( doctorsArray[i].indexOf('</p>')+4);
                   favDoctors.push(data);
                   localStorage.setItem('fav', JSON.stringify(favDoctors));
                   star.classList.add('favorite'); // add it to favorite array and add the class name
               }
           }
       }
    };


};

function setFav(){
    for(var i =0; i<favDoctors.length;i++){
        var text = favDoctors[i];
        var email = text.slice(text.indexOf('Email:')+14 , text.indexOf('About')-10 );
        var icon = document.getElementById(email);
        console.log(icon)
        icon.classList.add('favorite');
    }
}
setFav();


// listenes for buttons show and hide
allButton.addEventListener('click',function(){
    container.style.display='grid';
    containerFav.style.display='none';
});

favButton.addEventListener('click',function(){
    renderFavData();
    containerFav.style.display='grid';
    container.style.display='none';
})


