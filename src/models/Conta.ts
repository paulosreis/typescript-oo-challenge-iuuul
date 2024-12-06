export abstract class Conta {
    constructor(
        private numeroConta: string,
        protected saldo: number
    ) { }

    getNumeroConta(): string {
        return this.numeroConta;
    }

    getSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
}