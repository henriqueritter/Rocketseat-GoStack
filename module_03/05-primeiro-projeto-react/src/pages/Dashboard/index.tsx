import React from 'react';
import { Title } from './styles';

//Usamos a funcao assim pois conseguimos passar a tipagem da funcao,
//outra forma seria function Dashboard(){}
//React.FC = React.FunctionComponent
const Dashboard: React.FC = () => {
  return <Title>Explore Repositorios no Github</Title>;
};

export default Dashboard;
