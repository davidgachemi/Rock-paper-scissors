function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}
    let playerselection_ = prompt("lets play this game of rock paper and scissors, Choose yours, i choose mine, i bet you cant beat me:");
    let playerselection = playerselection_.toLowerCase();
    var num = getComputerChoice();
    console.log(num);
    
    
function playRound(playerselection){
    if(playerselection === 'rock' && num === 'scissors' ){
        return "You win!, Rock smashes the scissors";
    }else if(playerselection === 'paper' && num === 'scissors'){
        return "You lose!, The Paper will be cut by the scissors";
    }else if(playerselection === 'scissors' && num === 'scissors'){
        return "That's  a tie of two scissors";
    }else if(playerselection === 'rock' && num === 'rock'){
        return "That's  a tie of two rocks";
    }else if(playerselection === 'paper' && num === 'rock'){
        return "You win!, paper covers rock";
    }else if(playerselection === 'scissors' && num === 'rock'){
        return "You lose!, My Rock will Destroy scissors";
    }else if (playerselection === 'rock' && num === 'paper'){
        return "You lose!, Paper covers Rock";
    }else if (playerselection === 'paper' && num === 'paper'){
        return "That's  a tie of two papers";
    }else if (playerselection === 'scissors' && num === 'paper'){
        return "You win!, The scissors will cut my paper";
    }else{
        console.log("Invalid choice, repeat again");
        
    }

}
