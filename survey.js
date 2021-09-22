const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's and activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Whats your favourite meal? ", (answer4) => {
        rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer5) => {
          console.log(`${answer} loves to ${answer2}. While they are doing this activity they love to blast ${answer3}! \nAfter consuming their favourite meal ${answer4}, ${answer} saves the world with his superpower of ${answer5}.`);
          rl.close();
        })
      });
    });
  });
});
//output Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.