import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function HistoryCard({ data }) {
    return (
        <Animatable.View
            animation="bounceInDown"
            duration={1500}
            style={styles.container}>
            <View
                style={styles.item}>
                <Icon name='arrow-down' size={23} color="red" />
                <Text>Resumo dos gasto de tal data</Text>
            </View>


        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
        height: '20%',
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