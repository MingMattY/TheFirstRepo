function chooseNum(){
    let randomNumber = document.getElementById("result").innerHTML = (`${Math.random()*100}`);
    return randomNumber;
}

function count(){
    let i = randomnumber;
    i++;
    let countNum = document.getElementById("triesZone").innerHTML = (i);
    return countNum;
}

function compareNum(){
    
    let randomNumber = document.getElementById("result").innerHTML = (`${Math.random()*100}`);

    if(randomNumber > 50){
        document.getElementById('closenessZone').innerHTML = (`Frezzing`);
    } else if(randomNumber >= 20 && randomNumber <= 50){
        document.getElementById('closenessZone').innerHTML = (`Cold`);
    } else if(randomNumber >= 10 && randomNumber <= 19){
        document.getElementById('closenessZone').innerHTML = (`Warm`);
    } else if(randomNumber >= 5 && randomNumber <= 9){
        document.getElementById('closenessZone').innerHTML = (`Hot`);
    } else if(randomNumber <= 5){
        document.getElementById('closenessZone').innerHTML = (`Boiling`);
    } else if(randomNumber === randomNumber){
        document.getElementById('closenessZone').innerHTML = (`Congratulations!`);
    }
}

// * If the guess is more than 50 off print "Freezing" to the closeness zone
// * If the guess is between 20-50 off print "Cold" to the closeness zone
// * If the guess is between 10-19 off print "Warm" to the closeness zone
// * If the guess is between 5-9 off pring "Hot" to the closeness zone
// * If the guess is less than 5 off print "Boiling" to the closeness zone
// * If the guess is correct then congratulate the user.