import { input,print } from "../io_utils.js";

function main(){
    const notas = input('Digite o valor das notas do aluno: ').split(' ')
    const notaA = Number(notas[0])
    const notaB = Number(notas[1])

    const resultado = aprovado(notaA,notaB)
    print(`Situacao do aluno referido:${resultado}`)
}
function aprovado(n1,n2){
    const media = (n1 + n2)/2
    let nota = 0
    let situacao_aluno = ""
    if(media>7){
        situacao_aluno = "Aprovado"
    }
    else if(media<7 && media>=5){
        nota = media
        situacao_aluno = "Aprovado"
    }
    else if(media<=5){
        nota = media
        situacao_aluno = "Reprovado"
    }
    return nota,situacao_aluno
}   
main()