import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {numeroAleatorio2al12} from "../../../feacture/conteo/contar";
import {editar} from "../../../feacture/conteo/todise";
import {editEnd, menuOpenTodise} from "../../../feacture/conteo/eventos";

const Editar = () => {

    const retos = useAppSelector(state => state.retos.retos)
    const eventoEditar = useAppSelector(state => state.eventos.editar)
    const dispatch = useAppDispatch()
    let editando = 'none'

    const [dos, setDos] = useState(retos["2"]);
    const [tres, setTres] = useState(retos['3']);
    const [cuatro, setCuatro] = useState(retos["4"]);
    const [cinco, setCinco] = useState(retos["5"]);
    const [seis, setSeis] = useState(retos["6"]);
    const [siete, setSiete] = useState(retos["7"]);
    const [ocho, setOcho] = useState(retos["8"]);
    const [nueve, setNueve] = useState(retos["9"]);
    const [diez, setDiez] = useState(retos["10"]);
    const [once, setOnce] = useState(retos["11"]);
    const [doce, setDoce] = useState(retos["12"]);

    const guardarDatos = () => {
        dispatch(editar([2, dos]));
        dispatch(editar([3, tres]));
        dispatch(editar([4, cuatro]));
        dispatch(editar([5, cinco]));
        dispatch(editar([6, seis]));
        dispatch(editar([7, siete]));
        dispatch(editar([8, ocho]));
        dispatch(editar([9, nueve]));
        dispatch(editar([10, diez]));
        dispatch(editar([11, once]));
        dispatch(editar([12, doce]));
        dispatch(editEnd())
        dispatch(menuOpenTodise())

    };

    function cancelar() {
        dispatch(editEnd())
        dispatch(menuOpenTodise())
    }

    if (eventoEditar === true) {
        editando = 'block'
    } else {
        editando = 'none'
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView} display={editando}>
            <View style={styles.container}>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{2}</Text>
                    <TextInput
                        style={styles.input}
                        value={dos}
                        onChangeText={setDos}
                    />
                </View>

                <View style={styles.contenedor}>
                    <Text style={styles.text}>{3}</Text>
                    <TextInput
                        style={styles.input}
                        value={tres}
                        onChangeText={setTres}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{4}</Text>
                    <TextInput
                        style={styles.input}
                        value={cuatro}
                        onChangeText={setCuatro}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{5}</Text>
                    <TextInput
                        style={styles.input}
                        value={cinco}
                        onChangeText={setCinco}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{6}</Text>
                    <TextInput
                        style={styles.input}
                        value={seis}
                        onChangeText={setSeis}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{7}</Text>
                    <TextInput
                        style={styles.input}
                        value={siete}
                        onChangeText={setSiete}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{8}</Text>
                    <TextInput
                        style={styles.input}
                        value={ocho}
                        onChangeText={setOcho}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{9}</Text>
                    <TextInput
                        style={styles.input}
                        value={nueve}
                        onChangeText={setNueve}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{10}</Text>
                    <TextInput
                        style={styles.input}
                        value={diez}
                        onChangeText={setDiez}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{11}</Text>
                    <TextInput
                        style={styles.input}
                        value={once}
                        onChangeText={setOnce}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>{12}</Text>
                    <TextInput
                        style={styles.input}
                        value={doce}
                        onChangeText={setDoce}
                    />
                </View>
                <View style={styles.botones}>
                    <Button color={'green'} title="Guardar" onPress={guardarDatos}/>
                    <Button color={'red'} title="Cancelar" onPress={cancelar}/>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: 270,
    },
    botones: {
        display: 'flex',
        flexDirection: "row",
        gap: 30
    },
    contenedor: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    text: {
        backgroundColor: 'black',
        padding: 10,
        color: '#fff',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default Editar;
