import * as reader from 'readline-sync';

// 11. Leitura simples
const nomeIn = reader.question("Digite seu nome: ");
const idadeIn = reader.questionInt("Digite sua idade: ");
const cidadeIn = reader.question("Cidade: ");
console.log(`Resumo: ${nomeIn}, ${idadeIn} anos, de ${cidadeIn}.`);

// 12. Conversão
const num1 = reader.questionFloat("Digite o numero 1: ");
const num2 = reader.questionFloat("Digite o numero 2: ");
console.log(`Soma: ${num1 + num2}`);


// 13. Campo obrigatório

function obrigatorio(valor: string, nomeCampo: string): string {
    
    if (!valor.trim()) throw new Error(`Campo obrigatorio: ${nomeCampo}`);
    return valor;
}

// 14. Validação de número inteiro

function validarInteiro(valor: string, nomeCampo: string): number {

    const n = Number(valor);
    if (isNaN(n) || !Number.isInteger(n)) throw new Error(`${nomeCampo} deve ser inteiro.`);
    return n;
}

// 15. Validação por faixa
function validarIdade(idade: number) {

    if (idade < 0 || idade > 120) throw new Error("Idade deve ser entre 0 e 120.");
    return idade;
}

// 16. Cadastro simples com validação

try {

    const nomeC = obrigatorio(reader.question("Nome do Aluno: "), "Nome");
    const idadeC = validarIdade(reader.questionInt("Idade: "));
    const notaC = reader.questionFloat("Nota Final: ");
    if (notaC < 0 || notaC > 10) throw new Error("Nota deve ser entre 0 e 10.");

    console.log(`Cadastrado: ${nomeC}, ${idadeC} anos, Nota: ${notaC}`);
} catch (e: any) {
    console.log(`Erro: ${e.message}`);
}