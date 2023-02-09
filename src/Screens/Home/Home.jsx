import { View, Text } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function Home({ navigation}) {
  return (
    <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }}>
      <Pressable
      onPress={() => navigation.navigate('ScanPrds')}
      >
        <Text>
            Scan
        </Text>
      </Pressable>
    </View>
  )
}