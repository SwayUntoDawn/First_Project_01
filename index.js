const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const email = document.getElementById('email1') 

const form = document.getElementById('info-form');

const submitEl = document.getElementById ("submit")


 function submitForm(e) {
   e.preventDefault();
   if(firstname.value !== "" && lastname.value !== "" && email.value !== ""){
    alert(`Thank you ${firstname.value} ${ lastname.value}, we received your resume and we have sent a message to ${ email.value}`)
    // alert('Thank you' + " " + firstname.value )
    return true
}else{
    alert('one or two of your fields are empty')

return false
}
}

// submitEl.addEventListener('click', submitForm)
 form.addEventListener('submit', submitForm)