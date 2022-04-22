import { input,print } from "../io_utils.js";

function main(){
    const notas = input('Digite o valor das notas do aluno: ').split(' ')
    const notaA = Number(notas[0])
    const notaB = Number(notas[1])
    
    print(notaA,notaB)
}   
main()