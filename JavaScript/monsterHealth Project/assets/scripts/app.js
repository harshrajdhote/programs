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
    writeLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    currentPlayerHealth -= playerDamage;
    if(currentPlayerHealth <= 0 && hasBonusLife)
    {
        hasBonusLife=false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You won!');
    writeLog(
        LOG_EVENT_MONSTER_ATTACK,
        'YOU WON',
        currentMonsterHealth,
        currentPlayerHealth
    );
    }
    else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0)
    {
        alert('You lost!');
        writeLog(
            LOG_EVENT_MONSTER_ATTACK,
            'MONSTER WON',
            currentMonsterHealth,
            playerHealth
        );
    }
    else if(currentMonsterHealth <=0 && currentPlayerHealth<=0)
    {
        alert('draw');
        writeLog(
            LOG_EVENT_MONSTER_ATTACK,
            'DRAW',
            currentMonsterHealth,
            playerHealth
        );
    }    

    if(
        currentMonsterHealth <= 0 && currentPlayerHealth > 0 ||
        currentPlayerHealth <= 0 && currentMonsterHealth > 0 ||
        currentPlayerHealth <= 0 && currentMonsterHealth <= 0
    ){
        reset();
        writeLog(
            LOG_EVENT_MONSTER_ATTACK,
            'GAME OVER',
            currentMonsterHealth,
            currentPlayerHealth
        );
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
    let logEvent;
    if(mode === MODE_ATTACK)
    {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }
    else{
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function writeLog(event,value,monsterHealth,playerHealth){
 let logEntry= {
    event : event,
    value : value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
};
 if(event === LOG_EVENT_PLAYER_ATTACK){
     logEntry.target='MONSTER';
     
 }
 else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
    logEntry.target =  'MONSTER';
 }else if(event == LOG_EVENT_MONSTER_ATTACK){
    logEntry.target='PLAYER';
       
 }else if(event === LOG_EVENT_PLAYER_HEAL){
    logEntry.target='PLAYER';

 }else if(event === LOG_EVENT_GAME_OVER){
    logEntry.event = 'GAMEOVER';
 }else
 {
    logEntry.event = 'OOPS, SOMETHING WENT WRONG!';
 }
 battleLog.push(logEntry);
}

function printLogHandler(){
   console.log(battleLog);
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
    writeLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}
attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click',printLogHandler);