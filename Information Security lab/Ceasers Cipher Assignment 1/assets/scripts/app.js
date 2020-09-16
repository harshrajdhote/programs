let plainText = document.getElementById('plainText');

let decryptBtn = document.getElementById('decrypt-btn');
let encryptBtn = document.getElementById('encrypt-btn');
let encryptResult = document.getElementById('encryptResult');
let decryptResult = document.getElementById('decryptResult');

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
class CeasersCipher{
    static encrypt() {
        let key = document.getElementById('key').value;
        let PlainText = plainText.value;
        let cipherText="";
        let PlainTextSize = PlainText.length;
        key = +key;
        for(let i=0;i<PlainTextSize;i++){
            cipherText += String.fromCharCode((PlainText.charCodeAt(i) + (+key))%256);
            key++;
            // console.log( key + " "+ String.fromCharCode(PlainText.charCodeAt(i)%256));
        }
        console.log(cipherText);
        
         encryptResult.innerHTML = `<h3>Encrypted Text : ${cipherText}</h3>`;
    } 

    static decrypt(){
        let cipherText = document.getElementById('cipherText');
        let key = document.getElementById('key').value;
        let CipherText = cipherText.value;
        let plainText="";
        let plainTextSize = CipherText.length;
       // console.log(CipherText);
        let i = 0;
        while(i<plainTextSize){
            // if(i >= plainTextSize-1)
            // break;
            // let charAscii="";
            // if( 65 > +(CipherText[i] + CipherText[i+1])){
            //     charAscii = +(CipherText[i] + CipherText[i+1] + CipherText[i+2])
            //     i = i+3;
            // }
            // else{
            //     charAscii = +(CipherText[i] + CipherText[i+1]);
            //     i = i+2;
            // }
            // console.log(charAscii);
            console.log(CipherText)
            plainText += String.fromCharCode((CipherText.charCodeAt(i) - (+key))%256);
            key++;
            // console.log(String.fromCharCode((CipherText.charCodeAt(i))%256));
            i++;
        }
        console.log(plainText);
        decryptResult.innerHTML = `<h3>Decrypted Text : ${plainText}</h3>`;
        
    }
}
encryptBtn.addEventListener('click',CeasersCipher.encrypt);
decryptBtn.addEventListener('click',CeasersCipher.decrypt);
