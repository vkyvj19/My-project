const pass = document.getElementById("Password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const character = uppercase + lowercase + number + symbols;

function button(){
    let Password = "";
    Password += uppercase[Math.floor(Math.random()* uppercase.length)];
    Password += lowercase[Math.floor(Math.random()* lowercase.length)];
    Password += number[Math.floor(Math.random()* number.length)];
    Password += symbols[Math.floor(Math.random()* symbols.length)];

    while(length > Password.length){
        Password += character[Math.floor(Math.random()* character.length)];
    }
    pass.value = Password;

}

function copy(){
    pass.select();
    document.execCommand("copy");
}

