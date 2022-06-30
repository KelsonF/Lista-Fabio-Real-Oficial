export function eh_vogal(caracter){
    const vogais = 'aeiouAEIOU'
    for (let vogal of vogais){
        if (vogal === caracter){
            return true
        }
    }

    return false
}

export function eh_letra_minuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 97) && (codigo <= 122)
}

function substituir_espaco(string){

    let nova_frase = ''

    for(let palavra of string){

        if(palavra !== " "){
            nova_frase += palavra
        }
    }
    return nova_frase
}

function numero_por_extenso(frase){

    const numeros_por_extenso = [
        'zero', 'um', 'dois', 'três', 'quatro', 
        'cinco', 'seis', 'sete', 'oito','nove',
    ]

    let nova_frase = ''

    for(let elemento of frase){
        if(eh_numero(elemento)){
            nova_frase += numeros_por_extenso[elemento]
        }
        else{
            nova_frase += elemento
        }
    }

    return nova_frase
}

export function inverter_string(string){
    let string_invertida = ''

    for(let i = string.length-1; i >= 0; i--){
        string_invertida += string[i]
    }

    return string_invertida
}

export function eh_palindromo(string){
    const frase = string

    const frase_invertida = inverter_string(string)

    if(frase === frase_invertida){
        return true
    } else {
        return false
    }

}

export function contar_palavras(string){
    const frase = string
    
    const frase_picotada = frase.split(" ")

    return frase_picotada.length
}

export function primeiro_ultimo_nome(string){
    const nome = string.split

    const primeiro_nome = nome[0]
    const ultimo_nome = nome[nome.length - 1]

    return [primeiro_nome, ultimo_nome]
}