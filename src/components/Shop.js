import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopBar from './TopBar';




export default function Shop({ }) {

    const data = [
  
        { "subscription": "2000", "topup": "1000",  "available": "1250" }
      ]
      
      const minutes =[
       { "subscription": "60", "topup": "30", "available": "25" }
      ]

    return (
        <SafeAreaView style={{ backgroundColor: '#000', flex: 1, alignItems: 'center' }}>
            <TopBar />

            <Animatable.View
                animation="bounceInDown"
                duration={1500}
                style={styles.container}>

                <Text style={styles.title}>Meu pacote</Text>

                <View
                    style={styles.item}>
                    <Text>Pacote atual</Text>

                    <View style={styles.pac}>


                        <Icon name='at' size={17} color="#4F4F4F" />
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}> 3</Text>
                        <Text> gb</Text>
                        <Text> R$ 30,00</Text>
                    </View>
                    <View style={styles.pac}>


                        <Icon name='phone' size={17} color="#4F4F4F" />
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}> 30</Text>
                        <Text> min</Text>
                        <Text> R$ 3,00</Text>
                    </View>

                </View>

            </Animatable.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
        height: '80%',
        borderRadius: 8,

        marginTop: '6%',
        elevation: 3,
        shadowColor: '#000'
    },
    item: {
        backgroundColor: '#D3D3D3',
        width: '90%',
        height: '30%',
        marginTop: '3%',
        marginLeft: '5%',
        borderRadius: 10,
        elevation: 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '5%',
        marginLeft: '5%',
    },
    pac: {
        padding: '5%', 
        flexDirection: 'row', 
        alignItems: 'center',
        
        borderWidth: 1,
        width: '50%'
    }
})

//