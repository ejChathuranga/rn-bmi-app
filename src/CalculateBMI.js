import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class CalculateBMI extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>CalculateBMI</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'red'
    },

})