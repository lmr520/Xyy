
import React, { Component, } from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';
import App from './App';
var {height, width} = Dimensions.get('window');
export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigator} = this.props;
     this.timer=setTimeout(() => {
      return (<App/>)
    }, 2500);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  // componentDidMount() {
  //   SplashScreen.hide(); // 隐藏启动屏
  // }
  render() {
    return (
      <View style={{flex:1}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('./src/assets/images/contemplative-reptile.jpg')}
        />
      </View>

    );
  }
}