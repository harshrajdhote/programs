let plainText = document.getElementById('plainText');
let cipherText = document.getElementById('cipherText');
let decryptBtn = document.getElementById('decrypt-btn');
let encryptBtn = document.getElementById('encrypt-btn');
let encryptResult = document.getElementById('encryptResult');
let decryptResult = document.getElementById('decryptResult');

class CeasersCipher{
    static encrypt() {
        let PlainText = plainText.value;
        let cipherText="";
        let PlainTextSize = PlainText.length;
        for(let i=0;i<PlainTextSize;i++){
            cipherText += PlainText.charCodeAt(i);
        }
        console.log(cipherText);
        
         encryptResult.innerHTML = `<h3>Encrypted Text : ${cipherText}</h3>`;
    } 

    static decrypt(){
        let CipherText = cipherText.value;
        let plainText="";
        let plainTextSize = CipherText.length;
        let i = 0;
        while(i<plainTextSize){
            if(i >= plainTextSize-1)
            break;
            let charAscii="";
            if( 65 > +(CipherText[i] + CipherText[i+1])){
                charAscii = +(CipherText[i] + CipherText[i+1] + CipherText[i+2])
                i = i+3;
            }
            else{
                charAscii = +(CipherText[i] + CipherText[i+1]);
                i = i+2;
            }
            console.log(charAscii);
            plainText += String.fromCharCode(charAscii); 
        }
        console.log(plainText);
        decryptResult.innerHTML = `<h3>Decrypted Text : ${plainText}</h3>`;
        
    }
}
encryptBtn.addEventListener('click',CeasersCipher.encrypt);
decryptBtn.addEventListener('click',CeasersCipher.decrypt);
