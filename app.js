/*Projeto desenvolvido durante o curso: 
  Lógica de programação: mergulhe em programação com JavaScript
  Carga Horária: 6h
  Local: UNIBB/Alura
*/

//Mensagem de boas vinda
alert ('Seja Bem Vindo ao Jogo do Número Secreto');

//Declaração de Variáveis
let numeroMaximo = 500;     //Maior número que será gerado como secreto
let numeroSecreto;          //Número secreto que quero descobrir
let chute;                  //Número que pensamos ser o secreto
let tentativas = 1;         //Número de tentativa

//Geração do número secreto entre 0 e numeroMaximo
numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;

//Comparando o número chutado com o número secreto
while (chute != numeroSecreto) { //Enquanto o chute não for igual ao número secreto
    
    //Caixa para digitar o número chutado
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else{
        if (chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Utilizando operador ternário:
//número de tentativas maior que 1? Se si, escreve "Tentativas". Se não "Tentativa"
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'

alert(`Isso ai! Você descobriu o número secreto que é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);