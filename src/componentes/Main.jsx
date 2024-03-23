import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Svg, { Rect, Ellipse } from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import {useRef} from "react";

const Main = (props) => {

    let state = true

    const viewRef = useRef();

    function animar() {
        state = false
        viewRef.current.bounceInDown()
    }



    return (
    <View style={styles.container}>
        <Button title={'Animar'} onPress={animar} />

        <Animatable.View   display={state ? 'flex' : 'none'} ref={viewRef}>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff" />
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
            </Svg>
        </Animatable.View>
        <StatusBar style="auto" />
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

export  default Main