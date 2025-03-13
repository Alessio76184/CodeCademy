const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your name: ', userName => {
  if (!userName) userName = 'Guest';

  readline.question('What is your question for the Magic Eight Ball? ', userQuestion => {
    // Generates a random number between 0 & 7
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";

    console.log(userName ? `Hello, ${userName}!` : "Hello!");

    console.log(`${userName} asks: ${userQuestion}`);

    switch (randomNumber) {
      case 0:
        eightBall = "It is certain";
        break;
      case 1:
        eightBall = "It is decidedly so";
        break;
      case 2:
        eightBall = "Reply hazy try again";
        break;
      case 3:
        eightBall = "Cannot predict now";
        break;
      case 4:
        eightBall = "Do not count on it";
        break;
      case 5:
        eightBall = "My sources say no";
        break;
      case 6:
        eightBall = "Outlook not so good";
        break;
      case 7:
        eightBall = "Signs point to yes";
        break;
    }

    console.log(eightBall);
    readline.close();
  });
});
