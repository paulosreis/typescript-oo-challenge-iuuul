import { Cliente } from "./models/Cliente";
import { Funcionario } from "./models/Funcionario";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";

// Aplicação 1: Criação de Funcionários
const gerente = new Funcionario("João", 45, "Gerente");
const atendente = new Funcionario("Maria", 30, "Atendente");
console.log(`Funcionário criado: Nome: ${gerente.getNome()}, Idade: ${gerente.getIdade()}, Cargo: ${gerente.getCargo()}`);
console.log(`Funcionário criado: Nome: ${atendente.getNome()}, Idade: ${atendente.getIdade()}, Cargo: ${atendente.getCargo()}`);

// Aplicação 2: Criação de Cliente e Listagem de Endereços
const cliente1 = new Cliente("Carlos", 35);
cliente1.adicionarEndereco("Rua A, 123");
cliente1.adicionarEndereco("Rua B, 456");
cliente1.adicionarEndereco("Rua C, 789");
console.log(`Cliente criado: Nome: ${cliente1.getNome()}, Idade: ${cliente1.getIdade()}`);
console.log("Endereços do cliente:");
cliente1.listarEnderecos();

// Aplicação 3: Operações em Conta Corrente
const cliente2 = new Cliente("Ana", 28);
const contaCorrente1 = new ContaCorrente("1234-5", 0);
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.sacar(50);
console.log(`Cliente: ${cliente2.getNome()}, Idade: ${cliente2.getIdade()}`);
console.log(`Operações na Conta Corrente (Agência: 1234-5):`);
console.log(`Depósito de R$100 realizado.`);
console.log(`Depósito de R$100 realizado.`);
console.log(`Depósito de R$100 realizado.`);
console.log(`Saque de R$50 realizado.`);
console.log(`Saldo final da Conta Corrente: R$${contaCorrente1.getSaldo()}`);

// Aplicação 4: Transferências entre Contas
const cliente3 = new Cliente("Pedro", 40);
const contaCorrente2 = new ContaCorrente("6789-0", 0);
contaCorrente2.depositar(1000);

const cliente4 = new Cliente("Mariana", 33);
const contaPoupanca = new ContaPoupanca("2468-0", 0);
contaPoupanca.depositar(1000);

contaCorrente2.transferir(500, contaPoupanca);
console.log(`Cliente: ${cliente3.getNome()}, Idade: ${cliente3.getIdade()}`);
console.log(`Cliente: ${cliente4.getNome()}, Idade: ${cliente4.getIdade()}`);
console.log(`Transferência de R$500 da Conta Corrente (Agência: 6789-0) para a Conta Poupança (Agência: 2468-0) realizada.`);
console.log(`Saldo final da Conta Corrente: R$${contaCorrente2.getSaldo()}`);
console.log(`Saldo final da Conta Poupança: R$${contaPoupanca.getSaldo()}`);

// Aplicação 5: Teste de Limites
const cliente5 = new Cliente("Lucas", 29);
const contaCorrente3 = new ContaCorrente("1357-0", 0);
contaCorrente3.depositar(300);
contaCorrente3.setLimite(100);

const cliente6 = new Cliente("Fernanda", 31);
const contaCorrente4 = new ContaCorrente("8642-0", 0);
contaCorrente4.depositar(100);

contaCorrente3.transferir(1000, contaCorrente4);
console.log(`Cliente: ${cliente5.getNome()}, Idade: ${cliente5.getIdade()}`);
console.log(`Cliente: ${cliente6.getNome()}, Idade: ${cliente6.getIdade()}`);
console.log(`Tentativa de transferência de R$1000 da Conta Corrente (Agência: 1357-0) para a Conta Corrente (Agência: 8642-0).`);
console.log(`Saldo final da Conta Corrente (Lucas): R$${contaCorrente3.getSaldo()}`);
console.log(`Saldo final da Conta Corrente (Fernanda): R$${contaCorrente4.getSaldo()}`);