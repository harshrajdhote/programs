class Playfair {
    setKey(key) {
      if (key) {
        
        const alphabet = ['abcdefghiklmnopqrstuvwxyz'];
        const sanitizedKey = key.toLowerCase().replace('j', 'i').replace(/[^a-z]/g, '');
        const keyGrid = [...new Set(`${sanitizedKey}${alphabet}`)];
        this.grid = [];
        for (let i = 0; i < keyGrid.length; i += 5) {
          this.grid.push(keyGrid.slice(i, i + 5));
        }
      } else {
        this.grid = [
          ['a', 'b', 'c', 'd', 'e'],
          ['f', 'g', 'h', 'i', 'k'],
          ['l', 'm', 'n', 'o', 'p'],
          ['q', 'r', 's', 't', 'u'],
          ['v', 'w', 'x', 'y', 'z']
        ];
      }
    }
    preProcess({ input, decrypt }) {
     
      const text = input.toLowerCase().replace(/[^a-z]/g, '').replace(/j/g, 'i').split('').filter(x => x !== ' ');
      const duples = [];
      for (let i = 0; i < text.length; i += 2) {
        const currentDuple = text.slice(i, i + 2);
        if (!decrypt && currentDuple.length !== 2) {
          currentDuple.push('x');
          duples.push(currentDuple);
        } else if (!decrypt && currentDuple[0] === currentDuple[1]) {
          text.splice(i + 1, 0, 'x');
          duples.push(text.slice(i, i + 2));
        } else {
          duples.push(currentDuple);
        }
      }
  
     
      const coordinates = [];
      duples.forEach((duple) => {
        coordinates.push(duple.map((letter) => {
          let col;
          const row = this.grid.findIndex(row => {
            const rowIdx = row.findIndex(x => x === letter);
            if (rowIdx >= 0) {
              col = rowIdx;
              return true;
            }
            return false;
          });
          return [row, col];
        }));
      });
  
      return coordinates;
    }
    process({ input, decrypt }) {
      if (!this.grid) return 'First set the key!';
      if (input && decrypt && input.length % 2 !== 0) return 'Invalid ciphertext';
      const coordinates = this.preProcess({ input, decrypt });
  
      const modifier = decrypt ? -1 : 1;
      const wall = decrypt ? 0 : 4;
      const phase = decrypt ? 4 : -4;
  
      const processedLocs = [];
      coordinates.forEach((loc) => {
      
        let modifiedLoc = [];
  
        if (loc[0][0] === loc[1][0]) {
       
          modifiedLoc[0] = loc[0][1] === wall ? [loc[0][0], wall + phase] : [loc[0][0], loc[0][1] + modifier];
          modifiedLoc[1] = loc[1][1] === wall ? [loc[1][0], wall + phase] : [loc[1][0], loc[1][1] + modifier];
          return processedLocs.push(modifiedLoc);
        }
  
        
        if (loc[0][1] === loc[1][1]) {
         
          modifiedLoc[0] = loc[0][0] === wall ? [wall + phase, loc[0][1]] : [loc[0][0] + modifier, loc[0][1]];
          modifiedLoc[1] = loc[1][0] === wall ? [wall + phase, loc[1][1]] : [loc[1][0] + modifier, loc[1][1]];
          return processedLocs.push(modifiedLoc);
        }
  
        modifiedLoc[0] = [loc[0][0], loc[1][1]];
        modifiedLoc[1] = [loc[1][0], loc[0][1]];
        processedLocs.push(modifiedLoc);
      });
  
      
      const processedText = processedLocs
        .map((loc) => [this.grid[loc[0][0]][loc[0][1]], this.grid[loc[1][0]][loc[1][1]]].join(''))
        .join('');
  
      return processedText.toUpperCase();
    }
  }
  
let plainText = document.getElementById('plainText');
let key = document.getElementById('key');
let decryptBtn = document.getElementById('decrypt-btn');
let encryptBtn = document.getElementById('encrypt-btn');
let encryptResult = document.getElementById('encryptResult');
let cipherText = document.getElementById('cipherText');
let decryptResult = document.getElementById('decryptResult');
const pf = new Playfair();

class PlayfairUtil{
    
   static encrypt(){
    this.key = key.value;
    this.input = plainText.value;
    pf.setKey(this.key);
    let cipherText = pf.process({input : this.input});
    encryptResult.innerHTML = `<h3>Encrypted Text : ${cipherText}</h3>`;
    }
   static decrypt(){
    this.key = key.value;
    pf.setKey(this.key);
    this.input = cipherText.value;
    console.log(this.key," ",this.input);
    let plainText = pf.process({input : this.input,decrypt:true});
    decryptResult.innerHTML = `<h3>Decrypted Text : ${plainText}</h3>`;
    }
}

encryptBtn.addEventListener('click',PlayfairUtil.encrypt);
decryptBtn.addEventListener('click',PlayfairUtil.decrypt);
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