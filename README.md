# **FrontendSaas**

Projeto desenvolvido para servir como uma ferramenta de **Gestão de Clientes**, criado inicialmente para atender às necessidades da minha esposa.

Para informações mais detalhadas sobre as funcionalidades do sistema, consulte o **README do Backend**.

![Imagem do Projeto](https://github.com/user-attachments/assets/9bb70156-f1ae-4928-9b8e-ca339f757c42)

---

## **🛠 Tecnologias Utilizadas**

- **Angular CLI** (versão 18.2.13)
- **TypeScript**
- **Bootstrap / Tailwind CSS**
- **MongoDB / Firebase** *(para persistência de dados)*
- **API REST (Backend desenvolvido em Java - Spring Boot)**

---

## **📌 Funcionalidades Principais**

👉 **Gestão de Clientes**  
👉 **Cadastro e gerenciamento de serviços**  
👉 **Geração de propostas e orçamentos**  
👉 **Sistema de notificações e alertas**  
👉 **Kanban para controle de workflow**  

---

## **📅 Roadmap de Desenvolvimento**

### **🛡️ Mês 1 - Estruturação e Cadastros**
- [ ] Implementar **Login/Logout** com **JWT**
- [ ] Criar **recuperação de senha**
- [ ] Definir **níveis de permissão** *(Admin, Usuário, Cliente)*
- [ ] Revisar CRUD de **Clientes e Serviços**
- [ ] Melhorar a UI/UX dos cadastros
- [ ] Melhorar experiência no detalhamento de serviços

### **🟡 Mês 2 - Propostas e Orçamentos**
- [ ] Criar **gerador de propostas** no Frontend
- [ ] Implementar envio de propostas por **E-mail / WhatsApp**
- [ ] Criar **tabela de propostas** com status
- [ ] Criar **tela de cálculo de orçamento**
- [ ] Adicionar **regras para serviços adicionais**

### **🟠 Mês 3 - Agenda e Workflow**
- [ ] Criar **Kanban para gestão de serviços**
- [ ] Implementar **arrastar e soltar** (drag & drop)
- [ ] Criar **notificações automáticas** ao mudar status

### **🛠️ Mês 4 - Refinamento e Segurança**
- [ ] Criar **pacotes personalizados** para serviços
- [ ] Implementar **modo escuro (Dark Mode)**
- [ ] Melhorar **performance e segurança** da API

### **🟣 Mês 5 - Testes e Publicação**
- [ ] Testar **fluxo completo do sistema**
- [ ] Criar **documentação detalhada**
- [ ] Configurar **deploy automatizado**

---

## **🖥 Componentes Principais**

### **Frontend**
📌 `ClienteListarComponent` - Listagem de clientes  
📌 `ClienteCadastrarComponent` - Cadastro de clientes  
📌 `ServicoListarComponent` - Listagem de serviços  
📌 `ServicoCadastrarComponent` - Cadastro de serviços  
📌 `MenuInicialComponent` - Menu de navegação  

### **Backend - Endpoints Disponíveis**

#### **ClienteService**
🔹 `GET /clientes` → Listar clientes  
🔹 `POST /clientes` → Criar cliente  
🔹 `PUT /clientes/{id}` → Atualizar cliente  
🔹 `DELETE /clientes/{id}` → Deletar cliente  

#### **ServicoService**
🔹 `GET /servicos` → Listar serviços  
🔹 `POST /servicos` → Criar serviço  

---

## **⚙️ Como Executar o Projeto**

### **🔹 Ambiente de Desenvolvimento**

1️⃣ **Instale as dependências**  
```bash
npm install
```

2️⃣ **Inicie o servidor Angular**  
```bash
ng serve
```
👉 Acesse `http://localhost:4200/` no navegador.  

### **🔹 Construção do Projeto**
Para compilar o projeto para produção, execute:  
```bash
ng build
```
Os artefatos compilados ficarão armazenados no diretório `dist/`.  

---

## **🤖 Testes**

### **🔹 Testes Unitários**
```bash
ng test
```
Executa os testes unitários via **Karma**.  

### **🔹 Testes End-to-End**
```bash
ng e2e
```
Executa testes e2e usando a ferramenta definida no projeto.  

---

## **📚 Documentação e Ajuda**

Para mais informações sobre o **Angular CLI**, consulte a [documentação oficial](https://angular.io/cli).  

Caso precise de suporte ou queira contribuir com o projeto, entre em contato! 🚀  

---

### **📢 Status do Projeto**  
💡 **Em desenvolvimento**  

