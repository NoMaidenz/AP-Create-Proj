const DOMSelectors = {
  form: document.querySelector("#form"),
  inputEncrypt: document.querySelector("#input-name"),
  inputEncrypted: document.querySelector("#input-date"),
  outputContainer: document.querySelector("#output-container"),
};

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
