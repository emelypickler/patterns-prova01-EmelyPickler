 // Factory Method
class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class Carro {
    move() {
      return "Andando de carro e chegando na UNISATC";
    }
  }
  
  // Factory Method
  class Factory {
    static types = {
      bicicleta: Bicicleta,
      patinete: Patinete,
      onibus: Onibus,
      carro: Carro,
    };
  
    static createFactory(type) {
      const FactoryClass = this.types[type];
      if (!FactoryClass) {
        throw new Error("Tipo de locomoção ainda não suportado");
      }
      return new FactoryClass();
    }
  }
  
  function main() {
    const veiculos = ["bicicleta", "patinete", "onibus", "carro"];
    try {
      veiculos.forEach((type) => {
        const veiculo = Factory.createFactory(type);
        console.log(veiculo.move());
      });
    } catch (err) {
      console.error("Erro...", err.message);
    }
  }
  
  main();