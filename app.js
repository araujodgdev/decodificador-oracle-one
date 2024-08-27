const rawTextField = document.querySelector('#raw-text');
const encryptBtn = document.querySelector('#main-btn');
const decryptBtn = document.querySelector('#secondary-btn');
const outputContainer = document.querySelector('#output-container');

let rawText = '';

const encryptMap = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

const decryptMap = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
};

function encrypt(msg) {
  let encrypted = '';

  for (let char of msg) {
    encrypted += encryptMap[char] || char;
  }

  return encrypted;
}

function decrypt(msg) {
  let decrypted = '';
  let i = 0;

  while (i < msg.length) {
    let matchFound = false;

    for (let key in decryptMap) {
      if (msg.startsWith(key, i)) {
        decrypted += decryptMap[key];
        i += key.length;
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      decrypted += msg[i];
      i++;
    }
  }

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
  document
    .querySelector('#no-msg-container')
    .setAttribute('style', 'display: none');
  outputContainer.textContent = decrypt(rawTextField.value)
});
