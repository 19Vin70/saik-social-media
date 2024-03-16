import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { posts } from '../data/posts'

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 15, marginRight: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{ marginRight: 15, alignItems: 'center', gap: 10, backgroundColor: '#fefefe', padding: 10, borderRadius: 10 }}>
                <Image source={ { uri: posts[ 0 ].author.avatar } } style={ { width: 50, height: 50, borderRadius: 5 } } />
                <Text style={{fontSize: 12}}>{ posts[0].author.name }</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ marginRight: 15, alignItems: 'center', gap: 10, backgroundColor: '#fefefe', padding: 10, borderRadius: 10 }}>
                <Image source={ { uri: posts[ 1 ].author.avatar } } style={ { width: 50, height: 50, borderRadius: 5 } } />
                <Text style={{fontSize: 12}}>{ posts[1].author.name }</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ marginRight: 15, alignItems: 'center', gap: 10, backgroundColor: '#fefefe', padding: 10, borderRadius: 10 }}>
                <Image source={ { uri: posts[ 2 ].author.avatar } } style={ { width: 50, height: 50, borderRadius: 5 } } />
                <Text style={{fontSize: 12}}>{ posts[2].author.name }</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ marginRight: 15, alignItems: 'center', gap: 10, backgroundColor: '#fefefe', padding: 10, borderRadius: 10 }}>
                <Image source={ { uri: posts[ 3 ].author.avatar } } style={ { width: 50, height: 50, borderRadius: 5 } } />
                <Text style={{fontSize: 12}}>{ posts[3].author.name }</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ marginRight: 15, alignItems: 'center', gap: 10, backgroundColor: '#fefefe', padding: 10, borderRadius: 10 }}>
                <Image source={ { uri: posts[ 4 ].author.avatar } } style={ { width: 50, height: 50, borderRadius: 5 } } />
                <Text style={{fontSize: 12}}>{ posts[4].author.name }</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
  )
}

export default Stories