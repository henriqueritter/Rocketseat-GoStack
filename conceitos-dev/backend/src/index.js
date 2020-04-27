const express = require('express'); //importa o conteudo do express para a constante express
const cors = require('cors'); //importa cors para retirar a segurança do backend para ser acessivel de qualquer front end
const { uuid, isUuid } = require('uuidv4'); //Importando o uuid da uuidv4 para criar um ID unico universal

const app = express(); //const app recebe o metodo EXPRESS

app.use(cors()); //para usar o cors no nosso backend, qualquer front end acessa nosso backend

app.use(express.json());  //Estamos usando a funcao express.json do EXPRESS para converter os dados em formato JSON recebidos

const projects = [];  //sera utilizada para "SIMULAR" um banco de dados.

function logRequests(request, response, next){
  const { method, url } = request;
  
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);

  next(); //(proximo middleware) essa funcao que faz com que a rota desejada seja disparada, se nao ele fica travado.
  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next){ //foi importado o isUuid do uuidv4
  const { id } = request.params;  
  
  if (!isUuid(id)){   //verifica se o id é um uuid valido
    return response.status(400).json({ error: 'Invalid Project ID'}); //se nao for retorna status de erro 400 e mensagem
  } //neste caso ele vai interromper a requisicao por nao ter um return next();

  return next(); // se nao entrou no If acima, vai para a rota
}
app.use(logRequests); //usando o midleware de log

//Toda rota que utilizar projects/:id passara primeiro pela funcao de middleware
// de validar a ID do projeto (validateProjectId), se o ID estiver satisfatorio ele irá executar a rota.
app.use('/projects/:id', validateProjectId); 

app.get('/projects', (request, response) => {
  const { title } = request.query;
  //Filtrando os dados por query params
  const results = title //verifica se o parametro title foi prenchido
          //se estiver preenchido, o metodo FILTER ira buscar nos projetos utilizando o metodo include
          //para verificar se há algum projeto com o titulo passado, se houver ele retorna TRUE
    ? projects.filter(project => project.title.includes(title))   
    : projects;  //se o title for vazio ele retorna todos os projetos

  return response.json(results);  //exibe a variavel results
});

app.post('/projects', (request,response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner }; //para colocar o ID instalamos e importamos a bilbioteca uuidv4
  
  projects.push(project); //Joga dentro do array(bd simulado) o valor do projeto criado

  return response.json(project); //exibe o projeto recem criado
});

app.put('/projects/:id', validateProjectId, (request,response) => { //utilizando o validateProjectId
  /*Para retornar o OBJETO todo com o nome do route param           //sendo declarado diretamente
  const params = request.params;
  console.log(params);*/

  /* para retornar apenas o valor do objeto */
  const { id } = request.params;
  const { title, owner } = request.body;
  //Para editar primeiro passo será buscar o projeto que tiver o ID informado como parametro

  //Vamos percorrer o ARRAY PROJECTS e para cada projeto vamos verificar se a propriedad id (project.id)
  // é igual a ID passada como parametro, assim que encontrar ele retorna a POSICAO (findIndex) do projeto
  // no array projects para efetuar a edicao
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0){ //se nao encontrou o index(se for menor que 0) 
    //retorna o codigo 400 do http e retorna um json com a mensagem projeto nao encontrado
    return response.status(400).json({ error: 'Project not found'});
  }

  //cria o objeto project com os dados passados via body request e route params
  const project = {
    id,
    title,
    owner,
  };
  //coloca o novo objeto project na posicao do antigo objeto ALTERANDO assim seus dados
  projects[projectIndex] = project;

  return response.json(project); //retorna o objeto criado
});

app.delete('/projects/:id', (request,response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);
  if (projectIndex < 0){
    return response.status(400).json({ error: 'Project not found to delete'});
  }

  /*Utilizamos a funcao SPLICE das arrays para remover o projeto da posicao passada e o numero 1
  significa quantas posicoes queremos remover, como se trata apenas de um projeto colocamos 1 */
  projects.splice(projectIndex, 1); 

  
  //retornamos uma resposta em branco com o codigo 204
  return response.status(204).send(); 
});


app.listen(3333, () => {
  console.log('Back-end Started! Esta Rodando o node!')
}); //coloca o node para escutar na porta 3333
