import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES, icons, FONTS } from '../../constants'

export default function CountryDropDown({
    containerStyle,
    onPress,
    selectedCountry
}) {
  return (
    <TouchableOpacity style={{
        flexDirection: 'row',
        height: SIZES.height > 800 ? 55 : 45,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        alignContent: 'center',
        marginTop: SIZES.radius,
        backgroundColor: COLORS.lightGrey,
        ...containerStyle
    }}
    onPress={onPress}
    >
          <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                {/* <Text style={{ color: COLORS.grey, ...FONTS.body3 }}>Country</Text> */}
                {!selectedCountry && <Text style={{ color: COLORS.grey, ...FONTS.body3 }}>Country</Text>}

                {selectedCountry && 
                    <>
                     <Image
                            source={{ uri: selectedCountry.flags.png }}
                            resizeMode="cover"
                            style={{
                                width: 50,
                                height: 40,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>
                            {selectedCountry.name.common}
                        </Text>
                    </>
                }

                <Image
                source={icons.arrow_down_fill}
                style={{
                    width: 30,
                    height: 30
                }}
            />
            </View>
      
    </TouchableOpacity>
  )
}