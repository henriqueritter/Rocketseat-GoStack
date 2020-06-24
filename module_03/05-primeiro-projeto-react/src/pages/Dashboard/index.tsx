import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

//Usamos a funcao assim pois conseguimos passar a tipagem da funcao,
//outra forma seria function Dashboard(){}
//React.FC = React.FunctionComponent

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`/repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo(''); //para limpar o input text
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(evento) => setNewRepo(evento.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="test">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
