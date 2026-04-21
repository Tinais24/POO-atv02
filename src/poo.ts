// 17. Classe Pessoa
class Pessoa {
    constructor(public nome: string, public idade: number) {}
    apresentar(): void { console.log(`Oi, sou ${this.nome} e tenho ${this.idade} anos.`); }
}

// 18. Classe Produto
class Produto {
    constructor(public nome: string, public preco: number, public estoque: number) {}
    adicionarEstoque(qtd: number) { this.estoque += qtd; }
    removerEstoque(qtd: number) { this.estoque -= qtd; }
    exibirProduto() { console.log(`${this.nome}: R$ ${this.preco} | Estq: ${this.estoque}`); }
}

// 19. Classe Retangulo
class Retangulo {
    constructor(public base: number, public altura: number) {}
    calcularArea() { return this.base * this.altura; }
    calcularPerimetro() { return 2 * (this.base + this.altura); }
}

// 20. Classe ContaCorrente
class ContaCorrente {
    constructor(public titular: string, private _saldo: number) {}
    depositar(v: number) { if (v > 0) this._saldo += v; }
    sacar(v: number) {
        if (v > 0 && v <= this._saldo) this._saldo -= v;
        else console.log("Saque invalido!");
    }
    consultarSaldo() { return this._saldo; }
}

// 21. public, private e protected
class A { public x = 1; }      // Acessível em qualquer lugar.
class B { private y = 2; }     // Acessível apenas dentro desta classe.
class C { protected z = 3; }   // Acessível nesta classe e nas filhas.

// 22. Getters e Setters
class Temperatura {
    private _celsius: number = 0;
    get celsius() { return this._celsius; }
    set celsius(v: number) {
        if (v < -273.15) console.log("Erro: Abaixo do zero absoluto!");
        else this._celsius = v;
    }
}

// 23. Uso de this
class Televisao {
    canal: number = 1;
    setCanal(canal: number) {
        // 'this.canal' é o atributo da classe, 'canal' é o parâmetro local.
        this.canal = canal;
    }
}