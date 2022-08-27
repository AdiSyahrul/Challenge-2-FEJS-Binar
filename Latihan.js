//START Soal 1
console.log('=============SOAL 1=============')
const kalimat1 = 'Andini mencintaimu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
let newKalimat1 = kalimat1.replace ('mencintai','membenci');
let newKalimat2 = kalimat2.replace ('bromo','semeru');
console.log(newKalimat1);
console.log(newKalimat2);
//END Soal 1


//START Soal 2
console.log('\n=============SOAL 2=============')
function checkTypeNumber(givenNumber){
    if(typeof givenNumber==='undefined'){
        // console.log('\n ');
        return ('\nBruh, where is the parameter???');
    }
    else if (typeof givenNumber === 'number' ) {
        if(givenNumber%2==0){
            return ('\nGenap');
        }
        else{
            return ('\nGanjil');
        }
      }
    else{
        return('\nError: tipe datanya invalid');
    }
    
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
//END Soal 2


//START Soal 3
console.log('\n=============SOAL 3=============')
function checkEmail(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var onlyLetter = /^[A-Za-z]+$/;
    var onlyNumber = /^[0-9]+$/;
    if (typeof(email)==='number' || typeof(email)==='undefined'){
        return('\nERROR : email terdiri atas kombinasi huruf, angka, dan simbol spesial');
    }
    else if (email.match(validRegex)){
        
        return('\nVALID');
    }
    else if (email.match(onlyLetter)){
        return('\nINVALID');
    }
    else {
        return('\nInvalid email address!');
    }
}
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail());
//END Soal 3

//START Soal 4
console.log('\n=============SOAL 4=============')
function isValidPassword (givenPassword){
    var pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(typeof(givenPassword)==='number' || typeof (givenPassword)==='undefined'){
        console.log('\n ERROR : Kata sandi tidak boleh kosong');
        return false;
    }
    else if(givenPassword.match(pw)){
        return true;
    }
    else if(pw.length<8){
        console.log('ERROR : Kata sandi minimal 8 karakter');
        return false;
    }
    else{
        console.log('\n ERROR : Kata sandi harus terdiri atas minimal 8 karakter dengan 1 huruf besar, 1 huruf kecil, dan 1 angka');
        return false;
    }
}
console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());
//END Soal 4

//START Soal 5
console.log('\n=============SOAL 5=============')
function getSplitName(personName){
    var names=personName.toString().split(' ');
    if(typeof(personName)==='number' || typeof (personName)==='undefined'){
        console.log('\nERROR : Nama belum di input');
        return false;
    }
    else if (personName.length = 3) {
        let firstname= names[0], middlenames= names.slice(1, -1).join(' ') , lastname= names[names.length - 1]; 
        console.log('firstname:',firstname);
        console.log('middlename:',middlenames);
        console.log('lastname:',lastname);
        return ('\n')
    }
    else if (personName.length = 2) {
        let firstname = names[0], middlenames= '', lastname=names[names.length - 1];
        console.log('firstname:',firstname);
        console.log('middlename:',middlenames);
        console.log('lastname:',lastname);
    }
    else if(personName.length=1){
        let firstname = names[0], middlenames="", lastname="";
        console.log('firstname:',firstname);
        console.log('middlename:',middlenames);
        console.log('lastname:',lastname);
    }
    else{
        console.log("ERROR : This function is only for 3 characters name")
    }
}
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
//END Soal 5

//START Soal 6
console.log('\n=============SOAL 6=============')
function getAngkaTerbesarKedua(dataNumbers){
    let pertama = -1 , kedua = -1;
    if(typeof(dataNumbers)==='number' || typeof (dataNumbers)==='undefined'){
        console.log('\nERROR');
        return false;
    }
    else{
        for(let i = 0; i <= dataNumbers.length-1; i++){
            if(dataNumbers[i] > pertama){
                kedua = pertama;
                pertama = dataNumbers[i];
            }
            else if( dataNumbers[i] > kedua && dataNumbers[i] != pertama){
                kedua = dataNumbers[i];
            }
        }
        return(kedua);
    }
}
const dataNumbers=[9,4,7,7,4,3,2,2,8];
console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());


//END Soal 6