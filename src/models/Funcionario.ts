import { Pessoa } from "./Pessoa";
import { IUsuario } from "../interfaces/IUsuario";

export class Funcionario extends Pessoa implements IUsuario {
    constructor(
        nome: string,
        idade: number,
        private cargo: string
    ) {
        super(nome, idade);
    }

    getCargo(): string {
        return this.cargo;
    }

    setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    autenticar(): boolean {
        // Lógica simplificada para autenticação
        return true;
    }
}