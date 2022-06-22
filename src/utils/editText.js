// replace item name
export function replaceText(string, word) {
  return string.replace('товар', word);
}

// return number in a string
function parseNumber(string) {
  return string.replace(/[^0-9]/g, '');
}

// return declension
function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20)
    ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

// return correct text for promo text
export function editPromoText(string, dictionary) {
  let editedText = '';
  const str = string.toLowerCase().replace(/[^a-zа-яё0-9\s]/gi, ' ');
  const worlds = str.split(' ');
  let number = parseNumber(str);
  if (number === '') return [number, string];
  const wordIndex = Number(worlds.indexOf(number)) + 1;
  const world = worlds[wordIndex];
  dictionary.forEach((elem) => {
    if (elem.includes(world)) {
      editedText = declOfNum(number, elem);
    }
  });
  const text = string.replace(`${number} `, '').replace(world, editedText);
  if (Number(number) === 1) number = '';
  return [number, text];
}
