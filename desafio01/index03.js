class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  
  // Abstract Factory
  class UIFactory {
    createButton() {
      throw new Error("Método abstrato deve ser implementado");
    }
    createWindow() {
      throw new Error("Método abstrato deve ser implementado");
    }
  }
  
  // Concrete Factories
  class LightUIFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
  
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkUIFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
  
    createWindow() {
      return new DarkWindow();
    }
  }
  
  // Cliente
  class App {
    constructor(factory) {
      this.button = factory.createButton();
      this.window = factory.createWindow();
    }
  
    renderUI() {
      console.log(this.button.render());
      console.log(this.window.render());
    }
  }
  
  // Uso
  function main() {
    const theme = "dark"; 
    let factory;
  
    if (theme === "light") {
      factory = new LightUIFactory();
    } else {
      factory = new DarkUIFactory();
    }
  
    const app = new App(factory);
    app.renderUI();
  }
  
  main();
  