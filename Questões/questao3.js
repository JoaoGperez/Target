/*
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/



const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);

    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

    //Caclula maior e menor faturamento
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Calcula a média do faturamento dos dias válidos
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    // Conta o número de dias com faturamento superior à média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;


    console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});
