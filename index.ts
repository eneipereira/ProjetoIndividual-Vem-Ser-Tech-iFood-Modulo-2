/* Criação de Classe e Instância:
• Crie uma classe Carro com propriedades como modelo, ano e cor.
• Instancie dois objetos dessa classe com diferentes valores.
• Imprima no console os detalhes de cada carro. */

class Car {
  constructor(public type: string, public year: number, public color: string) {}
}

let car1 = new Car('Corolla', 2021, 'Branco');
let car2 = new Car('Uno', 2020, 'Bege');

console.log(`Type: ${car1.type} - Year: ${car1.year} - Color: ${car1.color}`);
console.log(`Type: ${car2.type} - Year: ${car2.year} - Color: ${car2.color}`);

/* Herança e Polimorfismo:
• Crie uma classe base chamada Animal com métodos como emitirSom e mover.
• Derive duas classes, Cachorro e Pássaro, que herdam da classe Animal.
• Sobrescreva o método emitirSom em ambas as classes derivadas.
• Crie instâncias de Cachorro e Pássaro e chame seus métodos. */


