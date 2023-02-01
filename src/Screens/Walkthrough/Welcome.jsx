import { StatusBar } from 'expo-status-bar'
import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'

import { images, COLORS, SIZES, FONTS } from '../../../constants'

export default function Welcome( {navigation} ) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.light,
    }}>
      {/* <StatusBar  
        animated={true}
        backgroundColor= {COLORS.primary}
        /> */}


        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image 
          source={images.logo}
          style={{
            width: 150,
            height: 150
          }}
          />
          <Text style={{
            marginTop: SIZES.padding,
            ...FONTS.h1
          }}>
          Welcome to
          </Text>

          <Text style={{
             marginTop: SIZES.base,
             ...FONTS.h1
          }}>
            Margaret
          </Text>
        </View>

        
            {/* Footer Buttons */}

            <View style={{
              marginBottom: 30,
              marginHorizontal: SIZES.padding
            }}>
              <Pressable 
              onPress={() => navigation.navigate('Walkthrough')}
              style={{
                alignItems: 'center',
                justifyContent:'center',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius
              }}>
                <Text style={{
                  fontSize: SIZES.h3,
                  color: COLORS.light
                }}>
                  Get Started
                </Text>
              </Pressable>
            </View>
    </View>
  )
}