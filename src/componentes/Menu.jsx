import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from "../../redux/hooks";
import {reset} from "../../feacture/conteo/contar";
import {Button} from 'react-native-paper';
import {editEnd, menuOpenTodise} from "../../feacture/conteo/eventos";

const Menu = ({ navigation }) => {

    const dispatch = useAppDispatch();

    function todiseEntrar() {
        dispatch(reset());
        dispatch(menuOpenTodise())
        dispatch(editEnd())
        navigation.navigate('Todise');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}


            >Juegos de Chichería</Text>
            <View style={styles.botones}>
                <Button
                    style={styles.boton}
                    labelStyle = {styles.text}
                    onPress={() => todiseEntrar()}
                >
                    Todise malditos
                </Button>

                <Button
                    style={styles.boton}
                    labelStyle = {styles.text}
                    onPress={() => todiseEntrar()}
                >
                    TODISE
                </Button>

                <Button
                    style={styles.boton}
                    labelStyle = {styles.text}
                    onPress={() => todiseEntrar()}
                >
                    Tortugas
                </Button>
            </View>
            <Text>Version Beta 1.2</Text>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e3e3e3'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    botones: {

    },
    boton: {
        marginVertical: 10,
        width: 200,
        borderColor: '#007a59',
        borderWidth: 2,
        backgroundColor: '#007a59'
    },
    text: {
        color: '#ffff'
    }
});

export  default Menu