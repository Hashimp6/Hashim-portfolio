const names = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const txtarea = document.getElementById('txtarea');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const mess_error = document.getElementById('mess_error');



var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
form.addEventListener("submit",(e)=>
{
    
   if(names.value==='' || names.value==null)
   {
    e.preventDefault();
    name_error.innerHTML="name is needed";
    }
   else {
    name_error.innerHTML = "";
    }


   if(!email.value.match(validRegex)){
    e.preventDefault();
    email_error.innerHTML="email is needed";
   }
   else {
    email_error.innerHTML = "";
   }


   if(subject.value==='' || subject.value==null)
   {
   e.preventDefault();
   subject_error.innerHTML="subject is needed";
   }
   else {
   subject_error.innerHTML = "";
   }

   if(txtarea.value==='' || txtarea.value==null)
   {
   e.preventDefault();
   mess_error.innerHTML="subject is needed";
   }
   else {
   mess_error.innerHTML = "";
   }

   if(name_error.innerHTML === "" && email_error.innerHTML === "" && subject_error.innerHTML === "" && mess_error.innerHTML === ""){
    // $("#form").submit((e)=>{

    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycby7rA70hCzIUjFRWiu_ZyX-HwcUAsFiseNxc1JWtSsRT3k9gPTKFGcumL6T7WcOu5rU/exec",
      data: $("#form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error");
      },
    // });
}) 
  }

}

)