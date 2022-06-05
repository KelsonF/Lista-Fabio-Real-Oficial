import { input,print } from "../io_utils.js";

function main(){
    let numero_containers = Number(input('Numero Containers: '));
    let peso_containers = Number(input("Peso Containers: "));
    const peso_decolagem = 500000;
    const peso_carga = peso_dos_containers(numero_containers, peso_containers);

    let [numero_bilhete,quantidade_bagagem] = input('Numero bilhete e quantidade de bagagem: ').split(" ").map(Number);

    let numero_passageiros = 0;
    let numero_bagagem = 0;

    while(numero_bilhete !== 0){
        [numero_bilhete,quantidade_bagagem] = input('Numero do bilhete e quantidade de bagagem: ').split(' ').map(Number);


        numero_passageiros++;
        numero_bagagem += quantidade_bagagem;

    }
    
    const peso_bagagem = numero_bagagem * 10;
    const peso_passageiros = numero_passageiros * 70;
    const peso_aviao = peso_bagagem + peso_passageiros + peso_carga;
    const quantidade_gasolina = (peso_decolagem - peso_aviao) / 1.5;

    print(`Quantidade Passageiros: ${numero_passageiros}`);
    print(`Volume Bagagem: ${numero_bagagem}`);
    print(`Volume da Carga: ${peso_carga}`);
    print(`Quantidade Gasolina: ${quantidade_gasolina}`);

    if(quantidade_gasolina > 10000){
        print("Possivel de decolar");
    }
    else{
        print("Impossivel Decolar");
    }
}
main()

function peso_dos_containers(valor1, valor2){
    return valor1 * valor2;
}