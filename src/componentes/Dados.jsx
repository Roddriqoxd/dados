import {StyleSheet, Text, View} from "react-native";
import {useAppSelector} from '../../redux/hooks'
import {useRef} from "react";


function Dados(props) {

    const counter = useAppSelector(state => state.counter.value)

    const viewRef = useRef()
    let retos = ''
    let counters = 99


    if (counter) {
        setTimeout(() => {
            counters = counter
            retos = reto[counter]
        })

    }


    const reto = [
        '',
        '',
        'Hermanos',
        'Todos o nadie',
        'Choque',
        'Obligas',
        'Cultura chupistica',
        'Derecha',
        'Pulgar',
        'Izquierda',
        'Mano arriba',
        'Solo',
        'Por él o por ella'
    ]

    return (

        <View style={{padding: 20}}>

            <Text style={{fontSize: 20}}>{reto[counter]}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    hidden: {

        display: 'none'
    },
    show: {
        display: 'block'
    },
    container: {
        display: "flex",
        gap: 20,
        flexDirection: "row",

    }

});
export default Dados