const readlineSync = require('readline-sync');

const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];
let again = false;
do {
  const index = Math.floor(Math.random() * words.length);
  const secret = words[index];
  let revealSecret = '';
  let strikes = 0;
  let win = false;
  let output = '';
  for (let i = 0; i < secret.length; i++) {
    revealSecret += '_';
  }
  revealSecret = revealSecret.trim();

  output = '';
  for (let i = 0; i < revealSecret.length; i++) {
    output += `${revealSecret[i]} `;
  }

  output = output.trim();
  console.log(output);

  while (strikes < 5 && !win) {
    const input = readlineSync.question('Pick a letter? ')[0];
    if (input !== undefined) {
      let reveal = '';
      let correct = false;
      win = true;
      for (let i = 0; i < secret.length; i++) {
        if (input === secret[i]) {
          reveal += input;
          correct = true;
        } else if (revealSecret[i] !== '_') {
          reveal += revealSecret[i];
        } else {
          reveal += '_';
          win = false;
        }
      }
      revealSecret = reveal;

      if (correct) {
        console.log('good guess');
      } else {
        strikes++;
        console.log(`wrong ${strikes} strike(s)!`);
      }
    }

    output = '';
    for (let i = 0; i < revealSecret.length; i++) {
      output += `${revealSecret[i]} `;
    }

    output = output.trim();
    console.log(output);
  }

  if (win) {
    console.log('YOU WON');
  } else {
    console.log('YOU LOSE');
  }
  again = readlineSync.keyInYNStrict('Do you want to play again?');
} while (again);
