import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { posts } from '../data/posts';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Stories from '../components/Stories';

const Stack = createStackNavigator();

const PostDetailScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={{ uri: post.author.avatar }} style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginRight: 5
          }} />
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>{post.author.name}</Text>
        </View>
      ),
    });
  }, [navigation, post]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 16 }}>{post.fullText}</Text>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
          }}
          placeholder="Write a comment..."
          value={comment}
          onChangeText={text => setComment(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'slateblue',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
          }}
          onPress={handleComment}
        >
          <Text style={{ color: 'white' }}>Comment</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Comments</Text>
        {comments.map((comment, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
                <Text style={ {
                    fontSize: 16
                }}>{comment}</Text>
            </View>
        ))}
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Header />
      <ScrollView>
        <View>
          <Stories />
        </View>
        {posts.map((post, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('PostDetail', { post })}>
              <View style={{
                marginBottom: 10,
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                backgroundColor: '#f1f1f1',
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10
                }}>
                  <Image source={{ uri: post.author.avatar }} style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2
                  }} />
                  <Text style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                    letterSpacing: 0.6,
                    flexWrap: 'wrap'
                  }}>{post.author.name}</Text>
                </View>
                <View style={{
                  paddingVertical: 10
                }}>
                  <Text style={{
                    fontSize: 16,
                    letterSpacing: 0.6
                  }}>{post.fullText}</Text>
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
                    <Text style={{ marginLeft: 5 }}>{post.favoriteCount}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Ionicons name='chatbox-ellipses-outline' size={24} color='slateblue' />
                    <Text style={{ marginLeft: 5 }}>{post.replyCount}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Ionicons name='arrow-redo-outline' size={24} color='slateblue' />
                    <Text style={{ marginLeft: 5 }}>{post.retweetCount}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <TouchableOpacity style={ {
        position: 'absolute',
        right: 20,
        bottom: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'slateblue',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10
      }}
      onPress={() => setModalVisible(true)}>
        <Ionicons name='add' size={ 24 } color='#fff' />
        <Text style={ {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff'
        }}>Post</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            alignItems: 'center'
          } }>
            <Ionicons name='close' size={ 26 } color='slateblue' onPress={() => setModalVisible(false)} style={ {
              position: 'absolute',
              top: 10,
              right: 10
            }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Add Post</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
                width: '100%'
              }}
              placeholder="Write a post..."
            />
            <Button title="Post" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const Xiao = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}

export default Xiao;
