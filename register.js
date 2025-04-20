const registerForm = document.getElementById('register-form')
const errorElementFirstName = document.getElementById('error-first-name')
const errorElementLastName = document.getElementById('error-last-name')
const errorElementGender = document.getElementById('error-gender')
const errorElementAddress = document.getElementById('error-address')
const errorElementEmail = document.getElementById('error-email')

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const gender = document.getElementById('gender')
const address = document.getElementById('address')
const email = document.getElementById('email-address')

let isFirstName = false
let isLastName = false
let isGender = false
let isAddress = false
let isEmail = false

const formValidation = (event) => {
    event.preventDefault()
    firstNameValidation()
    lastNameValidation()
    genderValidation()
    addressValidation()
    emailValidation()
    if(isFirstName && isLastName && isGender && isAddress && isEmail){
        window.location.href = 'home.html'
    }
}

function isAlpha(string){
    let alpha = true
    string.split('').forEach((c) => {
        if(!((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) && c != ' '){
            alpha = false
        }
    })
    return alpha
}

function firstNameValidation(){
    if(firstName.value == ''){
        errorElementFirstName.innerHTML = 'This is a required field'
    }
    else if(!isAlpha(firstName.value)){
        errorElementFirstName.innerHTML = 'Name must only contain alphabets'
    }
    else{
        errorElementFirstName.innerHTML = ''
        isFirstName = true
    }
}

function lastNameValidation(){
    const splittedLastName = lastName.value.split(' ')
    if(lastName.value == ''){
        errorElementLastName.innerHTML = 'This is a required field'
    }
    else if(!isAlpha(lastName.value)){
        errorElementLastName.innerHTML = 'Name must only contain alphabets'
    }
    else if(splittedLastName.length > 1){
        console.log(splittedLastName)
        errorElementLastName.innerHTML = 'Last name must contain only one word'        
    }
    else{
        errorElementLastName.innerHTML = ''
        isLastName = true
    }
}

function genderValidation(){
    if(gender.value == 'select-gender'){
        errorElementGender.innerHTML = 'Please select a gender'
    }
    else{
        errorElementGender.innerHTML = ''
        isGender = true
    }
}

function addressValidation(){
    const splittedAddress = address.value.split(' ')
    if(address.value == ''){
        errorElementAddress.innerHTML = 'This is a required field'
    }
    else if(splittedAddress.length < 2){
        console.log(splittedAddress)
        errorElementAddress.innerHTML = 'Address must contain at least two words'        
    }
    else{
        errorElementAddress.innerHTML = ''
        isAddress = true
    }
}

function emailValidation(){
    const keongIndex = email.value.indexOf('@')

    if(email.value === ''){
        errorElementEmail.innerHTML = 'This is a required field'
    }
    else if(keongIndex == -1){
        errorElementEmail.innerHTML = 'email must contain @'
    }
    else if(email.value[0] == '-' || email.value[email.value.length-1] == '-'){
        errorElementEmail.innerHTML = 'email must not begin or end with hyphen (-)'
    }
    else if(email.value[0] == '.' || email.value[email.value.length-1] == '.'){
        errorElementEmail.innerHTML = 'email must not begin or end with full stop (.)'
    }    
    else if(!email.value.endsWith('.ac.id')){
        errorElementEmail.innerHTML = 'email must end with .ac.id'
    }
    else{
        errorElementEmail.innerHTML = ''
        isEmail = true
    }
}


registerForm.addEventListener('submit', formValidation)

