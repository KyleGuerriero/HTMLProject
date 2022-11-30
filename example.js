const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let messages = [];
    let credentials = [];

    //Client Side Validation
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
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
        
    }

    if(messages.length == 0){
        e.preventDefault();


        //Capturing user inputs on submit
        let creds = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value
        }
    
        //Storing user inputs to an array
        credentials.push(creds);
        console.log(credentials);

    }

})

    form.addEventListener('reset', (e) =>{
        document.querySelector('firstName').value = ''
        document.querySelector('lastName').value = ''
        document.querySelector('email').value = ''
        document.querySelector('phone').value = ''
        document.querySelector('password').value = ''
    })

    //Automatically formats the phone number when being entered into the input
    const isNumericInput = (e) => {
        const key = e.keyCode;
        return ((key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
        );
    };
    
    const isModifierKey = (e) => {
        const key = e.keyCode;
        return (e.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
            (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            (
                // Allow Ctrl/Command + A,C,V,X,Z
                (e.ctrlKey === true || e.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
            )
    };
    
    const enforceFormat = (e) => {
        // Input must be of a valid number format or a modifier key, and not longer than ten digits
        if(!isNumericInput(e) && !isModifierKey(e)){
            e.preventDefault();
        }
    };
    
    const formatToPhone = (e) => {
        if(isModifierKey(e)) {return;}
    
        const input = e.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
        const areaCode = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);
    
        if(input.length > 6){e.target.value = `(${areaCode}) ${middle} - ${last}`;}
        else if(input.length > 3){e.target.value = `(${areaCode}) ${middle}`;}
        else if(input.length > 0){e.target.value = `(${areaCode}`;}
    };
    
    
    phone.addEventListener('keydown',enforceFormat);
    phone.addEventListener('keyup',formatToPhone);