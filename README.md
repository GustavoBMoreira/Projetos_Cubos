# API REST para Sistema Bancário

Este projeto consiste na implementação de uma API REST para um sistema bancário básico, desenvolvido como parte do Desafio do Módulo 02 do curso oferecido pela Cubos Academy. A API permite realizar várias operações relacionadas a contas bancárias, como listar, criar, atualizar e excluir contas, depositar dinheiro, transferir dinheiro entre contas, sacar dinheiro, verificar saldo e imprimir extrato com histórico de transações.

## Funcionalidades Principais

A API oferece as seguintes funcionalidades principais:

- **Listar Contas:** Retorna uma lista de todas as contas bancárias cadastradas no sistema.
  
- **Criar Conta:** Permite criar uma nova conta bancária com os dados fornecidos.
  
- **Atualizar Conta:** Permite atualizar os dados de uma conta existente, como nome do titular ou senha, por exemplo.
  
- **Excluir Conta:** Remove uma conta do sistema, desde que o saldo seja zero.

- **Depositar Dinheiro:** Adiciona uma quantia especificada ao saldo de uma conta específica.
  
- **Transferência de Dinheiro:** Transfere uma quantia de uma conta de origem para uma conta de destino.
  
- **Sacar Dinheiro:** Retira uma quantia especificada do saldo de uma conta específica.
  
- **Verificar Saldo:** Retorna o saldo atual de uma conta específica.
  
- **Imprimir Extrato:** Gera um extrato contendo o histórico completo de transações (saques, depósitos e transferências) de uma conta específica.

## Intermediários e Verificações

A API inclui intermediários que garantem a segurança e a integridade dos dados. Estas verificações incluem:

- **Autenticação de Usuário:** Verifica se o usuário fornecido na requisição está autenticado e autorizado a realizar a operação.
  
- **Validação de Senha:** Verifica se a senha fornecida pelo usuário está correta antes de permitir o acesso à conta.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento utilizada para criar a API.
  
- **Express:** Framework web utilizado para criar as rotas e controladores da API.
  
- **Insomnia:** Ferramenta utilizada para testar e debugar APIs REST.
  
- **Nodemon:** Utilizado para reiniciar automaticamente o servidor Node.js durante o desenvolvimento.

## Como Utilizar

Para utilizar a API, basta seguir a documentação fornecida nos endpoints disponíveis. Durante o desenvolvimento, utilize o Insomnia ou ferramentas similares para testar e debugar as requisições. O banco de dados é resetado a cada execução do servidor, garantindo um estado limpo para testes.

## Contribuição

Se você encontrar bugs, deseja propor melhorias ou adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!
