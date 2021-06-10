import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyles, images } from '../globalStyles/global'
import Card from '../shared/card'

const ReviewDetails = ({ navigation }) => {
  //This will be the number found in rating
  const rating = navigation.getParam('rating')
  const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
  })

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('title')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('body')}
        </Text>
        <View style={styles.rating}>
          <Text style={globalStyles.titleText}>Game Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}
export default ReviewDetails
