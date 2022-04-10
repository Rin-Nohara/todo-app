import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';

const {width: dWidth} = Dimensions.get('window');

interface IProps {
    text: string,
    bgColor?: string,
    textColor?: string,
    disable?: boolean,
    pressHandle?: () => any,
    width?: number | string,
    height?: number | string,
    widthFill?: boolean,
}

/**
 * Button 在 ios 和 android 表现不一致，使用 View 模拟，统一为 ios 参数
 */
const Button: React.FC<IProps> = ({text, textColor = '#fff', bgColor = '#003366', disable, widthFill, pressHandle, width, height}) => {

    const [active, setActive] = useState<boolean>()
    const styles = useMemo(() => {
        return StyleSheet.create({
            wrap: {
                backgroundColor: bgColor,
                borderRadius: 50,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: widthFill ? (dWidth - 28) : (width || 200),
                height: height || 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            },
            active: {
                opacity: 0.8
            },
            text: {
                color: textColor,
                fontSize: 20,
                height: height || 60,
                lineHeight: height || 60
            }
        })
    }, [width, height, bgColor])

    function handle() {
        if(!disable) {
            pressHandle && pressHandle()
        }
    }
    function toggleActive() {
        setActive(!active)
    }

    return (
        <Pressable disabled={disable} onPressIn={toggleActive} onPressOut={toggleActive} style={[styles.wrap, active ? styles.active: {}]} onPress={handle}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}

export default Button;
