# 🏎️ Minimal API Fórmula 1
Uma pequena API que retorna pilotos e equipes de Formula 1.

## 🏁 Funcionalidades
- retorna todas os pilotos da base de dados
- retorna todas as equipes da base de dados
- retorna uma equipe específica com base no seu id
- retorna um piloto específico com base no seu id

## 📡 Endpoints
- `/teams` - retorna todas as equipes na base de dados
- `/teams/:id` - retorna uma equipe com base no id
- `/drivers` - retorna todos os pilotos na base de dados
- `/drivers/:id` - retona um piloto com base no id

## 🛠️ Como Executar o Projeto
- clone o repositório:
    - `git clone link-repositorio.git`
- instale as dependências
    - `npm install`
- inicie o servidor
    - `npm run start:dev`
- acesse a api na porta 3333 conforme os endpoints definidos:
    - `http://localhost:3333/teams/3`