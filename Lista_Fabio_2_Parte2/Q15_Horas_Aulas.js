import { input,print } from "../io_utils.js";

function main(){
    const salario1 = Number(input("Digite o valor por hora do professor 1: "))
    const salario2 = Number(input("Digite o valor por hora do professor 2: "))
    const hora_aula1 = Number(input("Informe a hora aula do professor 1: "))
    const hora_aula2 = Number(input("Informe a hora aula do professor 2: "))

    const resultado = mais_dinheiro(salario1,salario2,hora_aula1,hora_aula2)

    print(resultado)
}
function mais_dinheiro(s1,s2,h1,h2){
    const hora_aula1 = s1 * h1
    const hora_aula2 = s2 * h2
    let maior = ""

    if(hora_aula1 > hora_aula2)maior = "O salario do profesor 1 e maior"
    else if(hora_aula2>hora_aula1)maior = "O salrio do professor 2 e maior"
    else maior = "Os salarios sao iguais"
    return maior
}
main()