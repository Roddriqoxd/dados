import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Menu from "./src/componentes/Menu";
import Todise from "./src/componentes/Todise";
import {store} from "./redux/store";
import {Provider} from 'react-redux';

// Importar tus componentes de pantalla

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{title: 'Menu'}}
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
