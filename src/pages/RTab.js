import React from 'react';
import { Image, Platform, StyleSheet, Modal, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import xyys from './xyys/xyys';
import colorjson from './xyys/colors';
import DeviceStorage from '../config/DeviceStorage'
export default class Ratb extends React.Component {
  state = {
    loading: true,
    users: [],
    search: '',
    isVisible: true,
    modalVisible: false
  }
  updateSearch = search => {
    this.setState({ search });
  };

  test = () => {
    var user = {
      username: 'admin',
      pass: ''
    }
    DeviceStorage.save("user", "fdghjefgjg");
    alert("欢迎来到云平台!")
    //     return (<View>
    //       <Overlay
    //   isVisible={this.state.isVisible}
    //   windowBackgroundColor="rgba(255, 255, 255, .5)"
    //   overlayBackgroundColor="red"
    //   width="auto"
    //   height="auto"
    // >
    //   <Text>Hello from Overlay!</Text>
    // </Overlay>;
    //     </View>);
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  exitlogin = () => {
    AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate('Auth');
  }
  toMy = () => {
    this.props.navigation.navigate('Customer');
  }
  tovideo = () => {
    this.props.navigation.navigate('videodetail');
  }
  tomenu = () => {
    this.props.navigation.navigate('Menu');
  }
  runxyy = (xyy) => {
    switch (xyy) {
      case 'test':
        return this.test();
      case 'toMy':
        return this.toMy();
      case 'exitlogin':
        return this.exitlogin();
      case 'setModalVisible':
        return this.setModalVisible();
      case 'videodetail':
        return this.tovideo();
      case 'tomenu':
        return this.tomenu();
      default:
        return this.test();
    }
  }
  renderItem(line) {
    var linelength = line * 6;
    var lineindex = 0;
    if (line == 1) {
      lineindex = 0;
    } else {
      lineindex = (line - 1) * 6;
    }
    // 数组
    var itemAry = [];
    // 颜色数组
    var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // 遍历
    for (let index = lineindex; index < linelength; index++) {
      const xyy = xyys[index];
      itemAry.push(
        <View style={ styles.xyyicon }>
          <MaterialCommunityIcons name={ xyy.icon.name } size={ xyy.icon.size } color={ colorjson[Math.floor(Math.random() * colorjson.length)] }
            onPress={ () => {
              this.runxyy(xyy.function);
            } }
          />
          <Text style={ { fontSize: 12, fontWeight: 'bold', top: 5 } }>
            { xyy.name }
          </Text>
        </View>
      );
    }
    return itemAry;
  }
  render() {
    const { search } = this.state;
    /* 2. Read the params from the navigation state */
    return (
      <View style={ { flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF' } }>
        <View>
          <Header
            containerStyle={ {
              backgroundColor: '#3399ff',
              justifyContent: 'space-around',
              height: 54,
              top: -10
            } }
            // backgroundImage={ require('../../src/assets/images/contemplative-reptile.jpg')}
            leftComponent={ <MaterialCommunityIcons name={ 'menu' } size={ 28 } color={ '#fff' }
              onPress={ () => {
                this.runxyy("tomenu");
              } }
            />
            }
            centerComponent={ <SearchBar
              containerStyle={ style = { width: 260, height: 35, top: -3, borderRadius: 2.5, borderWidth: 1, borderColor: '#3399ff',backgroundColor:'#3399ff'} }
              inputContainerStyle={ style = { height: 20, borderRadius: 25, top: -7, backgroundColor: '#ffffff' } }
              inputStyle={ style = { fontSize: 12, height: 20 } }
              placeholder="请输入..."
              onChangeText={ this.updateSearch }
              value={ search }
              lightTheme={ true }
              clearIcon={ { icon: 'menu', color: 'gray' } }
            /> }
            rightComponent={ { icon: 'home', color: '#fff', size: 28 } }
          />
        </View>
        <View style={ { height: 200, top: -11 } }>
          <Swiper
            style={ styles.swiper }          //样式
            height={ 200 }                   //组件高度
            loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={ true }                //自动轮播
            autoplayTimeout={ 4 }                //每隔4秒切换
            horizontal={ true }              //水平方向，为false可设置为竖直方向
            paginationStyle={ { bottom: 10 } } //小圆点的位置：距离底部10px
            showsButtons={ false }           //为false时不显示控制按钮
            showsPagination={ true }       //为false不显示下方圆点
            dot={ <View style={ {           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: -15,
            } } /> }
            activeDot={ <View style={ {    //选中的圆点样式
              backgroundColor: '#3399ff',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: -15,
            } } /> }

          >
            <Image source={ require('../../src/assets/images/yylogo.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u8.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u10.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u6.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u3.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/contemplative-reptile.jpg') } style={ styles.img } />
          </Swiper>
        </View>
        <View style={ { height: 270 } }>
          <ScrollView style={ styles.xyys }>
            <View style={ { flexDirection: 'row' } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row' } }>
              { this.renderItem(2) }
            </View>
            <View style={ { flexDirection: 'row' } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row' } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row' } }>
              { this.renderItem(3) }
            </View>
          </ScrollView>
        </View>
        <View style={ { marginTop: 22 } }>
          <Modal
            animationType="slide"
            transparent={ false }
            visible={ this.state.modalVisible }
            onRequestClose={ () => {
              alert("Modal has been closed.");
            } }
            presentationStyle='overFullScreen'
          >
            <View style={ { marginTop: 22 } }>
              <View>
                <Image
                  source={ require('../../src/assets/images/contemplative-reptile.jpg') }
                  style={ { width: 300, height: 400, margin: 20 } }
                ></Image>
                <TouchableHighlight
                  onPress={ () => {
                    this.setModalVisible(!this.state.modalVisible);
                  } }
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  swiper: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'gray'
  },
  img: {
    top: 2,
    marginBottom: 5,
    width: 370,
    height: 195,
  },
  xyys: {
    flexDirection: 'column',
    height: 270,
    top: 20,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  xyyicon: {
    marginTop: 5,
    marginLeft: 6,
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
});