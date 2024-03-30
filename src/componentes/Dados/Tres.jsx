import Svg, {Ellipse, Path, Rect} from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import {StyleSheet} from "react-native";
import {useAppSelector} from '../../../redux/hooks'
import {useRef} from "react";

function Tres() {

    const counter = useAppSelector(state => state.counter.value)

    const viewRef = useRef()
    let none = 'none'

    if (counter === 3) {
        none = 'block'
        viewRef.current.bounceInDown();
    }

    return (

        <Animatable.View ref={viewRef} display={none} style={styles.container}>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Path
                    d="M613 499.596c0 59.975-50.816 108.595-113.5 108.595S386 559.571 386 499.596C386 439.62 436.816 391 499.5 391S613 439.62 613 499.596z"
                    fill="#FF1616"
                />
            </Svg>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
            </Svg>

        </Animatable.View>)
}

const styles = StyleSheet.create({
    container: {
        display: "flex", gap: 30, flexDirection: "row",

    }

});
export default Tres