import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    calcularSaldo(): number {
        return this.getSaldo(); 
    }
}