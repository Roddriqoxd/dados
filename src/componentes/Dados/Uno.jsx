import Svg, {Rect, Ellipse, Path} from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import {StyleSheet, Text, View} from "react-native";
import {useAppSelector} from '../../redux/hooks'
import {useRef} from "react";


function Dados(props) {

    const counter = useAppSelector(state => state.counter.value)

    const viewRef = useRef()
    let none = 'none'

    if (counter === 1) {
        none = 'block'
        viewRef.current.bounceInDown();

    }

    return (

        <Animatable.View ref={viewRef} display={none} >

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
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
                {...props}
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
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
            </Svg>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Path
                    d="M581 500.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                    fill="#000"
                />
            </Svg>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000"/>
            </Svg>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff" />
                <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000" />
                <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000" />
                <Path
                    d="M582 748.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5zM582 251.5c0 42.802-36.265 77.5-81 77.5s-81-34.698-81-77.5 36.265-77.5 81-77.5 81 34.698 81 77.5z"
                    fill="#000"
                />
            </Svg>

            <Svg
                width={100}
                height={100}
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={1000} height={1000} rx={72} fill="#fff"/>
                <Ellipse cx={745} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={251.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={745} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={748.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={745} cy={500.5} rx={81} ry={77.5} fill="#000"/>
                <Ellipse cx={255} cy={500.5} rx={81} ry={77.5} fill="#000"/>
            </Svg>

        </Animatable.View>

        // <View>
        //     <Text>Counter</Text>
        //     <Text>{counter}</Text>
        // </View>
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