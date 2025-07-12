# ⚽ Champions API CRUD
API que realiza operações CRUD sobre uma base de dados local de jogadores e clubes.

## 🧰 Funcionalidades
- permite exibir todos os jogadores, exibir jogadores por ID, cadastrar, deletar e atualizar jogadores
- permite exibir todos os clubes, exibir clubes por ID, cadastrar, deletar e atualizar clubes

## 📡 Endpoints
**Jogadores:**
- `GET /api/players` - exibe todos os jogadores
- `GET /api/players/:id` - exibe jogadores por ID
- `POST /api/players` - cadastra um jogador
- `DELETE /api/players/:id` - deleta um jogador
- `PATCH /api/players/:id` - atualiza um jogador

**Clubes:**
- `GET /api/clubs` - exibe todos os clubes
- `GET /api/clubs/:id` - exibe os clubes por ID
- `POST /api/clubs` - cadastra um clube
- `DELETE /api/clubs/:id` - deleta um clube

Utilize um client para testar a API com os outros métodos além do GET. Há um arquivo com as rotas configuradas prontas para uso com o Thunder Client, extensão do VSCode.

## 🎲 Formato dos dados
**Jogadores:**
```json
{
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
    }
}
```

**Clubes:**
```json
{
    "id":34,
    "name":"Sturm Graz"
}
```

## 🛠️ Como Executar o Projeto
- clone o repositório:
    - `git clone link-repositorio.git`
- instale as dependências
    - `npm install`
- inicie o servidor
    - `npm run start:dev`
- acesse a api na porta 3333 conforme os endpoints definidos:
    - `http://localhost:3333/api/players`