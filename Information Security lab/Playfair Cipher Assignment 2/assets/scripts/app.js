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
       

        //main logic here    

        console.log(cipherText);
        
         encryptResult.innerHTML = `<h3>Encrypted Text : ${cipherText}</h3>`;
    } 

    static decrypt(){
        let cipherText = document.getElementById('cipherText');
        let key = document.getElementById('key').value;
        let CipherText = cipherText.value;
        let plainText="";
        let plainTextSize = CipherText.length;
       
        //main logic here


        console.log(plainText);
        decryptResult.innerHTML = `<h3>Decrypted Text : ${plainText}</h3>`;
        
    }
}
encryptBtn.addEventListener('click',CeasersCipher.encrypt);
decryptBtn.addEventListener('click',CeasersCipher.decrypt);
