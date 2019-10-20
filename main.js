let count = 0;
let randomNum = Math.floor(Math.random()*100);

function processGuess(){

    let input = document.getElementById('guess').value
    let gap = Math.abs(input - randomNum);
    
    if(gap > 50){
        document.getElementById('closenessZone').innerHTML = 'freezing'
    } else if(gap > 20) {
        document.getElementById('closenessZone').innerHTML = 'cold'
    } else if(gap > 10){
        document.getElementById('closenessZone').innerHTML = 'warm'
    } else if(gap > 5){
        document.getElementById('closenessZone').innerHTML = 'hot'
    } else if(gap > 0){
        document.getElementById('closenessZone').innerHTML = 'boiling'
    } else {
        document.getElementById('closenessZone').innerHTML = 'congratulations!'
    }

    count++
    document.getElementById('triesZone').innerHTML = `You have guessed ${count} times`
}

function resetGame(){
    randomNum = Math.floor(Math.random()*100);
    document.getElementById('guess').value = ''
    document.getElementById('closenessZone').innerHTML = ''

    count = 0;

    document.getElementById('triesZone').innerHTML = `You have guessed ${count} times <br> good luck`
}