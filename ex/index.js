const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto} //operador spread - 
                       //ele vai espalhar todos os atributos do obj recebido no novo objeto {...obj }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'