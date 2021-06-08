import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../globalStyles/global'
import { getText } from 'lorembarnak'

const Home = ({ navigation }) => {
  const specificLength = getText(20)
  const [reviews, setReviews] = useState([
    { title: 'Zelda', rating: 3, body: specificLength, key: '1' },
    { title: 'Metro 2033', rating: 5, body: specificLength, key: '2' },
    {
      title: 'Metro Last Light',
      rating: 5,
      body: specificLength,
      key: '3',
    },
    { title: 'X-Com', rating: 3, body: specificLength, key: '4' },
    { title: 'Witcher 3 Wild Hunt', rating: 4, body: specificLength, key: '5' },
  ])
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
