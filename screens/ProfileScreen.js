import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { profile } from '../data/profile'; 

const ProfileScreen = () => {
  const firstProfile = profile[0]; 
  
  return (
        <ScrollView>
            <Image source={{ uri: firstProfile.coverPhoto }} style={{
                width: '100%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }} />
            <View style={{
                marginTop: 120,
                marginLeft: 30,
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
                <Image source={{ uri: firstProfile.author.avatar }} style={{
                    width: 110,
                    height: 110,
                    borderRadius: 60
                }} />
              <Text style={{
                    marginBottom: 5,
                    fontSize: 23,
                    fontWeight: 'bold',
                    letterSpacing: 1
                }}>{firstProfile.author.name}</Text>
            </View>
          
          {profile.map((item, index) => (
              <View key={index} style={{
                  marginTop: 30,
                  padding: 15,
                  backgroundColor: '#fefefe',
                  marginHorizontal: 15,
                  borderRadius: 10
              }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Image source={{ uri: item.author.avatar }} style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }} />  
                  <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      letterSpacing: 1
                    }}>{item.author.name}</Text>
                </View>
                
              <View style={{
                    marginVertical: 15
                }}>
                  <Text style={{
                    fontSize: 16,
                    letterSpacing: 0.6
                  }}>{item.fullText}</Text>
              </View>
              
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10
                }}>
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Ionicons name='heart' size={24} color='#f00' />
                    <Text style={{ marginLeft: 5 }}>{item.favoriteCount}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Ionicons name='chatbox-ellipses-outline' size={24} color='slateblue' />
                    <Text style={{ marginLeft: 5 }}>{item.replyCount}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Ionicons name='arrow-redo-outline' size={24} color='slateblue' />
                    <Text style={{ marginLeft: 5 }}>{item.retweetCount}</Text>
                  </TouchableOpacity>
                </View>
            </View>
          ))}
        </ScrollView>
  );
};

export default ProfileScreen;
