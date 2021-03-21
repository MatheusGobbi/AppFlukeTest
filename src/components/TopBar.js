import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


export default function Topbar( { navigation } ) {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
            <View style={styles.item}>

                <Animatable.Text
                    animation="pulse"
                    useNativeDriver
                    iterationCount={Infinity}
                    style={styles.title}
                >
                    Dark App
                </Animatable.Text>
            <View >
                <Feather.Button
                    name='help-circle'
                    size={23}
                    color="#32CD32"
                    backgroundColor={'transparent'}
                    onPress={() => navigation.navigate('Faq')}
                />
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        elevation: 3,
        shadowColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#101010',
        
    },
    item: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',


    },
    title: {
        color: '#00FF00',
        fontWeight: 'bold',
        fontSize: 22,
        flex: 2,
        textAlign: 'center',
        paddingLeft: '15%',
        paddingBottom: '3%'
        
    }
})