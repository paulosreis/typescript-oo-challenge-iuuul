import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    private enderecos: string[] = [];

    adicionarEndereco(endereco: string): void {
        this.enderecos.push(endereco);
    }

    listarEnderecos(): void {
        console.log("Endereços do cliente:");
        this.enderecos.forEach((endereco, index) => {
            console.log(`${index + 1}. ${endereco}`);
        });
    }
}