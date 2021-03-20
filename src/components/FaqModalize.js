import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function FaqModal() {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.container}>
            <Modalize
                ref={modalizeRef}
                snapPoint={290}
                modalHeight={290}
            >
                <View style={styles.contTitle}>
                    <Text style={styles.tile} > Comprar adicional</Text>
                </View>

                <View style={styles.addItens}>
                    <View style={styles.itens}>
                        <Text> AAAAAAAAAAAAAAAAAAA</Text>
                    </View>

                </View>
            </Modalize>
        </View>
    );
};
