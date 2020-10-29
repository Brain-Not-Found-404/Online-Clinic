'use strict';
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
);
signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
);
//coded by : @zaidik


//start code
var usersArray=[];
var localsuers= localStorage.getItem('users');

if(localsuers != null){ // first way to get datat from local storage
    usersArray=JSON.parse(localsuers) ; 
}
// var usersArray =localStorage.getItem('users') || [];

var doctorsArray =JSON.parse(localStorage.getItem('doctors')) || []; // second way 



var checkDoctor = document.getElementById('radioDoctor');
var contentDoctor = document.getElementById('doctor');
var register = document.getElementById('form-register');
var submit = document.getElementById('signup-submit');
var submitSignIn = document.getElementById('submit-signin');
var signin = document.getElementById('form-signin');


//hide and show the doctor fields.
checkDoctor.addEventListener('click',function (event) {

    if(event.target.checked){
        contentDoctor.style.display='block';
    }
    else{
        contentDoctor.style.display='none';
    }

});

//store users data
submit.addEventListener('click',function (event){
    event.preventDefault();
    var id = event.target.id;
    var name = register.userName.value;
    var email = register.email.value;
    var phone = register.phone.value;
    var major = register.major.value;
    var about = register.about.value;
    

    if(register.radioDoctor.checked){ // if the user is doctor save his data.
        if(major === 'default' ){
            alert('you should select a major');
            return;
        }
        new Doctor(name,email,phone,about,major); // data stored in doctorsArray
        localStorage.setItem('doctors',JSON.stringify(doctorsArray));
        
        console.log(doctorsArray);
        register.phone.value='';
        register.about.value='';
        register.major.value='';
        
    }
   
        if(id === 'signup-submit'){ // save all users' data
            
            var password = register.pass.value;
            if(name && email && password){
                new User(name,email,password);
                localStorage.setItem('users',JSON.stringify(usersArray));
            }
            console.log(usersArray);
            register.userName.value='';
            register.email.value='';
            register.pass.value='';
        }

    


});

// user constructor:
function User(name,email,password) {
    this.name = name;
    this.email=email;
    this.password=password;
    usersArray.push(this);
}

// Doctor constructor
function Doctor(name,email,phone,about,major) {
    this.name = name;
    this.email=email;
    this.phone=phone;
    this.about=about;
    this.major=major
    doctorsArray.push(this);
}

//sign in 
submitSignIn.addEventListener('click',function(event) {
    event.preventDefault();
    var email = signin.signinEmail.value;
    var password = signin.signinPass.value;
    for(var i =0 ; i<usersArray.length; i++){
      if(  usersArray[i].email === email && usersArray[i].password === password  ){
          console.log("success");
          window.open('../home.html','_self');
          signin.signinEmail.value='';
          signin.signinPass.value='';
          return;
          
      }
      
      
    }
    alert("your email or password is wrong.. ");
    signin.signinEmail.value='';
    signin.signinPass.value='';
    
});



