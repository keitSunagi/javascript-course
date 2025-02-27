
//Exercício 01 - CAPÍTULO 2 - Imprimir um triangulo com # em um loop de 7 repetições.
let string = "";
let count = 0;
for(let x = 0; x <= 6; x++){
   for(let i = count; i <= x; i++){
    string += "#";
    count++;
   }
   console.log(string);
}
/*Exercício 02 - CAPÍTULO 2 - Escreva um programa que use console.logpara imprimir todos os números de 1 a 100, com duas exceções. 
Para números divisíveis por 3, imprima "Fizz"em vez do número, e para números divisíveis por 5 (e não por 3), imprima "Buzz"em vez.*/
let numberResult = 0;
let stringResult = "";
for(let x=1;x<=100;x++){
    stringResult = "";
    if(x % 3 == 0){
        stringResult = " - Fizz"
    }
    if(x % 5 == 0){
        stringResult = " - Buzz"
    }
    if(x % 3 == 0 && x % 5 == 0)
    {
        stringResult = " - FizzBuzz"
    }
    console.log(x + stringResult);
}
/*Exercício 03 - CAPÍTULO 2 - Tabuleiro de xadrez: Escreva um programa que crie uma string que represente uma grade 8×8, usando 
caracteres de nova linha para separar as linhas. E após peça ao usuário para informar dados de altura e largura da GRID */
let stringChess = "";
let xAlt = prompt("Informe a largura");
let yLarg = prompt("Informe a altura");

for(let x = 1;x <=xAlt;x++){
    stringChess = "";
    if(x%2==0){
        for(let i = 1; i <=yLarg;i++){
            if(i%2 == 0){
                stringChess += "[#]";
            }else{
                stringChess += "[ ]";
            }
        }        
    }else{
        for(let i = 1; i <=yLarg;i++){
            if(i%2 != 0){
                stringChess += "[#]";
            }else{
                stringChess += "[ ]";
            }
        }      
    }
    
    
    console.log(stringChess);
}