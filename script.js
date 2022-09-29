const username = document.getElementById('inputUsername3');
const email = document.getElementById('inputEmail3');
const phone = document.getElementById('inputPhone3');

username.addEventListener('blur', ()=>{
    // console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    // console.log(regex, str);
    if(regex.test(str)){
        console.log('Your username is valid');
        
    }
    else{
        alert('Your name is not valid');
       
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
       
    }
    else{
       alert('Your email is not valid');
        
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
      
    }
    else{
       alert('Your phone is not valid');
        
        
    }
})