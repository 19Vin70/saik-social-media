import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
      <View style={ {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 15,
          backgroundColor: '#fff'
        }}>
            <Ionicons name='logo-slack' size={ 24 } color='slateblue' />
            <Text style={ {
                fontSize: 24,
                fontWeight: 'bold',
                letterSpacing: .6,
            }}>Saik</Text>
        </View>
  )
}

export default Header