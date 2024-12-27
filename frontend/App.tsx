import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import QRCodeRegistration from './src/screens/QRCodeRegistration';
import QRCodeScanner from './src/screens/QRCodeScanner';
import {RootStackParamList} from './src/types';

function App(): React.JSX.Element {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
                <Stack.Navigator id={undefined}>
                    <Stack.Screen name="Home" component={Home} options={{title: 'Welcome',headerShown: true}} />
                    <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} options={{title: 'QRCode Scanner',headerShown: true}} />
                    <Stack.Screen name="QRCodeRegistration" component={QRCodeRegistration} options={{title: 'QRCode Registration',headerShown: true}} />
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
