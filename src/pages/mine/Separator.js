


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet,PixelRatio,Dimensions} from 'react-native'

const {width,height}=Dimensions.get('window');
class Separator extends PureComponent {
  render() {
    return (
      <View style={[styles.line, this.props.style]} />
    )
  }
}


const styles = StyleSheet.create({
  line: {
    width:width,
    height:1 / PixelRatio.get(),
    backgroundColor: '#e0e0e0',
  },
})


export default Separator
