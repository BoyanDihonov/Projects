// Generate a random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Select the first dice image and update its src attribute
document.querySelector('.img1').setAttribute("src", `./images/dice${randomNumber1}.png`);

// Generate a random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Select the second dice image and update its src attribute
document.querySelector('.img2').setAttribute("src", `./images/dice${randomNumber2}.png`);
