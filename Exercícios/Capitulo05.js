//DADOS E ABSTRAÇÕES

//Passando uma ação como parametro pode-se passar funções como parâmetros, muito louco!
function repeat(n,action){
    for(let i = 0; i <= n; i++){
        action(i);
    }
}
//Malandro dá pra criar funções dentro do negócio que manda a ação pra dentro da função, ta maluco!
let labels = [];
repeat(2, i => {labels.push(`What ${i+1}`)});


