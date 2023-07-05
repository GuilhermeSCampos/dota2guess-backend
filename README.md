<h1 align="start">
  Dota2Guess API
</h1>

<h4 align="start">API feita para o funcionamento do Projeto Dota2Guess</h4>

## 🚀 Tecnologias

Tecnologias que eu utilizei para desenvolver:

- [NodeJS](https://nodejs.org/en/about)
- [Express](https://expressjs.com/pt-br/)
- [MySql](https://www.mysql.com/)

## 💻 Como Usar

**Clone o projeto em sua máquina e acesse o diretório**

```bash
 git clone git@github.com:GuilhermeSCampos/dota2guess-backend.git && cd dota2guess-backend
```

**Siga os passos abaixo**

```bash
# Instale as dependências
 npm install
```
<br/>

**Configure seu arquivo .env ou coloque os dados da sua conexão do banco de dados em src/model/connection.js.**

<br/>

**Não esqueça de remover ".example" do nome do arquivo env.**

<br/>

**Insira os comandos do script.sql no seu banco e crie as tabelas**

```bash
# Inicie o servidor com o nodemon
   npm run dev
```

## Rotas
### GET
**/status --> Recupera informações sobre o status de todas as categorias, assim como todos os heróis e sua informação**
<br/>
**/status/classic --> Recupera informações especifícamente sobre a modalidade classic**
<br/>
**/status/quote --> Recupera informações especifícamente sobre a modalidade quote**
<br/>
**/status/skill --> Recupera informações especifícamente sobre a modalidade skill**
<br/>


### PUT
**/status/classiccount --> Soma 1 na quantidade de acertos na categoria classic**
<br/>
**/status/quotecount --> Soma 1 na quantidade de acertos na categoria quote**
<br/>
**/status/skillcount  --> Soma 1 na quantidade de acertos na categoria skill**
<br/>

### POST
**/sortall --> Realiza o sorteio de heróis para todas as categorias assim como zerar a contagem de acertos das mesmas**
