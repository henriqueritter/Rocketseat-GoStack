import {Request, Response} from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response){

  const user = createUser({
    email: 'henrique@henri.com',
    password: '12345',
    techs: [
      'Test',
      {experience: 10, title: 'Node'},
      'pode ser fora de ordem',
      {title: 'Mudei ordem', experience: 4}
    ]
  });

  return response.json({ message: 'Hello World' });
}