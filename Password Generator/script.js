const passwordBox = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*/?";
const lengths = 12;
const allChar = upperCase+lowerCase+number+symbol;

function generatePassword(){
    let password = "";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    while(password.length < lengths){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.exexCommand("Copy");
}