import { input,print } from "../io_utils.js";

function main(){
    const horas_trabalhadas = Number(input('Digite a quantidade de horas trabalhadas no mes: '))
    const salario_hora = Number(input('Informe seu salario por horas: '))

    const salario = salario_bruto(horas_trabalhadas,salario_hora)
    const inss = INSS(horas_trabalhadas,salario_hora)
    const fgts = FGTS(horas_trabalhadas,salario_hora)
    const ir = IR(horas_trabalhadas,salario_hora)
    const salario_liquido = salario_liquidu(horas_trabalhadas,salario_hora)

    print(`Salario Bruto: R$${salario}`)
    print(`IR: R$${ir}`)
    print(`INSS: R$${inss}`)
    print(`FGTS: R$${fgts}`)
    print(`SALARIO LIQUIDO: R$${salario_liquido}`)
}
function salario_bruto(t,m){
    return (t * m)
}
function INSS(t,m){
    const salario = salario_bruto(t,m)
    return (salario * 10)/100
}
function FGTS(t,m){
    const salario = salario_bruto(t,m)
    return (salario * 11) /100
}
function IR(t,m){
    const salario = salario_bruto(t,m)
    const taxa0 = 0
    const taxa1 = (5/100) * salario
    const taxa2 = (10/100) * salario
    const taxa3 = (20/100) * salario
    if(salario<=900){
        return taxa0
    }
    else if(salario<=1500){
        return taxa1
    }
    else if(salario<=2500){
        return taxa2
    }
    else if(salario>2500){
        return taxa3
    }
}
function salario_liquidu(t,m){
    const salario_bruto = salario_bruto(t,m)
    const ir = IR(t,m)
    const inss = INSS(t,m)
    const salario_liquido = salario_bruto - (ir + inss)
    return salario_liquido
}
main()
