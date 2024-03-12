function inverteString(str) {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}
