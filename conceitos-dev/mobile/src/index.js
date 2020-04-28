import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function (){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      //console.log(response.data); //vai aparecer no terminal que esta executando o react-native start
      setProjects(response.data);
    })
  }, [])

  async function handlerAddProject() {
    const response = await api.post('/projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Henrique Ritter'
    });
    const project = response.data;
    setProjects([...projects,project]);
  }

  return (
  <>
  <StatusBar barStyle="light-content" backgroundColor="#7159c1"  />
    <SafeAreaView style={styles.container}>
    <FlatList 
      
      data={projects} //precisa ser um array obrigatoriamente
      keyExtractor={project => project.id} //vai passar por cada item da array projects 
                            //e vai retornar o project.ID
      renderItem={({ item }) => (  //item representa CADA um dos projetos
      //renderItem={({ item: project }) => (  //esta pegando cada item e convertendo em uma variavel chamada project(renoemar variavel na desestruração)
      //  <Text style={styles.project}>{project.title}</Text>
        <Text style={styles.project}>{item.title}</Text>
      )}
     />
    <TouchableOpacity 
      activeOpacity={0.6} 
      style={styles.button} 
      onPress={handlerAddProject}
    >
      <Text style={styles.buttonText}> Adicionar Projeto </Text>
    </TouchableOpacity>


    </SafeAreaView>
  {/* <View style={styles.container}>
    {projects.map(project => (
      <Text style={styles.project} key={project.id}>{project.title}</Text>
    ))}
    </View>*/}
  </>
  )
}

const styles = StyleSheet.create({
  container: { //nome é irrelevante
    flex: 1,
    backgroundColor: '#7159c1',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  project: {
    color: '#FFF',
    fontSize: 30,
    //fontWeight: "bold"
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});