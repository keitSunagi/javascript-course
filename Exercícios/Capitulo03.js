//FUNÇÕES

//Dentro de uma binding;
const printSomething = function(){
    console.log("Something!");
};

const plusSomething = function(x,i){
    return x+i;
};

//Forma tradicional
function PrintAnotherThing(){
    console.log("Another Thing!");
}

//Forma de Seta - Esta binding = (Com estes parametros) => faz isso.
//Quando a função tem apenas um parâmetro o () pode ser omitido.
const PrintALastThing = () => {
    console.log("The last thing!");
};
const myFunction = x => {
    console.log(x);
}

//Funções podem ter valores opcionais ou valores default
function Calculate(x,i=1){
    return x+i; //Se o usuário não passar o valor de i ou o valor por ventura vi undefined ele assume como 1.
}
function CalculateMinus(x,y,z){
    return x-y-z;
}

//CLOSURE - Conceito de closure a função lembra do seu contexto mesmo já tendo sido executada.
function mYContext(){
    let x = 1;

    return function(){
        console.log(x++);
    };

}
let increment = mYContext();

/* -----------------------------------------------------------------------------------------------------------------------*/
//EXERCÍCIOS
//EXERCÍCIOS 01 - MÍNIMO - Crie uma função para descobrir o valor mínimo dado dois valores.
function min(x,y){
    if(x < y){
        return x;
    }else{
        return y;
    }
}

console.log(min(1,5));