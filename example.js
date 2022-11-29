const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let messages = []

    if(firstName.value === '' || firstName.value == null){
        messages.push('First name is required')
        
    }

    if(lastName.value === '' || lastName.value == null){
        messages.push('Last name is required')
    }

    if(email.value === '' || email.value == null){
        messages.push('Email is required')

    }

    if(phone.value === '' || phone.value == null){
        messages.push('Phone number is required')

    }

    if(password.value === '' || password.value == null){
        messages.push('Password is required')
    }

    if(password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if(password.value.length < 4) {
        messages.push('Password must be longer than 4 characters')
    }
   
    if(messages.length > 0){
        console.log("Hello ")
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
}


})
