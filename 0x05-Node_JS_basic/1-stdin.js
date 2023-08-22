process.stdout.write('Welcome to Holberton School, what is your name?\n'); //eslint-disable-line

process.stdin.on('readable', () => { // eslint-disable-line
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => { //eslint-disable-line
  process.stdout.write('This important software is now closing\n');
});
