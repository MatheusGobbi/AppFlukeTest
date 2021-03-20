import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import FaqModal from './FaqModalize';



export default function Faqcast({ data }) {

    return (
        <Animatable.View
            animation="bounceInRight"
            duration={1500}
            style={styles.container}>

            <TouchableOpacity
                onPress ={ () => <FaqModal/>}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.texto}>{data.title}</Text>

                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', paddingLeft: 2 }}>
                        <Feather name='corner-right-down' size={18} color="green" />
                    </View>
                </View>

            </TouchableOpacity>


        </Animatable.View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: '5%',
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 1,
        elevation: 3,
        shadowColor: '#000',
        flexDirection: 'row'
    },
    texto: {
        width: '93%',
        fontSize: 15,
    }
})

//<Icon name='at' size={23} color="red" />