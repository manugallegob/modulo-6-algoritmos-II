var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var myString = "";
var mensajeEncriptado = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var mensajeDesencriptado = "";

// function encryptMessage(myString) {
//   for (i = 0; i < myString.length; i++) {
//     var index = plainAlphabet.indexOf(myString[i]);
//     mensajeEncriptado = mensajeEncriptado + encryptedAlphabet[index];
//   }
//   return mensajeEncriptado;
// }

// console.log(encryptMessage(myString));

// function decryptMessage(mensajeEncriptado) {
//   for (i = 0; i < mensajeEncriptado.length; i++) {
//     var ind = encryptedAlphabet.indexOf(mensajeEncriptado[i]);
//     mensajeDesencriptado = mensajeDesencriptado + plainAlphabet[ind];
//   }
//   return mensajeDesencriptado;
// }

// console.log(decryptMessage(mensajeEncriptado))

function decryptMessage(mensajeEncriptado) {
    for (i = 0; i < mensajeEncriptado.length; i++) {
      var ind = encryptedAlphabet.indexOf(mensajeEncriptado[i]);
      mensajeDesencriptado = mensajeDesencriptado + plainAlphabet[ind];
    }
    return mensajeDesencriptado;
  }
  
  console.log(decryptMessage(mensajeEncriptado))