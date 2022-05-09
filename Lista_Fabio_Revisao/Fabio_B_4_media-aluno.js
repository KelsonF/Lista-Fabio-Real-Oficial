import { input,print } from "../io_utils.js";

function main(){
    const notas = input("Digite as notas do aluno: ")
    const [A,B] = notas.split(" ").map(Number)

    const resultado = situacao_aluno(A,B)

    print(`O aluno em questao foi ${resultado}`)
}
function situacao_aluno(a,b){
    const media = (a + b)/2
    if(media == 10){
        return "aprovado com distincao"
    }
    else if(media>=7){
        return "aprovado"
    }
    else if(media<7){
        return "reprovado"
    }
}
main()