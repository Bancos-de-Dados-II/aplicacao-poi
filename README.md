# Aplicação POI

Este é um projeto didático desenvolvido em sala de aula para praticar a criação de uma API REST com Node.js, Express, Sequelize e PostgreSQL, além de um frontend simples com mapa interativo usando Leaflet.

A proposta do projeto é registrar pontos de interesse (POIs) com nome, descrição, tipo e localização geográfica, permitindo listar e cadastrar registros por meio da API.

## Visão geral

- Backend em Node.js + Express
- Banco de dados PostgreSQL
- ORM Sequelize
- Frontend em HTML/JavaScript com mapa Leaflet
- API pública implantada no Render

## Aplicação implantada

O back end da aplicação está disponível em:

- https://aplicacao-poi.onrender.com

Essa API expõe o recurso `pois` com as rotas:

- GET /pois
- POST /pois

Essas rotas permitem:

- consultar todos os pontos de interesse cadastrados
- cadastrar um novo ponto de interesse

## Estrutura do projeto

- `back-end/`: servidor API e integração com o banco
- `front-end/`: página com mapa e formulário
- `README.md`: documentação do projeto

## Pré-requisitos

Antes de rodar localmente, você precisa ter instalado:

- Node.js 18+
- npm
- PostgreSQL com PostGIS

## Configuração do ambiente

1. Acesse a pasta `back-end`:

   ```bash
   cd back-end
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` dentro de `back-end` com as variáveis do banco e da porta da API, por exemplo:

   ```env
   API_PORT=3000
   PG_DATABASE=nome_do_banco
   PG_USER=usuario
   PG_PASSWORD=senha
   PG_HOST=localhost
   ```

4. Certifique-se de que o PostgreSQL esteja rodando, que o banco informado exista e que a extensão do PostGIS esteja criada.

## Como rodar localmente

Na pasta `back-end`, execute:

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Endpoints da API

### GET /pois

Retorna todos os POIs cadastrados.

Exemplo:

```bash
curl http://localhost:3000/pois
```

### POST /pois

Cria um novo ponto de interesse.

Exemplo de payload:

```json
{
  "nome": "Escola Municipal",
  "descricao": "Local de ensino",
  "tipo": "Educação",
  "localizacao": {
    "type": "Point",
    "coordinates": [-6.8863, -38.5559]
  }
}
```

```bash
curl -X POST http://localhost:3000/pois \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Escola Municipal",
    "descricao": "Local de ensino",
    "tipo": "Educação",
    "localizacao": {
      "type": "Point",
      "coordinates": [-6.8863, -38.5559]
    }
  }'
```

## Frontend

O arquivo `front-end/index.html` contém uma interface simples com mapa da região e formulário para inserir informações sobre pontos de interesse.

Para abrir localmente, basta abrir o arquivo HTML no navegador ou servir a pasta com um servidor estático, por exemplo:

```bash
cd front-end
python3 -m http.server 8000
```

Depois abra:

```text
http://localhost:8000
```

## Observações

- Este é um projeto de caráter didático, desenvolvido como exercício de sala de aula.
- O objetivo principal é demonstrar o uso de API REST, banco de dados, integração frontend/backend e implantação em nuvem.
- A versão implantada no Render pode ser usada para testes e apresentação do projeto.