import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { globalStyles } from '../globalStyles/global'
import { Formik } from 'formik'

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          //actions closes the form
          actions.resetForm
          addReview(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />

            <Button
              color="maroon"
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
export default ReviewForm