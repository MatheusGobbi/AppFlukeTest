import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';


import Card from './Cards';
import Faq from './Faq';
import Comprar from './Comprar';


const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (

        <Tab.Navigator >
            <Tab.Screen name="Histórico" component={Comprar} />

            <Tab.Screen name="Home" component={Card}  />

            <Tab.Screen name="Settings" component={Faq} />
        </Tab.Navigator>

    );
}





const styles = StyleSheet.create({
    tabs: {
        fontSize: 45,

    }
})

