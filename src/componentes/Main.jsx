import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dados from "./Dados";
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {useAppDispatch} from '../../redux/hooks'
import Botones from "./Botones";
import Dos from "./Dados/Dos";

function Main() {
let value = true;



function change () {
    value = !value
}

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Botones/>

                {/*<Dados name={value} />*/}
                <Dos />
                <StatusBar style="auto" />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007a59',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export  default Main