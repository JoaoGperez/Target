/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverteString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]
    }
    return stringInvertida;
}

const stringOriginal = 'Hello World';

console.log('String Original: ', stringOriginal);
console.log('String Invertida: ', inverteString(stringOriginal));

