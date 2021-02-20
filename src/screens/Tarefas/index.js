import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
const tarefas = [

   
   
    {
        nome: "Capa de Chuva "
    },

    {
        nome: "Capacete"
    },

    {
        nome: "Trava de disco"
    },

    {
        nome: "Polaina"
    },

    {
        nome: "Suporte para celular "
    },
    
    {
        nome: "Kit Relação"
    },



]

function Tarefas({ navigation }) {
    function home() {
        navigation.navigate("Home");
    }
    return (
        <View>
          

            {
                tarefas.map((tarefa, index) => 
                    <Text key={index}>{tarefa.nome}</Text>
                )
            }

            <TouchableOpacity style={styles.btn}  onPress={home}  >
             <Text style={styles.texto}> <Entypo name="back" size={24} color="white" />  Voltar </Text>
        </TouchableOpacity>

        </View>
    )
}

export default Tarefas;