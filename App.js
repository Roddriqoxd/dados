import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Menu from "./src/componentes/Menu";
import Todise from "./src/componentes/Todise/Todise";
import {store} from "./redux/store";
import {Provider} from 'react-redux';
import {View} from "react-native";

// Importar tus componentes de pantalla

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: 'black',
        text: 'white'
    },
};

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                    />
                    <Stack.Screen
                        name="Todise"
                        component={Todise}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
