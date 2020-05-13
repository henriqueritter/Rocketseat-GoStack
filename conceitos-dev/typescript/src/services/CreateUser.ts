/**
 * User tem: name, eamil, passwd
 */
// Tipos: string, number, boolean, object

//export default function createUser(name: string, email: string, password: string){ //Forma simples

//Da forma abaixo usamos para receber tudo como uma coisa só para depois desestruturar

//interface //é como definimos o tipo de um conjunto de informações
interface TechObject{
  title: string;
  experience: number
}

interface CreateUserData{
  name?: string;   //o ? significa que o campo é opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>
}
export default function createUser({name= '', email, password }: CreateUserData){
//na linha acima estamos convertendo o JSON com name,email e pass em um objeto do tipo CreateUserData
//que é a interface que foi criada anteriormente, com isso o InteliSense irá trabalhar melhor onde no routes.js 
//poderemos visualizar os parametros esperados pela funcao createUser simplesmente com o CTRL+SPACE

  const user = {
    name, 
    email, 
    password
  }

  return user;
}