import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from './Cards';
import Faq from './Faq';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00FFFF' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        
            <Tab.Navigator >
                <Tab.Screen name="Histórico" component={SettingsScreen} />
                <Tab.Screen name="Home" component={Card} />
                <Tab.Screen name="Settings" component={Faq} />
            </Tab.Navigator>
        
    );
}

/*export default function Navegacao() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
*/

const styles = StyleSheet.create({
    tabs: {
        fontSize: 45,
        
    }
})

//teste git