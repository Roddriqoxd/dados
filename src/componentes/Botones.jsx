import {TouchableOpacity, Text, StyleSheet } from "react-native";
import {useAppDispatch} from '../../redux/hooks'
import {
    numeroAleatorio2al12,
} from "../../feacture/conteo/contar";



function Botones() {

    const dispatch = useAppDispatch()

    return (
    <TouchableOpacity style={styles.button} onPress={()=> dispatch(numeroAleatorio2al12())}>
        <Text style={styles.buttonText}>Lanzar</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export  default Botones