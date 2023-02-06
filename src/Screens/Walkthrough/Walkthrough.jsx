import { View, Text, StatusBar, Animated, TouchableOpacity } from 'react-native'

import React, { useRef } from 'react'
import { COLORS, constants, FONTS, SIZES } from '../../../constants'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Walkthrough1 from './Walkthrough1'
import Walkthrough2 from './Walkthrough2'
import Walkthrough3 from './Walkthrough3'
import Walkthrough4 from './Walkthrough4'

export default function Walkthrough({ navigation }) {
  const scrollX = useRef( new Animated.Value(0)).current


  const Dots = () =>{

    const posDots = Animated.divide(scrollX, SIZES.width)
    return(
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {
          constants.walkthrough.map((el, id) => {

            const dotColors = posDots.interpolate({
              inputRange: [id - 1, id, id + 1],
              outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
              extrapolate: 'clamp'
            })
            return(
              <Animated.View 
              key={`dot-${id}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 5,
                width: 10,
                height: 10,
                backgroundColor: dotColors
              }}
              />
            )
          })
        }

      </View>
    )
  }

  const renderFooter = () =>{
    return(
      <View style={{
        position:'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: SIZES.height * .2,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.height > 700 ? SIZES.padding : 20 

      }}>
        <Dots />

        <View style={{
          flexDirection: 'row',

        }}>

          <TouchableOpacity style={{
            height: 50,
            backgroundColor: COLORS.lightGrey,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
      
          }}>
            <Text style={{
              color: COLORS.primary,
              marginHorizontal: 60,
              ...FONTS.h3
             
            }}>Join Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.reset({
            index: 0,
            routes: [{name: 'AuthMain'}] 
          })}
          // onPress={() => navigation.navigate('AuthMain')}
          >
            <Text style={{
              color: COLORS.lightGrey,
              marginHorizontal: 60,
              ...FONTS.h3
            }}>Log In</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  } 

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.light
    }}>
        {/* <StatusBar  
        animated={true}
        backgroundColor= 'none'
        /> */}
      <Animated.FlatList
      data={constants.walkthrough}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={SIZES.width}
      decelerationRate="fast"
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: {
          contentOffset: {
            x: scrollX
          }
        } }],
        {
          useNativeDriver: false
        }
      )}
      renderItem={({item, id}) =>{
        return(
          <View style={{
            width:SIZES.width,
            justifyContent: 'center'
          }}>
            
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width:SIZES.width,
            }}>
              {item.id == 0 && <Walkthrough1 />}
              {item.id == 1 && <Walkthrough2 />}
              {item.id == 2 && <Walkthrough3 />}
              {item.id == 3 && <Walkthrough4 />}
            </View>

            <View style={{
              height: SIZES.height * .35,
              alignItems: "center",
              justifyContent: 'flex-start',
              paddingHorizontal: SIZES.padding
            }}>
              <Text style={{
                ...FONTS.h1
              }}>
                {item.title}
              </Text>

              <Text style={{
                textAlign: 'center',
                marginTop: SIZES.radius,
                ...FONTS.body3,
                color: COLORS.grey
              }}>
                {item.sub_title}
              </Text>
            </View>
          </View>
          
        )
      }}
      />

      {renderFooter()}
    </View>
  )
}