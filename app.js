const rawTextField = document.querySelector('#raw-text');
const encryptBtn = document.querySelector('#main-btn')
const decryptBtn = document.querySelector('#secondary-btn')

let rawText = '';

function encrypt(msg) {
  let encrypted = msg
    .replaceAll('a', 'ai')
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

  return encrypted;
}

function decrypt(msg) {
    let decrypted = msg
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  return decrypted;
}

rawTextField.addEventListener('input', () => rawText = rawTextField.value);

encryptBtn.addEventListener('click', () => {
    document.querySelector('#no-msg-container').setAttribute('style', 'display: none')
    document.querySelector('#output-container').textContent = encrypt(rawText);

});
decryptBtn.addEventListener('click', () => console.log(decrypt(rawText)));

