import * as fs from 'fs'
import { input,print } from "../io_utils.js";

function main(){
    const dados_aluno = loadfile().split('\n')
    print(dados_aluno)

    let total_de_alunos = 0
    let media_aluno
    let media_turma

    let aprovados = 0
    let reprovados = 0
    let prova_final = 0
    let reprovados_faltas = 0
    let soma_notas = 0

    let nome
    let nota1
    let nota2
    let nota3
    let presenca
    let faltas
    let aulas_totais
    let percentual_falta

    let itens
    for (let linha of dados_aluno) {
        itens = linha.split(";")
        nome = itens[0]

        nota1 = Number(itens[1])
        nota2 = Number(itens[2])
        nota3 = Number(itens[3])
        soma_notas += nota1 +nota2 + nota3

        presenca = itens[4].split("/")
        faltas = presenca[0]
        aulas_totais = presenca[1]
        percentual_falta = faltas / aulas_totais * 100
        
        media_aluno = calcular_media(nota1,nota2,nota3)

        print(`Aluno: ${nome}`)
        print(`Media Aluno: ${media_aluno.toFixed(2)}`)
        if(reprovado_falta(percentual_falta.toFixed(2))){
            print('Reprovado por falta')
            reprovados_faltas++
        }
        else{
            if(media_aluno < 4){
                print('Reprovado')
                reprovados++
            }
            else if(media_aluno < 7){
                print('Prova Final')
                prova_final++
            }
            else {
                print('Aprovado')
                aprovados++
            }
        }
    }
    media_turma = soma_notas / total_de_alunos
    print(`Media Turma: ${media_turma.toFixed(2)}`)
    print(`Aprovados: ${aprovados}`)
    print(`Reprovados por falta: ${reprovados_faltas}`)
    print(`Prova final: ${prova_final}`)
    print(`Reprovados ${reprovados}`)
}

function loadfile(){
    try{
        const data = fs.readFileSync('notas.txt', 'utf-8')
        return data
    } catch (error){
        throw(error)
    }
}
main()

function calcular_media(n1,n2,n3){
    return (n1*n1 + n2*2 + n3*3) / 6
}

function reprovado_falta(percentual_falta){
    if(percentual_falta > 0.25){
        return true
    }
    else{
        return false
    }
}