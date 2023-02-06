import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { TextInput } from 'react-native-gesture-handler'

export default function FormInput({
    containerStyle,
    inputContainerStyle,
    placeholer,
    inputStyle,
    value= '',
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keybordType= 'default',
    autoCompleteType= 'off',
    autoCapitalize= 'nome',
    maxlength,
    placeholerTextColor = COLORS.grey60
}) {
  return (
    <View style={{...containerStyle}}>
      <View style={{
        flexDirection: 'row',
        height: 55,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        backgroundColor: COLORS.lightGrey,
        ...inputContainerStyle
      }}>
        {prependComponent}

        <TextInput 
        style={{
            flex: 1,
            paddingHorizontal: 0,
            ...FONTS.body3,
            ...inputStyle
        }}
        value={value}
        placeholder={placeholer}
        placeholderTextColor={placeholerTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keybordType}
        autoCapitalize={autoCapitalize}
        maxLength={maxlength}
        editable={editable}
        onChange={(text) => onChange(text)}
        onPressIn={onPress}

        />
        {appendComponent}
      </View>
    </View>
  )
}