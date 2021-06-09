import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../globalStyles/global'
import Card from '../shared/card'

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('title')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('body')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('rating')}
        </Text>
      </Card>
    </View>
  )
}
export default ReviewDetails
