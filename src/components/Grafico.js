import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import {BarChart} from 'react-native-chart-kit';

export default function Grafico({dados, unidade}) {
  return (
    <View style={styles.grafico}>
      <BarChart
        data={dados}
        width={Dimensions.get('window').width}
        height={0.53 * Dimensions.get('window').width}
        yAxisLabel={unidade}
        fromZero
        chartConfig={{
          backgroundColor: 'blue',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: 'black',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        verticalLabelRotation={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grafico: {
    padding: 20,
  },
});
