// 24. Métodos com parâmetros e retorno
class Calculadora {
    somar(a: number, b: number) { return a + b; }
    subtrair(a: number, b: number) { return a - b; }
    multiplicar(a: number, b: number) { return a * b; }
}

// 25. Método de observação e alteração
class Lampada {
    private ligada: boolean = false;
    ligar() { this.ligada = true; } // Alteração
    desligar() { this.ligada = false; } // Alteração
    estaLigada() { return this.ligada; } // Observação
}

// 26. Método estático
class Usuario {
    constructor(public nome: string) {}
    static criarVisitante() { return new Usuario("Visitante"); }
}

// 27. Sobrecarga de método
class Saudacao {
    exibir(nome: string): void;
    exibir(nome: string, titulo: string): void;
    exibir(nome: string, titulo?: string): void {
        if (titulo) console.log(`Ola, ${titulo} ${nome}`);
        else console.log(`Ola, ${nome}`);
    }
}