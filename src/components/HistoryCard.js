import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function HistoryCard({ data }) {
    return(
        <View style={styles.container}>
                <View style={styles.item}>
                    <Icon name='arrow-down' size={23} color="#1ed6ff" />
                    <Text>70mb</Text>
                </View>

                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        height: '40%',
        justifyContent: 'space-around',
        borderRadius: 8,
        alignSelf: 'center'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})