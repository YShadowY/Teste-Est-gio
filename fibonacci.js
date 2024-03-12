function verificaFibonacci(numero) {
    if (numero === 0 || numero === 1) {
        return true;
    }

    let termo1 = 0;
    let termo2 = 1;
    let termo3 = 0;

    
    while (termo3 < numero) {
        termo3 = termo1 + termo2;
        termo1 = termo2;
        termo2 = termo3;
    }

    
    return numero === termo3;
}

const readline = require('readline');

// readline para criar uma interface para leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite um número: ', (input) => {
  const valor = parseInt(input);


  if (verificaFibonacci(valor)) {
    console.log(`O número ${valor} faz parte da sequência de Fibonacci.`);
  } else {
    console.log(`O número ${valor} não faz parte da sequência de Fibonacci.`);
  }


  rl.close();
});
