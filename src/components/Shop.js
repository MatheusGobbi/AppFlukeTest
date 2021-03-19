import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopBar from './TopBar';


export default function Shop({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: '#000', flex: 1, alignItems: 'center'}}>
            <TopBar/>

            <Animatable.View
                animation="bounceInDown"
                duration={1500}
                style={styles.container}>
                <View
                    style={styles.item}>
                    <Icon name='arrow-down' size={23} color="red" />
                    <Text>Aqui vai a loja virtual</Text>
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
        justifyContent: 'space-around',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: '6%',
        elevation: 3,
        shadowColor: '#000'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})