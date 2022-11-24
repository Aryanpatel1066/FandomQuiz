 
 var rl = require('readline-sync');
 var score = 0;

 console.log("Hello EveryOne Welcome to quiz app");

 // //taking a input from user 
 var capital = rl.question(" 1) what is capital of gujarat?:\n");

if(capital === "gandhinagar"){
   console.log("Correct!\n");
  score=score+1;
  console.log("your current score is \n" + score);
}
else{
  console.log("Wrong!\n");
  score=score-1;
  console.log("your current score is \n" + score);
}



// question 2 
var india_Capital = rl.question("2) what is capital of india?:\n");
if(india_Capital === "delhi"){
   console.log("Correct!\n");
  score=score+1;
  console.log("your current score is \n" + score);
}
else{
  console.log("Wrong!\n");
  score=score-1;
  console.log("your current score is \n" + score);
}

// question 3
var rajasthan_Capital = rl.question("3) what is capital of rajasthan?:\n");
if(rajasthan_Capital === "jaipur"){
   console.log("Correct!\n");
  score=score+1;
  console.log("your current score is \n" + score);
}
else{
  console.log("Wrong!\n");
  score=score-1;
  console.log("your current score is \n" + score);
}



// question 4
 var html = rl.question("3) full form of html is ?:\n")
if(html==="hypertext markup language"){
  console.log("correct!\n")
    score = score + 1;
    console.log("your current score is \n" + score)
  }
  else{
    console.log("wrong");
  score = score - 1;
  console.log("your current score is \n" + score);
  }


// question  5 

var css = rl.question("5) which language use for style the web page?:\n")
if(css==="css"){
  console.log("correct\n")
  score = score +1;
  console.log("your current score is \n "+ score);
}
else{
  console.log("wrong");
  score = score - 1;
  console.log("your current score is \n"+ score);
}

console.log("the total score is "+score);
 