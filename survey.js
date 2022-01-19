const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyInputs = {};

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  surveyInputs.name = answer;
  rl.question("Which sport is your absolute favourite?", (answer) => {
    surveyInputs.sport = answer;
    rl.question("What's an activity you like doing? ", (answer) => {
      surveyInputs.activity = answer;
      rl.question("What do you listen to while doing that? ", (answer) => {
        surveyInputs.listen = answer;
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
          surveyInputs.meal = answer;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
            surveyInputs.superpower = answer;
            rl.question("What's your favourite thing to eat for that meal?", (answer) => {
              surveyInputs.dish = answer;
              //print out all inputs.
              console.log(
                `Thank you for joinging out survey! Here is output of all your answers for your plesure!
              1-Your name is ${surveyInputs.name}.
              2-You like to ${surveyInputs.activity}. 
              3-You like to listen to ${surveyInputs.listen}. 
              4-Your favourite meal is ${surveyInputs.meal}. 
              5-Your favourite thing to eat for that meal is ${surveyInputs.dish}.
              6-Your favourite sport is ${surveyInputs.sport}. 
              7-Your superpower is ${surveyInputs.superpower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});
