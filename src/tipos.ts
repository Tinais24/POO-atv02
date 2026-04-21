// 5. Tipos básicos
let texto: string = "Olá";
let numero: number = 100;
let ligado: boolean = true;
let listaNums: number[] = [10, 20, 30];
let listaNomes: string[] = ["Ana", "Bia"];
let coordenada: [number, number] = [-23.4, -46.5]; // Tupla
enum Perfil { ADMIN, USER, GUEST };

// 6. Inferência e anotação

let inferido = "String inferida"; // O TS já sabe o tipo pelo valor inicial.
let anotado: number = 50;         // Anotação explícita.

// Caso onde inferência basta: variáveis simples com valor inicial claro.
// Caso onde anotação ajuda: funções complexas ou quando o valor começa vazio.

// 7. Funções tipadas

const somar = (a: number, b: number): number => a + b;
const subtrair = (a: number, b: number): number => a - b;
const multiplicar = (a: number, b: number): number => a * b;
const dividir = (a: number, b: number): number => a / b;

// 8. Função com void

function exibirMensagem(msg: string): void {

    console.log(`Mensagem do sistema: ${msg}`);
}


// 9. Função com validação

const ehPar = (num: number): boolean => num % 2 === 0;


// 10. Interface e type
interface Aluno {
    
    id: number;
    nome: string;
    email?: string;
    ativo: boolean;
}

type Turma = "1TADS" | "2TADS" | "3TADS";

function matricular(aluno: Aluno, turma: Turma): void {
    console.log(`Aluno ${aluno.nome} matriculado com sucesso na turma ${turma}.`);
}

const novoAluno: Aluno = { id: 1, nome: "Carlos", ativo: true };
matricular(novoAluno, "2TADS");