export abstract class Pessoa {
    constructor(
        private nome: string,
        private idade: number
    ) { }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }
}
