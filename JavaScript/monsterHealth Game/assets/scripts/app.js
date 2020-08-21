const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STONG_ATTACK = 'STONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Max life for you and monster.','100');


let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function endRound(){
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentPlayerHealth <= 0 && hasBonusLife)
    {
        hasBonusLife=false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0)
    alert('You won!');
    else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0)
    alert('You lost!');
    else if(currentMonsterHealth <=0 && currentPlayerHealth<=0)
    alert('draw');

    if(
        currentMonsterHealth <= 0 && currentPlayerHealth > 0 ||
        currentPlayerHealth <= 0 && currentMonsterHealth > 0 ||
        currentPlayerHealth <= 0 && currentMonsterHealth <= 0
    ){
        reset();
    }
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    hasBonusLife = true;
    resetGame(chosenMaxLife);
}

function attackMonster(mode){
    let maxDamage;
    if(mode === MODE_ATTACK)
    {
        maxDamage = ATTACK_VALUE;
    }
    else{
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function writeLog(event,value,monsterHealth,playerHealth){
 let logEntry;
 if(event === LOG_EVENT_PLAYER_ATTACK){
     logEntry = {
         event : event,
         value : value,
         target: 'MONSTER',
         finalMonsterHealth: monsterHealth,
         finalPlayerHealth: playerHealth
     };
     
 }
 else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
    logEntry = {
        event : event,
        value : value,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    
 }else if(event == LOG_EVENT_MONSTER_ATTACK){
    logEntry = {
        event : event,
        value : value,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

 }else if(event === LOG_EVENT_PLAYER_HEAL){
    logEntry = {
        event : event,
        value : value,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

 }else if(event === LOG_EVENT_GAME_OVER){
    logEntry = {
        event : event,
        value : value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
   
 }else
 {
    logEntry = {
        event: 'OOPS, SOMETHING WENT WRONG!'
    };
 }
 battleLog.push(logEntry);
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)  //to check currentPlayerHealth cant goes beyond chosenmaxLife
    {
        alert("You can't heal to more than max initial health. ");
        healValue = chosenMaxLife - currentPlayerHealth; 
        console.log('current health ',currentPlayerHealth,'healval ', healValue);
    }
    else
    {
        healValue = HEAL_VALUE;
    }
    
    increasePlayerHealth(HEAL_VALUE); 
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}
attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);