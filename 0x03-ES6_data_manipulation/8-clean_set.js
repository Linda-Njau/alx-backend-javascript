export default function cleanSet(set, startString) {
  const cleanString = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanValue = value.substring(startString.length);
      cleanString.push(cleanValue);
    }
  }
  return startString !== '' ? cleanString.join('-') : '';
}
