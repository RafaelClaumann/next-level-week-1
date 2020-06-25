<h1>Repositório dedicado a next-level-week-#1 da RocketSeat</h1>

- O projeto desenvolvido é uma aplicação (backend, frontend) chamada Ecoleta voltada para fins ecológicos.         
- A aplicação permite a conexão entre ONGs, entidades ou empresas que coletam pilhas, baterias, oleo de cozinha<br>
  e outros residuos que devem ser descartados de maneira adequada aos cidadãos.<br>

- O backend em Node.js (typescript) é uma API RESTful que serve os dados para o frontend desenvolvido com ReactJS (typescript).<br>

<h1> Menu </h1>

[iniciando a aplicação](#inciando-aplicacao)<br>
[endpoints disponiveis](#endpoints-disponiveis)<br>
[screenshot e video](#screenshot-video)<br>


<h2>Algumas das dependencias do projeto: </h2>

  Knex.js, express, multer, axios, react-dropzone, react-leaftet

<h2>inciando-aplicacao</h2>

  - Clonar o repositório next-level-week e extrair seus arquivos em uma pasta.<br>
  - Acessar a pasta server dentro dos arquivos do diretório e executar os comandos:<br>
  <blockquote>
    npm install<br>
    npm run knex:migrate<br>
    npm run knex:seed<br>
    npm run dev<br>
  </blockquote>
  
  - Acessar a pasta web dentro dos arquivos do diretório e executar o comando:<br>
  <blockquote>
    npm install<br>
    npm start
   </blockquote>
  
 <h2>endpoints-disponiveis</h2>
 
 <p>cadastrar entidade (Multipart Form):</p>
   <blockquote>
    POST: localhost/port/points<br>
   </blockquote>
   
  <p>listar entidades (JSON):</p>
    <blockquote>
      GET: localhost/port/points<br>
    </blockquote>
  
  <p>filtrar entidades (city, uf, itens)(JSON):</p>
    <blockquote>
      GET: localhost/port/points/id<br>
    </blockquote> 
   
  <p>listar itens (JSON):</p>
   <blockquote>
    GET:  localhost/port/items<br>
  </blockquote>
  
  <p>cadastro de itens?</p>
    <blockquote>
      Os itens são cadastrados estaticamente através de seedings com o QueryBuilder Knex.js<br>
    </blockquote>
    
  
  <h2>screenshot-video</h2>
    
   <img src="https://i.imgur.com/QwO4tFP.png" width="480" height="300" />
   
   ![Alt cadastro](https://media.giphy.com/media/IdgqyKgpIqrpXyP2Eq/giphy.gif "cadastro")


