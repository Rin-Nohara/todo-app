import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    text: string,
    bgColor?: string,
    textColor?: string,
    disable?: boolean,
    // 屏幕阅读器文本
    accessibilityLabel?: '',
    pressHandle?: () => any,
    width?: number,
    height?: number,
}

/**
 * Button 在 ios 和 android 表现不一致，使用 View 模拟，统一为 ios 参数
 */
const Button: React.FC<IProps> = ({text, textColor = '#fff', bgColor = '#003366', disable, accessibilityLabel, pressHandle, width, height}) => {

    const styles = useMemo(() => {
        return StyleSheet.create({
            wrap: {
                backgroundColor: bgColor,
                borderRadius: 50,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: width || 200,
                height: height || 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
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

    return (
        <View onTouchStart={handle} style={styles.wrap}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

export default Button;
