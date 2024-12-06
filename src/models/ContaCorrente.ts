import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private limite: number = 0;

    setLimite(valor: number): void {
        this.limite = valor;
    }

    transferir(valor: number, contaDestino: Conta): void {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
        } else {
            console.log("Saldo insuficiente para transferência.");
        }
    }
}