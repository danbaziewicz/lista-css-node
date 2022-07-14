class ListaCSS {
    constructor() {
        this.propriedade = [];
    }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Digite uma propriedade CSS: '
});

rl.prompt();
let listaNova = new ListaCSS();
rl.on('line', (valor) => {
    
    if (valor.toLowerCase() === "sair") {
        rl.pause()
        console.log('\nSaindo...\nEssa é sua lista de propriedades:');
        
        let lista = listaNova.propriedade.sort()
        for(let i = 0; i < listaNova.propriedade.length; i++){
            console.log(lista[i]);
        }
        process.exit(0);        
    } else if (valor.trim() === "") {
        console.log(`Campo vazio! Digite uma propriedade CSS\n`)
    } else {
        listaNova.propriedade.push(valor)
        console.log(valor)
        console.log(listaNova.propriedade.length)
        console.log(`\n${valor} adicionado na lista!\n`)
    }
    rl.prompt();
}).on('close', () => {
    console.log('Saiu!');
    process.exit(0);
});