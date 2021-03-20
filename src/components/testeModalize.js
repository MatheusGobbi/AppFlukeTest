import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function Adicional() {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.container}>
            <Modalize
                ref={modalizeRef}
                alwaysOpen={60}

                modalHeight={290}
            >
                <View style={styles.contTitle}>
                    <Text style={styles.tile} > Comprar adicional</Text>
                </View>

                <View style={styles.addItens}>
                    <View style={styles.itens}>
                        <Text> AAAAAAAAAAAAAAAAAAA</Text>
                    </View>

                    <TouchableOpacity style={styles.btnComprar}>
                        <Text>Comprar</Text>
                    </TouchableOpacity>

                </View>
            </Modalize>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%'
    },
    contTitle: {
        height: 70 
    },
    tile: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '3%',
        paddingBottom: '5%',
        fontSize: 24,
        fontWeight: 'bold',
    },
    addItens: {
        backgroundColor: 'grey', 
        flex: 1, 
        height: 220, 
        flexDirection: 'column',
    },
    itens:{
        height: '80%',
        alignItems: 'center'
    },
    btnComprar: {
        backgroundColor: 'green', 
        height: '20%', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})