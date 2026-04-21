// 1. Primeiro programa

const nome: string = "Urtzi";
const idade: number = 20;
const curso: string = "TADS";
console.log(`Nome: ${nome}\nIdade: ${idade}\nCurso: ${curso}`);
console.log("Estou aprendendo TypeScript.\n");

// 2. Identificadores

// VÁLIDOS
let precoProduto: number = 10;
let _contador: number = 0;
let $valor: number = 5;
let usuarioAtivo: boolean = true;
let calcularMedia: any;

// INVÁLIDOS
// let 1lugar = 1;      // Inicia com número
// let nome-aluno = "";  // Contém hífen
// let var = 0;          // Palavra reservada
// let nota final = 0;   // Contém espaço
// let let! = "";        // Caractere especial não permitido

// 3. var, let e const

var global = "Sou var";
let local = "Sou let";
const constante = "Sou const";

local = "Novo valor let"; // Permitido mudar o let

// EXPLICAÇÃO DO CONST: A 'const' não permite reatribuição porque seu valor é fixo após a inicialização, garantindo que a referência na memória não mude.

// DIFERENÇA ESCOPO: 'var' tem escopo de função (pode ser acessado fora de blocos if/for).
// let tem escopo de bloco (só existe dentro das chaves {} onde foi criado).

// 4. Saída formatada

let aluno: string = "Douglas";
let n1: number = 8.0;
let n2: number = 9.0;
let media: number = (n1 + n2) / 2;
console.log(`O aluno ${aluno} teve notas ${n1} e ${n2}. Média: ${media}`);