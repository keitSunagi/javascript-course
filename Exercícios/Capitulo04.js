//Objetos e estrutura de dados.
//Abaixo é um objeto com quatro parâmetros.
let person = {name : "", age : 0, birthDate : '00/00/0000'};
//Array
let persons = [];
//Acesso de um parâmetro de uma pessoa.
function ScreenWrite(){
    for(x=0;x<persons.length;x++){
        console.log(persons[x].name, " - ",persons[x].age," - ",persons[x].birthDate);
    }
}
function AddPerson(name,age,birthDate){
    //Adiciona no final da pila .Pop retira do final da pilha
    persons.push({name,age,birthDate});
}
function EstudoArrayPropeties(){
    let numbers = [2,5,4,8,4,6,4,5];
    //Funções legais.
    console.log("Números: ", numbers);
    //Unshift adiciona no começo da fila.
    numbers.unshift(76);
    console.log("Números com Unshift: ", numbers);
    //Shift retira do começo da fila
    numbers.shift();
    console.log("Números com Shift: ", numbers);
    //IndexOf - Mostra o primeiro indice do que você tiver procurando.
    console.log("IndexOf (4) está no indíce:",numbers.indexOf(4));
    //IndexOf - Quando não acha nada volta o numero -1
    console.log("IndexOf (12837) está no indíce:",numbers.indexOf(12837));
    //LastIndex - Igual IndexOf mas volta o último indice que encontrou.
    console.log("IndexOf (4) está no indíce:",numbers.lastIndexOf(4));
    //Slice - Pega um range ali entre dois numeros numa array e volta tudo que está entre os dois.
    console.log("Slice entre [2 e 8]: ",numbers.slice(2,8));
}
//Brincando com arquivos JSON.
function brincando(){
    let final = "";
    try {
         //fs vem dentro do Node.JS ele lê arquivos.
        const fs = require('fs');
        const js = fs.readFileSync("files.json", 'utf-8');
        //Ler arquivo JSON e converter o danado pra um objeto.
        final = JSON.parse(js);
        console.log(`Nome: ${final.Name} - Idade: ${final.Age} - Data de Nascimento: ${final.BirthDate}`);
    } catch (error) {
        ErroDeArquivo(error);
    }
    
}
function ErroDeArquivo(erro){
    console.log("Arquivo não encontrado / ", erro);
}
brincando();



