import Svg, {Ellipse, Path, Rect} from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import {StyleSheet} from "react-native";
import {useAppSelector} from '../../../redux/hooks'
import {useRef} from "react";

function Nueve() {

    const counter = useAppSelector(state => state.counter.value)

    const viewRef = useRef()
    let none = 'none'

    if (counter === 9) {
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
                <Rect width={1000} height={1000} rx={72} fill="#fff" />
                <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000" />
                <Path
                    d="M582 500.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                    fill="#000"
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
                <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000"/>
            </Svg>

        </Animatable.View>)
}

const styles = StyleSheet.create({
    container: {
        display: "flex", gap: 30, flexDirection: "row",

    }

});
export default Nueve