import React, { useRef, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { SIZES, constants } from '../../../constants'

const ITEM_WIDTH = 100;

export default function Walkthrough1() {

    const [rowImgs, setRowImgs]= useState([
        ...constants.walkthrough_01_01_images,
    ])
    const row1FlatList = useRef()


  return (
    <View>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={row1FlatList}
      data={rowImgs}
      keyExtractor={(_, id) => `slide_${id}`}
        renderItem={({item, id}) =>{
          return(
              <View style={{
                  width: ITEM_WIDTH,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>

                  <Image 
                  source={item}
                  style={{
                      width: 350,
                      height:350,
                      alignItems: 'center',
                  }}
                  />
              </View>
          )
        }}
      />
    </View>
  )
}