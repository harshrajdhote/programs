const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
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
    if(mode === 'ATTACK')
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

function attackHandler(){
    attackMonster('ATTACK');
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
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