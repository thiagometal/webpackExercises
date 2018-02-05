export default class Pessoa { // assim que o EcmaScript deixa uma classe exportável
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}
