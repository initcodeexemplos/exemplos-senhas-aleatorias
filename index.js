function GerarSenha(
    quantidade = 8,
    maiuscula = false,
    minuscula = false,
    caracteresEspeciais = false,
    numeros = false
) {
    let conteudo = "";
    if(maiuscula){
        conteudo += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(minuscula) {
        conteudo += "abcdefghijklmnopqrstuvwxyz"
    }
    if(caracteresEspeciais) {
        conteudo += "!@#$%¨&*()_+{}?^:>"
    }
    if(numeros) {
        conteudo += "1234567890"
    }

    let senha = '';

    for(let i = 0; i < quantidade; i++) {
        let index = Math.floor(Math.random() * conteudo.length)
        senha += conteudo[index]
    }
    
    return senha
}

const senha = GerarSenha(10, true, true, true, true)
console.log("Sua senha é: ", senha)


const senha2 = GerarSenha(10, false, true, true, true)
console.log("Sua senha é: ", senha2)