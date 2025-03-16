# FrontendSaas

Projeto idealizado para servir de ferramenta de Gestão de clientes para minha esposa. No Readme do Backend esta mais explicado as funcionalidades até o momento.

![image](https://github.com/user-attachments/assets/9bb70156-f1ae-4928-9b8e-ca339f757c42)



Próximas Entregas

🔹 Cadastro de Usuários e Autenticação

Criar login/logout com JWT

Implementar recuperação de senha

Criar níveis de permissão (Admin, Usuário, Cliente)

🔹 Ajustes no Backend

Revisar CRUD de Clientes e Serviços

Testes unitários iniciais

🔹 Frontend - Melhorias Iniciais

Ajustes na UI dos cadastros

Melhorar experiência do detalhamento de serviços

🟡 Mês 2 - Propostas e Orçamentos

🔹 Gerador de Propostas

Criar estrutura de proposta no Frontend

Enviar proposta por e-mail e WhatsApp (API Twilio ou outra)

Criar tabela de propostas com status

🔹 Cálculo de Orçamentos

Criar tela de cálculo

Adicionar regras para serviços adicionais

Implementar validações

🔹 Notificações

Criar sistema de notificações internas

Enviar alertas por e-mail para clientes

🟠 Mês 3 - Agenda e Workflow

🔹 Implementação do Kanban

Criar movimentação entre status (Proposta, Orçamento Enviado, Produção, Concluído)

Adicionar arrastar e soltar

Enviar alertas quando um serviço mudar de status

🔹 Melhorias no Backend

Ajustar API para manipular status

Criar logs de movimentação

🔹 Fila de Processamento

Implementar RabbitMQ para envio de notificações e emails assíncronos

🔴 Mês 4 - Serviços Extras e Refinamento

🔹 Serviços Adicionais

Criar pacotes para Storymakers, Filmmakers e Assessoria

Permitir configurações personalizadas para cada serviço

🔹 Melhorias no Design

Refinar UI/UX

Adicionar Dark Mode

🔹 Segurança e Otimização

Implementar logs de auditoria

Melhorar performance das consultas ao banco

🟣 Mês 5 - Finalização e Testes

🔹 Testes Finais

Testar fluxo completo do sistema

Corrigir bugs identificados

🔹 Documentação

Criar tutorial para novos usuários

Documentar APIs e estrutura do código

🔹 Publicação

Configurar deploy automatizado

Lançamento para usuários iniciais

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.13.

Componentes principais:

ClienteListarComponent

ClienteCadastrarComponent

ServicoListarComponent

ServicoCadastrarComponent

MenuInicialComponent

The ClienteService has endpoints for managing clients:

GET /clientes: List clients (used in ClienteListarComponent and ServicoCadastrarComponent).

POST /clientes: Create a client (used in ClienteCadastrarComponent).

PUT /clientes/{id}: Update a client (used in ClienteListarComponent).

DELETE /clientes/{id}: Delete a client (used in ClienteListarComponent).


The ServicoService is for handling services:

GET /servicos: List services (used in ServicoListarComponent).

POST /servicos: Create a service (used in `ServicoCadastrarComponent

![DALL·E](https://github.com/user-attachments/assets/c57ed646-d8e2-4d30-87df-361f5bb6824a)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help!

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

