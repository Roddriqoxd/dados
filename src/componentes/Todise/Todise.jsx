import {StatusBar} from 'expo-status-bar';
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dos from "../Dados/Dos";
import Tres from "../Dados/Tres";
import Cuatro from "../Dados/Cuatro";
import Cinco from "../Dados/Cinco";
import Seis from "../Dados/Seis";
import Siete from "../Dados/Siete";
import Ocho from '../Dados/Ocho';
import Diez from "../Dados/Diez";
import Once from "../Dados/Once";
import Doce from "../Dados/Doce";
import Nueve from "../Dados/Nueve";
import {numeroAleatorio2al12} from "../../../feacture/conteo/contar";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import * as Animatable from "react-native-animatable";
import {Button} from "react-native-paper";
import Editar from "./Editar";
import {editando, menuCloseTodise} from "../../../feacture/conteo/eventos";
import Svg, {Ellipse, Path, Rect} from "react-native-svg"

function Todise() {

    let menu = 'block';
    let dados = 'block';
    const dispatch = useAppDispatch()
    const viewRef = useRef()
    const counter = useAppSelector(state => state.counter.value)
    const retos = useAppSelector(state => state.retos.retos)
    const eventoEditar = useAppSelector(state => state.eventos.editar)
    const eventoMenu = useAppSelector(state => state.eventos.menuTodise)

    function cambiar() {
        dispatch(menuCloseTodise())
        dispatch(numeroAleatorio2al12());
        viewRef.current.zoomInUp();

    }

    if (eventoEditar === true) {
        dados = 'none';
        menu = 'none';
    } else if (eventoEditar === false && eventoMenu === true) {
        menu = 'block';
    } else if (eventoMenu === false && eventoEditar === false) {
        dados = 'block'
        menu = 'none';
    }

    function editar() {
        dispatch(editando())
        dispatch(menuCloseTodise())
    }

    return (
        <View style={styles.container}>
            <View display={dados}>
                <TouchableOpacity style={styles.button} onPress={() => cambiar()}>
                    <Dos/>
                    <Tres/>
                    <Cuatro/>
                    <Cinco/>
                    <Seis/>
                    <Siete/>
                    <Ocho/>
                    <Nueve/>
                    <Diez/>
                    <Once/>
                    <Doce/>
                </TouchableOpacity>
                <StatusBar style="auto"/>
                <Animatable.View ref={viewRef} style={styles.containers}>
                    <Text style={{fontSize: 30}}>{retos[counter]}</Text>
                </Animatable.View>
            </View>


            <View display={menu} marginTop={-150}>

                <Svg
                    width={200}
                    height={200}
                    viewBox="0 0 3263 3000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Rect x={1366} y={1000} width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={2111} cy={1748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1621} cy={1251.5} rx={81} ry={77.5} fill="#000" />
                    <Path
                        d="M1947 1500.5c0 42.8-36.26 77.5-81 77.5s-81-34.7-81-77.5 36.26-77.5 81-77.5 81 34.7 81 77.5z"
                        fill="#000"
                    />
                    <Rect x={1040} width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={1785} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1295} cy={251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1785} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1295} cy={748.5} rx={81} ry={77.5} fill="#000" />
                    <Rect x={121} y={2000} width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={866} cy={2748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={376} cy={2251.5} rx={81} ry={77.5} fill="#000" />
                    <Rect x={2263} y={2000} width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={3008} cy={2251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={2518} cy={2251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={3008} cy={2748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={2518} cy={2748.5} rx={81} ry={77.5} fill="#000" />
                    <Path
                        d="M2845 2748.5c0 42.8-36.26 77.5-81 77.5s-81-34.7-81-77.5 36.26-77.5 81-77.5 81 34.7 81 77.5zM2845 2251.5c0 42.8-36.26 77.5-81 77.5s-81-34.7-81-77.5 36.26-77.5 81-77.5 81 34.7 81 77.5z"
                        fill="#000"
                    />
                    <Rect x={1192} y={2000} width={1000} height={1000} rx={72} fill="#fff" />
                    <Ellipse cx={1937} cy={2251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1447} cy={2251.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1937} cy={2748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1447} cy={2748.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1937} cy={2500.5} rx={81} ry={77.5} fill="#000" />
                    <Ellipse cx={1447} cy={2500.5} rx={81} ry={77.5} fill="#000" />
                    <Rect
                        x={500}
                        y={634}
                        width={1000}
                        height={1000}
                        rx={72}
                        transform="rotate(30 500 634)"
                        fill="#fff"
                    />
                    <Path
                        d="M781.076 1373.16c-29.988 51.94-98.306 68.64-152.592 37.3-54.286-31.34-73.984-98.86-43.996-150.8 29.988-51.94 98.305-68.64 152.592-37.29 54.286 31.34 73.983 98.85 43.996 150.79z"
                        fill="#FF1616"
                    />
                </Svg>

                <View marginTop={20}>
                    <Button
                        style={styles.boton}
                        onPress={() => cambiar()}
                        labelStyle={styles.text}
                    >
                        play
                    </Button>

                    <Button
                        style={styles.boton}
                        onPress={() => editar()}
                        labelStyle={styles.text}
                    >
                        Editar
                    </Button>
                </View>



            </View>

            <Editar/>
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
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    boton: {
        marginVertical: 5,
        width: 200,
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000000',
        fontSize: 20,
    },
    containers: {
        alignItems: 'center',
        marginTop: 50
    },
});

export default Todise