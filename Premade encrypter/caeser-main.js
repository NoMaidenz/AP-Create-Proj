const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabet2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const form = document.forms[0];
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerHTML = [...form.input.value]
    .map((char) => encrypt(char))
    .join("");
});

function encrypt(char) {
  const shift = Number(form.shift.value);
  if (alphabet.includes(char.toLowerCase())) {
    const position = alphabet.indexOf(char);
    const newPosition = (position + shift) % 26;
    return alphabet[newPosition];
  } else if (alphabet2.includes(char.toUpperCase())) {
    const position = alphabet2.indexOf(char);
    const newPosition = (position + shift) % 26;
    return alphabet2[newPosition];
  } else {
    return char;
  }
}
