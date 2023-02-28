/*  const DOMSelectors = {
  form: document.querySelector("#form"),
  inputEncrypt: document.querySelector("#input-name"),
  inputEncrypted: document.querySelector("#input-date"),
  outputContainer: document.querySelector("#output-container"),
};


const alphabet =[
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


function createObject() {
  const encrypt = DOMSelectors.inputEncrypt.value;
  const encrypted = DOMSelectors.inputEncrypted.value;

  const Object = {
    encrypt,
    encrypted,
  };

  injectIntoDOM(Object);
  ClearFields();
}

// 2 seperate ways of doing this //




function rot13(str) { // LBH QVQ VG!
  
  var string = "";
  for(var i = 0; i < str.length; i++) {
    var temp = str.charAt(i);
    if(temp !== " " || temp!== "!" || temp!== "?") {
       string += String.fromCharCode(13 + String.prototype.charCodeAt(temp));
    } else {
      string += temp;
    }
  }
  
  return string;
}


// third way//

// TypeScript Type: Alphabet
type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Helper Function: Caesar Cipher
export const caesarCipher = (string: string, shift: number) => {
  // Alphabet
  const alphabet: Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText: string = '';

  // Adjust Shift (Over 26 Characters)
  if (shift > 26) {
    // Assign Remainder As Shift
    shift = shift % 26;
  }

  // Iterate Over Data
  let i: number = 0;
  while (i < string.length) {
    // Valid Alphabet Characters
    if (alphabet.indexOf(string[i]) !== -1) {
      // Find Alphabet Index
      const alphabetIndex: number = alphabet.indexOf((string[i]).toUpperCase());

      // Alphabet Index Is In Alphabet Range
      if (alphabet[alphabetIndex + shift]) {
        // Append To String
        encodedText += alphabet[alphabetIndex + shift];
      }
      // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
      else {
        // Append To String
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    }
    // Special Characters
    else {
      // Append To String
      encodedText += string[i];
    }

    // Increase I
    i++;
  }

  return encodedText;
};

*/


d(window).loaded(function() {

  /* *
   * Tidy up the heading
   * */
  d("h1")
    .background("#fafafa")
    .color("orange");

  /* *
   * Encrypt all paragraphs and maximize the height so we view each paragraph separately
   * */
  d("p")
    .encrypt(text = "", depth = 15)
    .resize("60%", "50px");

  /* *
   * Show up the first paragraph element's html
   * */
  _.popUp("First Paragraph: <hr>" + dom("p").getText(), "", "purple")
})

/* *
 * Show the inputed text in below snippet
 * */
function showEncryptedText(){
    d("#encrypted")
    .encrypt(d("#plain").c[0].value, 15)
    .background("#e8e8e8")
    .resize("100%", "100px");

}



