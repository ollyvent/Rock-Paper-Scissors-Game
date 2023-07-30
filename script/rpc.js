//create computer options based on "r" for rock, "p" for paper, "s" for scissors
var computerOptions = ["r", "p", "s"];
// console.log(computerOptions);

// create variables for wins, losses and ties
var myWins = 0;
var myLosses = 0;
var myTies = 0;

// add a for loop 
for(i = 0; i < 9; i++){
    
//create function to randomize computer options
var computerRndm =  computerOptions[Math.floor(Math.random() * computerOptions.length)];
// alert(computerRndm);

//user invitation to play
var userOptions = prompt("select letters 'r' for rock, 'p' for paper and 's' for scissors");

// add general condition limiting user input to "r", "p" and "s"
if (userOptions === "r" || userOptions === "p" || userOptions === "s") {
    alert("computer selected " + computerRndm);
    
    //add game conditional statements
    if (userOptions === computerRndm) {
        myTies++;
        alert("this was a tie!!!, " + myTies + " ties so far");        
    } 

    else if ((userOptions === "r" && computerRndm === "s") ||
            (userOptions === "p" && computerRndm === "r") ||
            (userOptions === "s" && computerRndm === "p")) {
                myWins++;
                alert("this was a win!!!, " + myWins + " wins so far"); 
            }

            else{
                myLosses++;
                alert("this is a loss!!!, " + myLosses + " losses so far"); 
            }    

}

}
//alert summary od wins and losses and draws to user

alert("Game Over!!! \nWins: " + myWins + ", \nLosses: " + myLosses + ", \nTies: " + myTies);