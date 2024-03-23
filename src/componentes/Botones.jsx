import {Button, Text, View} from "react-native";
import {useAppDispatch} from '../../redux/hooks'
import {decrement, decrementByAmount, increment, incrementByAmount, reset} from "../../feacture/conteo/contar";



function Botones() {

    const dispatch = useAppDispatch()

    return (

        <View style={{display: 'flex', gap: 10 }}>
            <Button title={'Incrementar'} onPress={()=> dispatch(increment())}/>
            <Button title={'Decrementar'} onPress={()=> dispatch(decrement())}/>
            <Button title={'incrementar 5'} onPress={()=> dispatch(incrementByAmount(5))}/>
            <Button title={'decrementar 5'} onPress={()=> dispatch(decrementByAmount(5))}/>
            <Button title={'borrar'} onPress={()=> dispatch(reset())}/>
        </View>
    )
}


export  default Botones