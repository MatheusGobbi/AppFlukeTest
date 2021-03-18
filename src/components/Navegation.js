import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';


import Card from './Cards';
import Faq from './Faq';
import Comprar from './Comprar';
import Topbar from './TopBar';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (

        <Tab.Navigator
            initialRouteName={"Home"}

            tabBarOptions={{
                activeTintColor: "#32CD32",
                inactiveTintColor: '#fff',
                style: {backgroundColor: '#000'}
            }}

           
        >
            <Tab.Screen
                name="Histórico"
                component={Comprar}
                options={{
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ color }) => (
                        <Feather name='calendar' size={23} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Home"
                component={Card}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color }) => (
                        <Feather name='home' size={23} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Faq"
                component={Faq}
                options={{
                    tabBarLabel: 'Faq',
                    tabBarIcon: ({ color }) => (
                        <Feather name='home' size={23} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
}





const styles = StyleSheet.create({
    tabs: {
        fontSize: 45,

    }
})

