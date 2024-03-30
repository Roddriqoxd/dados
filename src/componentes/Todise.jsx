import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Botones from "./Botones";
import Dos from "./Dados/Dos";
import Tres from "./Dados/Tres";
import Cuatro from "./Dados/Cuatro";
import Cinco from "./Dados/Cinco";
import Seis from "./Dados/Seis";
import Siete from "./Dados/Siete";
import Ocho from './Dados/Ocho';
import Diez from "./Dados/Diez";
import Once from "./Dados/Once";
import Doce from "./Dados/Doce";
import Nueve from "./Dados/Nueve";
import Dados from "./Dados";

function Todise() {

    return (
            <View style={styles.container}>
                <Dos/>
                <Tres />
                <Cuatro />
                <Cinco />
                <Seis />
                <Siete />
                <Ocho />
                <Nueve />
                <Diez />
                <Once />
                <Doce />
                <StatusBar style="auto" />
                <Dados />
                <Botones/>
            </View>

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

export  default Todise