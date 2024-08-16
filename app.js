const rawTextField = document.querySelector('#raw-text');
const encryptBtn = document.querySelector('#main-btn');
const decryptBtn = document.querySelector('#secondary-btn');
const outputContainer = document.querySelector('#output-container');

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

rawTextField.addEventListener('input', () => (rawText = rawTextField.value));

encryptBtn.addEventListener('click', () => {
  document
    .querySelector('#no-msg-container')
    .setAttribute('style', 'display: none');
  outputContainer.textContent = encrypt(rawText);
});

outputContainer.addEventListener('click', () => {
  let content = outputContainer.textContent;

  const outputRange = document.createRange(); // instancia um objeto range
  outputRange.selectNodeContents(outputContainer); // define o intervalo do range para cobrir todo o parágrafo do container de output

  const selection = window.getSelection(); // obtém o objeto de seleção atual do navegador
  selection.removeAllRanges(); // remove as seleções já existentes para evitar múltiplas seleções
  selection.addRange(outputRange); //adiciona o range criado na seleção

  navigator.clipboard.writeText(content).then(() => {
    window.alert('Texto copiado para a área de transferência!');
  });
});

decryptBtn.addEventListener('click', () => {
  document.querySelector('#no-msg-container').removeAttribute('style');
  outputContainer.setAttribute('style', 'display: none');
});
