export default function taskBlock(trueOrfalse) {
  const task = false;
  const task2 = true;

  if (trueOrfalse) {
    const task = true; // eslint-disable-line
    const task2 = false; // eslint-disable-line
  }

  return [task, task2];
}
