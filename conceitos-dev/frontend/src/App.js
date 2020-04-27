import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';


import Header from './components/Header';

function App(){ //vai retornar um HTML
  const [projects, setProjects ]= useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {   //ao responder a pagina de um console log do useEffect
      setProjects(response.data); //vai preencher com a prop data do response(que sao as proprias arrays)
    });
  }, []);
  //parei aos 09:05
  async function handleAddProject(){
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('/projects', {
      title: `Projeto ${Date.now()}`,
      owner: 'Eu mesmo'
      
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>

    <Header title="Projects 1" />
    
    <ul>
      {projects.map(project => {
        return <li key={project.id}>{project.title}</li>})
      }
    </ul>

    <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
    );
}

export default App;