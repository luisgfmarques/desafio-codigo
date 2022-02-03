// Solução 1, Utilizando todos os Recursos do JS rs.
function Tipo1(array) {
    /* ordena o array em ordem crescente, fazendo o teste: A-B < 0 . ordena como [A,B], sé A-B> 0. ordena [B,A].
    Se for igual mantém os algarismo nos lugares e ordena eles com relação ao restante do array.
    */
    array.sort((a, b) => a - b)
    // Remove os elementos duplicados.
    return array.filter((elemento, pos) => array.indexOf(elemento) == pos)
    /* A função filter faz uma varredura no vetor, adicionando os elemento no vetor de retorno somente se passar no caso de teste da arrow function.
    o indexOF retorna a posição do primeiro elemento do array. ocorre a verificação se a posição retornada pelo indexOf e = a pos do elemento que está sendo analisado.
    Retornando positivo somente se o elemento for a primeira aparição no vetor. e evitando duplicatas na resposta.
    */
}
// ----------------------------------------
// Solução 2, utilizando uma abordagem com ordenação por merge sort e analise valor por valor.
// Implementação do merge e mergesort para JS
function merge(A1, A2) {
    let arr = []
    while (A1.length && A2.length) {
        if (A1[0] < A2[0]) {
            arr.push(A1.shift())
        }
        else {
            arr.push(A2.shift())
        }
    }
    while (A1.length) {
        arr.push(A1.shift())
    }
    while (A2.length) {
        arr.push(A2.shift())
    }
    return arr
}
function mergesort(entrada) {
    if (entrada.length < 2) return entrada
    let meio = Math.floor(entrada.length / 2)
    const A_l = entrada.splice(0, meio)
    return merge(mergesort(A_l), mergesort(entrada))
}
// Função para remover os valores duplicados do array,retornando um novo array sem itens duplicados.
function remove_iguais(array) {
    const tam = array.length
    var ari = array
    var temp = array[0];
    var arr = [array[0]]
    for (let i = 1; i < tam; i++) {
        if (ari[i] != temp) {
            arr.push(ari[i])
            temp = ari[i]
        }
    }
    return arr
}
// Funcao Tipo 2 , efetuando a ordenação por merge sorte e após isso realizando a remoção dos duplicados
function Tipo2(x) {
    x = mergesort(x);
    return remove_iguais(x)
}
/*
    Para a solução de Validar o Sudoku tentei realizar uma verificação simples, verificando inicialmente as linhas.
    Posterior as colunas, e por ultimo as mini/sub tabelas. Utilizando a mesma estrategia da solução Tipo 1 para verificar duplicidade
    nos números, excluindo o carácter "."
*/
function ValidaSudoku(array) {
    // conferencia inicial das linhas.
    var arraytemp = []
    var verifica = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (array[i].indexOf(array[i][j]) != j && array[i][j] != ".") {
                return false
            }
        }
    }
    // conferencia das colunas
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            arraytemp.push(array[j][i])
            if (arraytemp.indexOf(array[j][i]) != j && array[j][i] != ".") {
                return false
            }
        }
        arraytemp = []
    }
    // conferencia da mini tabela.
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            for (let k = 0; k < 3; k++) {
                arraytemp.push(array[j + k][i])
                arraytemp.push(array[j + k][i + 1])
                arraytemp.push(array[j + k][i + 2])
            }
            if (arraytemp.some((elemento, pos) => (arraytemp.indexOf(elemento) != pos) && elemento != ".")) {
                return false
            }
            arraytemp = []
            verifica = []
        }
    }
    return true
}
module.exports = { Tipo1, Tipo2, ValidaSudoku }