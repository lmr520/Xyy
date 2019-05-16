import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class SpacingView extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: 14,
    backgroundColor: '#f3f3f3',
  },
})


export default SpacingView