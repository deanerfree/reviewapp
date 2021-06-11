import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { globalStyles } from '../globalStyles/global'
import { getText } from 'lorembarnak'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from '../screens/reviewForm'

const Home = ({ navigation }) => {
  const specificLength = getText(20)
  const [toggleModal, setToggleModal] = useState(false)
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

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setToggleModal(!toggleModal)
  }

  const toggleHandler = () => {
    setToggleModal(!toggleModal)
  }
  const styles = StyleSheet.create({
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalContent: {
      flex: 1,
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
  })
  return (
    <View style={globalStyles.container}>
      <Modal visible={toggleModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={toggleHandler}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={toggleHandler}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
