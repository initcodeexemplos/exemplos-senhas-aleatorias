function GerarSenha(
    quantidade = 8,
    maiuscula = false,
    minuscula = false,
    caracteresEspeciais = false,
    numeros = false
) {
    // Variável para armazenar os caracteres que vamos usar para formar a senha.
    let conteudo = "";

    // De acordo com os parâmetros passados, usamos determinados caracteres
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

    // Variável para armazenar a senha final
    let senha = '';

    // Com base na quantidade enviada, iteraremos de 0 até ela
    for(let i = 0; i < quantidade; i++) {
        // Math.Floor(): Arredonda o valor decimal para o número inteiro mais próximo, para baixo.
        // Math.random(): Gera um número decimal aleatório entre 0 (inclusivo) e 1
        // index recebe um número aleatório entre 0 e o tamanho de conteudo.
        let index = Math.floor(Math.random() * conteudo.length)
        // senha recebe um caracter que se encontra dentro de conteudo em uma posição específica
        senha += conteudo[index]
    }
    
    // Retorna a senha gerada
    return senha
}

const senha = GerarSenha(10, true, true, true, true)
console.log("Sua senha é: ", senha)

const senha2 = GerarSenha(10, false, true, true, true)
console.log("Sua senha é: ", senha2)