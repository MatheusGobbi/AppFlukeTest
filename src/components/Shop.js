import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopBar from './TopBar';
import Adicional from './testeModalize';



export default function Shop({ }) {

    const data = [

        { "subscription": "2000", "topup": "1000", "available": "1250" }
    ]

    const minutes = [
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

                    <Text style={{ marginLeft: '3%', marginTop: '3%', fontSize: 16, textAlign: 'center' }}>Pacote atual</Text>

                    <View style={styles.pac}>
                        <View style={styles.intView}>
                            <Icon name='at' size={17} color="#4F4F4F" />
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>  3</Text>
                            <Text> gb</Text>

                        </View>
                        <View style={styles.intView}>
                            <Icon name='phone' size={17} color="#4F4F4F" />
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>  30</Text>
                            <Text> min</Text>

                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            paddingBottom: '2%'
                        }}
                    >
                        <Text > + assinatura mensal </Text>
                        <Text>R$8,00</Text>
                    </View>

                    <View style={styles.assinatura}>

                        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: '10%' }}>
                            <Text>Valor total do pacote</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>41,00</Text>
                        </View>

                    </View>


                        
                </View>

            </Animatable.View>

            <Adicional/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
        height: '45%',
        borderRadius: 8,
        marginTop: '6%',
        elevation: 3,
        shadowColor: '#000'
    },
    item: {
        backgroundColor: '#D3D3D3',
        width: '90%',
        height: '70%',
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
        textAlign: 'center'
    },
    pac: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '30%',

    },
    intView: {
        marginLeft: '3%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10%',
        justifyContent: 'center',
        width: '30%',
        height: '80%',
    },
    assinatura: {
        height: '35%', 
        flexDirection: 'row' 
    }
})

//