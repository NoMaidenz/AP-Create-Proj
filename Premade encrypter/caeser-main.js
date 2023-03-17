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

const form = document.forms[0];
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerHTML = [...form.input.value]
    .map((char) => encrypt(char))
    .join("");
});
function decrypt() {
  const shift = -Number(form.shift.value); //
  if (alphabet.includes(char.toLowerCase())) {
    const position = alphabet.indexOf(char);
    const OldPosition = (position + shift) % 26;
    return alphabet[OldPosition];
  } else {
    return char;
  }
}

function encrypt(char) {
  const shift = Number(form.shift.value);
  if (alphabet.includes(char.toLowerCase())) {
    const position = alphabet.indexOf(char);
    const newPosition = (position + shift) % 26;
    return alphabet[newPosition];
  } else {
    return char;
  }
}
