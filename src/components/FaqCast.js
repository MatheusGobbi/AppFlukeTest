import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';

import {Overlay} from 'react-native-elements';

export default function Faqcast({data, navigation}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Animatable.View
      animation="bounceInRight"
      duration={1500}
      style={styles.container}>
      <TouchableOpacity onPress={toggleOverlay}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.texto}>{data.title}</Text>

          <View style={styles.iconView}>
            <Feather name="corner-right-down" size={18} color="green" />
          </View>
        </View>
      </TouchableOpacity>

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          width: '90%',
          borderRadius: 10,
          elevation: 3,
          padding: '5%',
        }}>
        <Text style={{fontSize: 18}}>{data.content}</Text>
      </Overlay>
    </Animatable.View>
  );
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
    flexDirection: 'row',
  },
  texto: {
    width: '93%',
    fontSize: 15,
  },
  iconView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 2,
  },
});
