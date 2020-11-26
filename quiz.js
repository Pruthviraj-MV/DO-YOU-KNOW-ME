var readlineSync = require("readline-sync");

//greeting the player, using functoin call
console.log("You are here to play Do You Know Me Challenge\n"); //\n just tried from my C knowledge and it worked
var playerName = readlineSync.question("Please enter your name : ");
console.log("Welcome to the game " + playerName + "\n" );
console.log("Lets check How much you know me!\n");

//question and answers bank, using array and  object concept
var questionAnswers = [
  {
    // question #1
    question : "Where do I live? --> ",  // not to be terminated ";" and comma separator is must 
    answer : "Davanagere"
  }, // comma separator is must
  {
    //questoin #2
    question : "Where did I complete my Engineering? --> ",
    answer : "SJCE"
  },
  {
    //question #3
    question : "I hold a degree in which stream? CS/ME/ECE/CIVIL  --> ",
    answer : "ME",
  },
  {
    //question #4
    question : "What's my pet name --> ",
    answer : "Pannu",
  },
  {
    //question #5
    question : "Where did I do my schooling(School Name)? --> ",
    answer : "DRR",

  }
]

var score = 0;

function game (question, answer) //functoin to display question and check answers
{
  var playerAnswer = readlineSync.question(question);
  // == just compares the value; === compares the values including its datatypes
  if (playerAnswer.toUpperCase() === answer.toUpperCase() ) // === did not work as have numerical answers as well need to understand more
  {
    score++;
    console.log("Thats a right answer");
  }
  else
  {
    console.log("Oops! Wrong answer");
    score = score==0? score : --score; //avoiding the negative score
  }
  console.log("Your current score : ", score + "\n");
  
  
}

console.log("Here is your first question\n");
for ( var i=0; i < questionAnswers.length ; i++) // looping question answer bank
{
  game (questionAnswers[i].question, questionAnswers[i].answer);
  if (i < questionAnswers.length-1 )
  {
  console.log("Here is the next question");
  }
  
}

console.log("Here ends the game my dear friend! See you soon...");

