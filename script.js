const DOMSelectors = {
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
