/* 
1) Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
a) Chamar a função e exibir o resultado no console. 
*/

let multi = (valor1,valor2) => valor1*valor2;
console.log(multi(10,5));

/* 
2) Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
a) Chamar a função e exibir o resultado no console. 
*/

let maior = (valor1,valor2,valor3) => {
    let ordem = [];
    ordem.push(valor1,valor2,valor3)
    ordem = ordem.sort((valor1,valor2) => valor1-valor2)
    ordem = ordem[ordem.length - 1];
    console.log(ordem)
}
console.log(maior(10,80,30))

/* 
3) Criar uma função de seta (arrow function) que recebe 
um parâmetro inteiro e retorna a palavra ímpar ou par de 
acordo com o valor recebido.
a) Chamar a função e exibir no console o resultado. 
*/

let imparPar = (inteiro) => {
    if(inteiro%2 == 0) {
        console.log("Par");
    } else {
        console.log("Impar");
    }
}
console.log(imparPar(2));