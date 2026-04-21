import * as reader from 'readline-sync';

class AlunoAtv {
    constructor(
        public nome: string,
        public matricula: string,
        public idade: number,
        public notaFinal: number
    ) {}

    getSituacao(): string {
        return this.notaFinal >= 6 ? "Aprovado" : "Reprovado";
    }

    exibir() {
        console.log(`\n--- FICHA ALUNO ---`);
        console.log(`Matricula: ${this.matricula} | Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} | Nota: ${this.notaFinal}`);
        console.log(`Situacao: ${this.getSituacao()}`);
    }
}

function main() {
    
    try {
        console.log("=== CADASTRO ESCOLAR ===");
        const nome = reader.question("Nome: ");
        if (!nome.trim()) throw new Error("Nome obrigatorio!");
        
        const matricula = reader.question("Matricula: ");
        
        const idade = reader.questionInt("Idade: ");
        if (idade < 0 || idade > 120) throw new Error("Idade invalida!");

        const nota = reader.questionFloat("Nota: ");
        if (nota < 0 || nota > 10) throw new Error("Nota invalida!");

        const aluno = new AlunoAtv(nome, matricula, idade, nota);
        aluno.exibir();
    } catch (e: any) {
        console.log(`Erro: ${e.message}`);
    }
}

main();