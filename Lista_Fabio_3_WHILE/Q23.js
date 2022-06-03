//Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
//horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
//40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
//Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
//funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
//líquido do funcionário.

function main() {

    const N = ler_numeros('o número de funcionários')

    let contador = 1

    while(contador<=n_funcionarios){
        let [codigo, n_horas_trabalhas, n_dependentes] = ler_numeros('a identificação, nº de horas trabalhadas e nº de dependentes ')

        const valor_por_horas_trabalhadas = n_horas_trabalhas*12
        const valor_por_n_dependentes = n_dependentes*40

        const salario_bruto = valor_por_horas_trabalhadas + valor_por_n_dependentes
        const inss = salario_bruto * .085
        const ir = salario_bruto * .05
        const salario_liquido = salario_bruto - inss - ir

        let resumo = `========== Folha de Pagamento (${codigo}) ==========`
        resumo+=`\nSalário Bruto ......... R$${salario_bruto.toFixed(2)}`
        resumo+=`\nInss .................. - R$${inss.toFixed(2)}`
        resumo+=`\nIR .................... - R$${ir.toFixed(2)}`
        resumo+=`\nSalário líquido ....... R$${salario_liquido.toFixed(2)}`

        console.log(resumo)
        
        contador++
    }
}