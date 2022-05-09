import { input,print } from "../io_utils.js";

function main(){
    const notas = input("Informe as notas do estudante: ")
    const [A,B] = notas.split(" ").map(Number)

    const resultado1 = media_aluno(A,B)
    const resultado2 = conceito(A,B)
    const resultado3 = situacao_aluno(A,B)
    
    print(`NOTAS: ${A} e ${B}`)
    print(`MEDIA: ${resultado1}`)
    print(`CONCEITO: ${resultado2}`)
    print(`SITUACAO: ${resultado3}`)
}
function media_aluno(a,b){
    const calculo_media = (a + b)/2
    return calculo_media
}
function conceito(a,b){
    const media = media_aluno(a,b)
    if(media>9 && media<=10){
        return "A"
    }
    else if(media>7.5 && media<=9){
        return "B"
    }
    else if(media>6 && media<=7.5){
        return "C"
    }
    else if(media>4 && media<=6){
        return "D"
    }
    else if(media>=0 && media<=4){
        return "E"
    }
}
function situacao_aluno(a,b){
    const c = conceito(a,b)
    if(c == "A"||c == "B"||c == "C"){
        return "APROVADO"
    }
    else if(c == "D"||c == "E"){
        return "REPROVADO"
    }
}
main()