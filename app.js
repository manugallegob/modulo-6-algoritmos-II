var plainAlphabet = "abcdefghijklmnñopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pañ:sdfg!hjklz¡xcv)bnm ";

// FUNCIÓN PARA DESENCRIPTAR EL MENSAJE
var decryptMessage = () => {
  let messageDescrypt = "", messageEncrypt = "";
  messageEncrypt = document.getElementById("textAreaEncrypt").value;
  for (let i = 0; i < messageEncrypt.length; i++) {
    let index = encryptedAlphabet.indexOf(messageEncrypt[i]);
    messageDescrypt += plainAlphabet[index];
  }
  document.getElementById("textAreaDescrypt").value = messageDescrypt;
};

// FUNCIÓN PARA ENCRIPTAR EL MENSAJE
var encryptMessage = () => {
  let messageEncrypt = "", messageDescrypt = "";
  messageDescrypt = document.getElementById("textAreaDescrypt").value;
  for (let i = 0; i < messageDescrypt.length; i++) {
    let index = plainAlphabet.indexOf(messageDescrypt[i]);
    messageEncrypt += encryptedAlphabet[index];
  }
  document.getElementById("textAreaEncrypt").value = messageEncrypt;
};

// EVENTOS EN BOTONES
document
  .getElementById("buttonEncript")
  .addEventListener("click", encryptMessage);
document
  .getElementById("buttonDescrypt")
  .addEventListener("click", decryptMessage);

// -------------------------------------NÚMERO ALEATORIOS NO REPETIDOS--------------------------------------------

var array = [];

var searchNotRepeated = (arr, numb) => {
  let x = 0, notRepeated = true;
  while (x < arr.length && notRepeated) {
    if (numb == arr[x]) notRepeated = false;
    x++;
  }
  return notRepeated;
}

var randomPick = (n, min, max) => {
  const range = max - min + 1;
  var firstNumber = getNumRamdom(range);
  array.push(firstNumber);
  while (array.length < n) {
    var otherNumber = getNumRamdom(range);
    if (searchNotRepeated(array, otherNumber)) array.push(otherNumber);
  }
  console.log("Búsqueda de números aleatorios no repetidos")
  console.log(array);
};

var getNumRamdom = range => numRandom = Math.floor(Math.random() * range);

randomPick(10, 1, 10);
