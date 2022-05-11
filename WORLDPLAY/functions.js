export function words_20plus_characters(palavras) {

    let lista_palavras = []
    for (let palavra of palavras) {
        if (palavra.length > 20) {

            
            lista_palavras.push(palavra)
        }
    }
    return lista_palavras
}

export function has_e(palavra) {

    for (let letra of palavra) {
        if (letra === "e") {
            return true
        }
    }
    return false
}

export function has_letter(palavra, letter) {

    for (let letra of palavra) {
        if (letra === letter) {
            return true
        }
    }
    return false
}

export function avoids(palavra, forbidden_letters) {

    for (let letter of forbidden_letters) {
        if (has_letter(palavra, letter)) {
            return false
        }
    }
    return true
}
export function uses_only(palavra, letras_obrigatorias) {
    for (let letter of palavra) {
        if (!has_letter(letras_obrigatorias, letter)) {
            return false
        }
    }
    return true
}
export function uses_all(palavra, mandatory_characters) {
    for (let letter of mandatory_characters) {
        if (avoids(palavra, letter)) {
            return false
        }
    }
    return true
}
export function is_abecedarian(palavra) {
    palavra = palavra.toLowerCase()

    for (let i = 0; i < palavra.length - 1; i++) {
        if (palavra[i] > palavra[i+1]) {
            return false
        }
    }
    return true
}