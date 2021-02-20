import React from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';


function Home({navigation}) { 
    function tarefas() {
        navigation.navigate("Tarefas");
    }
   
    return (
        <View>
          

        <Text style={styles.titulo}>
            VL Moto Peças 
        </Text>
        <Image  style={styles.image}  source={require('../../../assets/mulher.png')} />
       
        <TouchableOpacity style={styles.btn} onPress={tarefas} >
             <Text style={styles.texto}> <FontAwesome5 name="tasks" size={24} color="white" /> Tarefas</Text>
        </TouchableOpacity>

        </View>
    )
}

export default Home;
