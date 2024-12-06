# Banking System - TypeScript OO  

Este projeto é uma aplicação console desenvolvida em TypeScript que simula operações bancárias, como depósito, saque, transferência e cálculo de saldo. O foco principal é exercitar conceitos de **orientação a objetos (OO)**, como **abstração**, **encapsulamento**, **herança** e **interfaces**, em um ambiente prático.  

---

## 🛠️ Funcionalidades  
- **Criação de Funcionários:** Gerentes e atendentes com atributos e métodos específicos.  
- **Criação de Clientes:** Permite associar múltiplos endereços e realizar operações em contas bancárias.  
- **Operações Bancárias:**  
  - Depósito e saque com validação de saldo.  
  - Transferências entre contas correntes e poupanças.  
  - Cálculo de saldo, considerando créditos, débitos e limites.  
- **Listagem de Endereços:** Exibição de todos os endereços associados a um cliente.  

---

## 🧩 Estrutura do Projeto  
```plaintext
src/
├── interfaces/      # Interfaces do projeto
│   └── IUsuario.ts  # Interface para autenticação
├── models/          # Classes abstratas e concretas
│   ├── Pessoa.ts
│   ├── Cliente.ts
│   ├── Funcionario.ts
│   ├── Conta.ts
│   ├── ContaCorrente.ts
│   └── ContaPoupanca.ts
├── main.ts          # Arquivo principal com cenários de teste
```

## 🚀 Como Executar
### Pré-requisitos
- **Node.js:** Certifique-se de que o Node.js está instalado na sua máquina.
- **npm:** Gerenciador de pacotes Node.js.
### Passos para Executar
1. Clone o repositório:
``` bash
git clone <url-do-repositório>
cd <nome-do-repositório>
```
2. Instale as dependências do projeto:

```bash
npm install
```

3. Compile o código TypeScript para JavaScript. Isso criará a pasta `dist`, onde os arquivos JavaScript gerados serão armazenados:


```bash
npx tsc
```

4. Execute o arquivo principal a partir da pasta `dist`:


```bash
node dist/main.js
```

## 💡 Cenários de Teste Implementados

- **Aplicação 1**: Criação de Funcionários  
  Criação de um gerente e um atendente, exibindo seus cargos.

- **Aplicação 2**: Gerenciamento de Endereços  
  Criação de um cliente com três endereços e exibição dos mesmos.

- **Aplicação 3**: Operações em Conta Corrente  
  Depósitos, saque e exibição de saldo atualizado.

- **Aplicação 4**: Transferências entre Contas  
  Transferência entre conta corrente e poupança, com exibição dos saldos finais.

- **Aplicação 5**: Teste de Limites  
  Validação de transferências com limite de saldo.

---

## 🛡️ Tecnologias Utilizadas

- **TypeScript**: Para implementar conceitos de orientação a objetos.
- **Node.js**: Ambiente de execução para o código compilado.
- **npm**: Gerenciamento de pacotes.

---

## 📜 Licença

Este projeto está sob a licença MIT.
