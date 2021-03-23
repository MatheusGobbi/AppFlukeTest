import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Feather from 'react-native-vector-icons/Feather';
import {showMessage} from 'react-native-flash-message';

export default function ModalAdicional({fnCompraAdicional}) {
  const modalizeRef = useRef(null);
  const [carregando, setCarregando] = useState(false);

  const [contadorData, setContadorData] = useState(0.0);
  const [totalData, setTotalData] = useState(0);
  const [contadorMin, setContadorMin] = useState(0);
  const [totalMin, setTotalMin] = useState(0);
  const [total, setTotal] = useState(0);

  //Funções de manipulação de valores, gigas e minutos
  const incrementData = useCallback(() => {
    if (contadorData < 10) {
      setContadorData(contadorData + 0.5);
      setTotal(total + 5);
      setTotalData(totalData + 5);
    }
  }, [contadorData, total, totalData]);

  const decrementData = useCallback(() => {
    if (contadorData > 0) {
      setContadorData(contadorData - 0.5);
      setTotal(total - 5);
      setTotalData(totalData - 5);
    }
  }, [contadorData, total, totalData]);

  const incrementMin = useCallback(() => {
    if (contadorMin < 600) {
      setContadorMin(contadorMin + 30);
      setTotal(total + 3);
      setTotalMin(totalMin + 3);
    }
  }, [totalMin, contadorMin, total]);

  const decrementMin = useCallback(() => {
    if (contadorMin > 0) {
      setContadorMin(contadorMin - 30);
      setTotal(total - 3);
      setTotalMin(totalMin - 3);
    }
  }, [totalMin, contadorMin, total]);

  return (
    <View style={styles.container}>
      <Modalize ref={modalizeRef} alwaysOpen={60} modalHeight={290}>
        <View style={styles.contTitle}>
          <Text style={styles.tile}> Comprar adicional</Text>
        </View>

        <View style={styles.addItens}>
          <View style={styles.itens}>
            <View style={styles.leftmenu}>
              <View style={styles.leftmenuline}>
                <Feather
                  style={styles.iconPacoteData}
                  name="at-sign"
                  size={23}
                  color="#696969"
                  backgroundColor={'transparent'}
                />

                <View style={{paddingTop: '5%'}}>
                  <Text> gigas</Text>
                  <Text> R${totalData},00</Text>
                </View>
              </View>

              <View style={styles.leftmenuline}>
                <Feather
                  style={styles.iconPacotePhone}
                  name="phone-call"
                  size={23}
                  color="#696969"
                  backgroundColor={'transparent'}
                />

                <View>
                  <Text> minutos</Text>
                  <Text> R${totalMin},00</Text>
                </View>
              </View>
            </View>

            <View style={styles.rightmenu}>
              <View style={{flex: 1}}>
                <Feather.Button
                  style={styles.txtItens}
                  name="minus-circle"
                  size={23}
                  color="#808080"
                  backgroundColor={'transparent'}
                  onPress={decrementData}
                />
                <Feather.Button
                  style={styles.txtItens}
                  name="minus-circle"
                  size={23}
                  color="#808080"
                  backgroundColor={'transparent'}
                  onPress={decrementMin}
                />
              </View>

              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.txtrightmenu}> {contadorData}</Text>
                <Text style={styles.txtrightmenu}> {contadorMin}</Text>
              </View>

              <View style={{flex: 1}}>
                <Feather.Button
                  style={styles.txtItens}
                  name="plus-circle"
                  size={23}
                  color="#00FF00"
                  backgroundColor={'transparent'}
                  onPress={incrementData}
                />
                <Feather.Button
                  style={styles.txtItens}
                  name="plus-circle"
                  size={23}
                  color="#00FF00"
                  backgroundColor={'transparent'}
                  onPress={incrementMin}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottommenu}>
            <Text> Valor total</Text>
            <Text style={{fontSize: 22}}> R${total},00</Text>
          </View>

          <TouchableOpacity
            style={styles.btnComprar}
            onPress={() => {
              setCarregando(true);
              fnCompraAdicional(contadorData * 1000, contadorMin)
                .catch(() => {
                  showMessage({
                    type: 'danger',
                    message: 'Não conseguimos realizar a compra :(',
                  });
                })
                .finally(() => {
                  setContadorData(0);
                  setContadorMin(0);
                  setTotalMin(0);
                  setTotalData(0);
                  setTotal(0);
                  setCarregando(false);
                  showMessage({
                    type: 'success',
                    message: 'Compra realizada com sucesso!',
                  });
                });
            }}
            disabled={carregando}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 12}}>
              Comprar
            </Text>
            {carregando && (
              <View>
                <ActivityIndicator size="small" color="#0000ff" />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
  contTitle: {
    height: 70,
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
    backgroundColor: '#D3D3D3',
    flex: 1,
    height: 220,
    flexDirection: 'column',
    borderRadius: 8,
    width: '95%',
    marginLeft: '2.5%',
  },
  itens: {
    height: '55%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnComprar: {
    backgroundColor: '#00FF00',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  txtItens: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '30%',
    paddingTop: '25%',
  },
  rightmenu: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottommenu: {
    flex: 1,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtrightmenu: {
    fontSize: 25,
    paddingTop: '20%',
    paddingRight: '10%',
  },
  leftmenu: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  leftmenuline: {
    flex: 1,
    flexDirection: 'row',
  },
  iconPacotePhone: {
    paddingLeft: '10%',
    paddingRight: '5%',
    paddingTop: '2%',
  },
  iconPacoteData: {
    paddingLeft: '10%',
    paddingRight: '5%',
    paddingTop: '8%',
  },
});
