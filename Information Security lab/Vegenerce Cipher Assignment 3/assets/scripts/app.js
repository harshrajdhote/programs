let plainText = document.getElementById('plainText');
let key = document.getElementById('key');
let decryptBtn = document.getElementById('decrypt-btn');
let encryptBtn = document.getElementById('encrypt-btn');
let encryptResult = document.getElementById('encryptResult');
let cipherText = document.getElementById('cipherText');
let decryptResult = document.getElementById('decryptResult');

function Vigenere() {
    "use strict";
    var plaintext = "";
    var ciphertext = "";
    var keyword = "";
    var alphabets = [];
    var init = function init() {

        var x;
        alphabets[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (x = 1; x < alphabets[0].length; x = x + 1) {
            alphabets[x] = alphabets[0].substr(x);
            alphabets[x] = alphabets[x].concat(alphabets[0].substring(0, x));
        }
    };

    var buildKeyword = function buildKeyword(password) {

        password = password.match(/[A-Za-z]/g);
        password = password.toString();
        password = password.replace(/[,]/g, "");

        keyword = password.toUpperCase();
    };

    this.encrypt = function encrypt(plaintext, password) {

        var x, pwIndex, vRow, thisLetter, thisRow;
         buildKeyword(password);
        plaintext = plaintext.toUpperCase();
        ciphertext = "";
        pwIndex = 0;
        for (x = 0; x < plaintext.length; x = x + 1) {
            vRow = alphabets[0].indexOf(keyword[pwIndex]);
            thisLetter = alphabets[0].indexOf(plaintext[x]);
            if (thisLetter === -1) {
                ciphertext += plaintext[x];
            } else {
                thisRow = alphabets[vRow];
                ciphertext += thisRow[thisLetter];
                pwIndex = pwIndex + 1;
            }
            if (pwIndex >= keyword.length) {
                pwIndex = 0;
            }
        }
        return ciphertext;
    };

    this.decrypt = function decrypt(ciphertext, password) {
        buildKeyword(password);
        plaintext = "";
        ciphertext = ciphertext.toUpperCase();

        var pwIndex, x, vRow, thisLetter, thisRow;
        pwIndex = 0;
        for (x = 0; x < ciphertext.length; x = x + 1) {
            vRow = alphabets[0].indexOf(keyword[pwIndex]);
            thisLetter = alphabets[vRow].indexOf(ciphertext[x]);
            if (thisLetter === -1) {
                plaintext += ciphertext[x];
            } else {
                thisRow = alphabets[0];
                plaintext += thisRow[thisLetter];
                pwIndex = pwIndex + 1;
            }
            if (pwIndex >= keyword.length) {
                pwIndex = 0;
            }
        }
        return plaintext;
    };
    init(); 
    return this;
}
var objVigenere = new Vigenere();
class VigenereUtil{
  
   static encrypt(){
    this.key = key.value;
    this.input = plainText.value;
    let myCipher = objVigenere.encrypt(this.input, this.key);
    encryptResult.innerHTML = `<h3>Encrypted Text : ${myCipher}</h3>`;
    }
   static decrypt(){
    this.key = key.value;
    this.input = cipherText.value;
    console.log(this.key," ",this.input);
    let myPlaintext = objVigenere.decrypt(this.input, this.key);
    decryptResult.innerHTML = `<h3>Decrypted Text : ${myPlaintext}</h3>`;
    }
}

encryptBtn.addEventListener('click',VigenereUtil.encrypt);
decryptBtn.addEventListener('click',VigenereUtil.decrypt);
document.getElementById('inputFile') 
            .addEventListener('change', function() { 
              
            var fr=new FileReader(); 
            fr.onload=function(){ 
                document.getElementById('plainText') 
                        .value=fr.result; 
                console.log(fr.result);
            } 
              
            fr.readAsText(this.files[0]); 
        }) 



