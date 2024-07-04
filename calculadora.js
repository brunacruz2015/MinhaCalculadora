const prompt = require("prompt-sync")();


while (true) {
  console.log(`
        === Menu de Calculo ===
       1. Adicao(+)
       2. Subtracao(-)
       3. Multiplicacao (*)
       4. Divisao (/)
       5. Porcentagem(%)
       0. Sair
    `);
    let opcao = +prompt('Escolha uma opção: ');
    let numero1 = +prompt("Digite um numero");
    let numero2 = +prompt("Digite outro numero");

    if ( isNaN (numero1) || isNaN (numero2)){

    }else{

    }
    if (opcao == '1') {
    Adicao (numero1, numero2) 
    }else if (opcao == '2'){
    Subtracao (numero1, numero2)    
    }else if (opcao == '3'){
     Multiplicacao (numero1, numero2)   
    }else if (opcao == '4'){
      Divisao (numero1, numero2)  
    }else if (opcao == '5'){
      Porcentagem (numero1,numero2)  
    }else if(opcao == '0'){
        process.exit()
    }else{
        invalida()
    }
}
function Adicao(numero1,numero2){
    console.log(numero1 + numero2)
}
function Subtracao(numero1, numero2){
    console.log(numero1 - numero2)
}
function Multiplicacao(numero1, numero2){
    console.log(numero1 * numero2)
}
function Divisao(numero1, numero2){
 if (numero2)   
    console.log(numero1 / numero2)
}
function Porcentagem(numero1, numero2){
    console.log(numero1 % numero2 /100)
}
function invalida(){
    console.log("Opção invalida,tente novamente")
}