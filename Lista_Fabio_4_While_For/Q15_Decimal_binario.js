import { input,print } from "../io_utils.js";

function main(){
    let numero = Number(input("Numero: "));
    let binario = ''
    let hexadecimal = ''
    
    while(numero > 0){

        binario = (numero % 2).toString() + binario;
        numero = Math.trunc(numero / 2);

    }
    print(`BINARIO: ${binario}`)


    while(numero > 0){

        hexadecimal = (numero % 16).toString() + hexadecimal;
        numero = Math.trunc(numero / 16)

    }
    print(`HEXADECIMAL: ${hexadecimal}`)
    
    
}
main()


