/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function isFibonacci(num) {

    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return `O numero ${num} pertence a sequencia de Fibonacci.`
    }

    let next = a + b;
    while (next <= num) {
        if (next === num) {
            return `O numero ${num} pertence a sequencia de Fibonacci.`
        }
        a = b;
        b = next;
        next = a + b;
    }
    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

let numero = 21;
console.log(isFibonacci(numero));
