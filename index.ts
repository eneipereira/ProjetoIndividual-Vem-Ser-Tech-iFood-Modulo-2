/* Criação de Classe e Instância:
• Crie uma classe Carro com propriedades como modelo, ano e cor.
• Instancie dois objetos dessa classe com diferentes valores.
• Imprima no console os detalhes de cada carro. */

class Car {
  constructor(public type: string, public year: number, public color: string) {}
}

let carro1 = new Car('Corolla', 2021, 'Branco');
let carro2 = new Car('Uno', 2020, 'Bege');

console.log(`Modelo: ${carro1.type} - Ano: ${carro1.year} - Cor: ${carro1.color}`);
console.log(`Modelo: ${carro2.type} - Ano: ${carro2.year} - Cor: ${carro2.color}`);

/* Herança e Polimorfismo:
• Crie uma classe base chamada Animal com métodos como emitirSom e mover.
• Derive duas classes, Cachorro e Pássaro, que herdam da classe Animal.
• Sobrescreva o método emitirSom em ambas as classes derivadas.
• Crie instâncias de Cachorro e Pássaro e chame seus métodos. */

class Animal {
  constructor(public name: string) {}
 
  emitirSom(): void {
     console.log('O animal emite um som qualquer');
  }
 
  mover(): void {
     console.log('O animal está se movendo...');
  }
 }
 
 class Cachorro extends Animal {
  constructor(name: string) {
     super(name);
  }
 
  emitirSom(): void {
     console.log('Au Au Au');
  }
 }
 
 class Passaro extends Animal {
  constructor(name: string) {
     super(name);
  }
 
  emitirSom(): void {
     console.log('Piu-piu');
  }
 }
 
 let cachorro = new Cachorro('Bob');
 let passaro = new Passaro('Juca');
 
 cachorro.emitirSom();
 passaro.emitirSom();
 
 cachorro.mover();
 passaro.mover();

 /* Encapsulamento e Métodos Estáticos:
• Crie uma classe Calculadora com métodos de operações matemáticas (soma, subtração, 
multiplicação, divisão).
• Encapsule as operações matemáticas, permitindo apenas o acesso através dos métodos da 
classe.
• Adicione um método estático que retorna o valor absoluto de um número. */

class Calculadora {
  soma(a: number, b: number): number {
    return a + b;
  }

  subtracao(a: number, b: number): number {
    return a - b;
  }

  multiplicacao(a: number, b: number): number {
    return a * b;
  }

  divisao(a: number, b: number): number {
    return a / b;
  }

  static valorAbsoluto(numero: number): number {
    return Math.abs(numero);
  }
}
 
 let calc = new Calculadora();
 console.log(calc.soma(5, 5));
 console.log(calc.subtracao(10, 5));
 console.log(calc.multiplicacao(2, 5));
 console.log(calc.divisao(10, 2));
 
 console.log(Calculadora.valorAbsoluto(-100));
