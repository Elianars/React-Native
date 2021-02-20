import React from 'react';
import { 
    createAppContainer, 
    createSwitchNavigator
} from 'react-navigation';

import Login from '../screens/Login';
import Tarefas from '../screens/Tarefas';
import Home from '../screens/Home';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
  
    Home: {
        nome: "Home",
        screen: Home
        
    },

    Tarefas: {
        nome: "Tarefas",
        screen: Tarefas
        
    },

   



}



// Criar as rotas
const Navegacao = createSwitchNavigator(Rotas);

// passar para o App
export default createAppContainer(Navegacao);