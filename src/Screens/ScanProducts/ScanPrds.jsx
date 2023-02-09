import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../../constants'
import IconButton from '../../components/IconButton'

export default function ScanPrds({ navigation }) {

    const [selectedOption, setSelectedOption] = useState(constants.scan_product_option.camera)


    const renderHeader = () =>{
        return(
            <View style={{
                flexDirection: 'row',
                paddingTop: SIZES.padding * 1.5,
                paddingBottom: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                alignItems:'center',
                backgroundColor: COLORS.light,
                zIndex: 1
            }}>
                <IconButton 
                icon={icons.close}
                onPress={() => navigation.goBack()}
                />

                {/* Title */}
                <Text style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    ...FONTS.h2
                }}>
                    {selectedOption === constants.scan_product_option.camera && 'Scan Camera'}
                    {selectedOption === constants.scan_product_option.qr && 'Scan QR Code'}
                </Text>

                <IconButton 
                icon={icons.flash}
                iconStyle={{
                    width: 25,
                    height: 25
                }}
                />

                <IconButton 
                icon={icons.question_mark}
                containerStyle={{
                    marginLeft: SIZES.base
                }}
                iconStyle={{
                    width: 25,
                    height: 25
                }}
                />
            </View>
        )
    }

    const renderFooter = () =>{
        return(
            <View style={{
                flexDirection: 'row',
                paddingTop: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                backgroundColor: COLORS.light
            }}>
                <TouchableOpacity style={{
                    flex: 1,
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: selectedOption === constants.scan_product_option.qr ? COLORS.primary : COLORS.lightGrey
                }}
                onPress={() =>setSelectedOption(constants.scan_product_option.qr)}>
                    <Text style={{
                        ...FONTS.h3,
                        color: selectedOption === constants.scan_product_option.qr ? COLORS.secondary : COLORS.primary
                    }}
                    >
                        Scan QR Code
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 1,
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: selectedOption === constants.scan_product_option.camera ? COLORS.primary : COLORS.lightGrey
                }}
                onPress={() =>setSelectedOption(constants.scan_product_option.camera)}>
                    <Text style={{
                        ...FONTS.h3,
                        color: selectedOption === constants.scan_product_option.camera ? COLORS.secondary : COLORS.primary
                    }}
                    
                    >
                        Scan Camera
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View style={{
        flex: 1
    }}>
        {/* herder */}
        {renderHeader()}
        {/* footer */}
        {renderFooter()}
    </View>
  )
}