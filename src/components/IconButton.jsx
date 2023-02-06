import {  Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

export default function IconButton({
    icon,
    containerStyle,
    iconStyle,
    onPress
}) {
  return (
    <TouchableOpacity style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle
    }}
    onPress={onPress}
    >
        <Image 
        source={icon}
        resizeMode='contain'
        style={{
            width: 30,
            height: 30,
            tintColor: COLORS.width,
            ...iconStyle
        }}
        />
    </TouchableOpacity>
  )
}