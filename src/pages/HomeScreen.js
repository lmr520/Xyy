import React from 'react';
import { Image, Platform, StyleSheet, Modal, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScaleSize, ScaleText } from 'react-native-scale-size';
import Swiper from 'react-native-swiper';
import xyys from './xyys/xyys';
import colorjson from './xyys/colors';
import icons from './xyys/icons';
import { WToast } from 'react-native-smart-tip';
import { WSnackBar } from 'react-native-smart-tip';
import { WModal } from 'react-native-smart-tip';
import BouncingBalls from 'react-native-bouncing-ball';
import img_arr from '../config/imgarr';
export default class HomeScreen extends React.Component {
  state = {
    loading: true,
    users: [],
    search: '',
    isVisible: true,
    modalVisible: false,
    modalVisible2: false
  }
  updateSearch = search => {
    this.setState({ search });
  };
  show = () => {
    const toastOpts = {
      data: 'Success',
      textColor: '#ffffff',
      backgroundColor: '#444444',
      duration: WToast.duration.LONG, //1.SHORT 2.LONG
      position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
      icon: <Image source={ require('../assets/images/dog.jpg') } style={ { width: 32, height: 32, resizeMode: 'contain' } } />
    }

    WToast.show(toastOpts)
  }
  show3 = () => {
    const modalOpts = {
      data: 'Loading',
      textColor: '#fff',
      backgroundColor: '#444444',
      position: WModal.position.CENTER,
      icon: <MaterialCommunityIcons name={ 'menu' } size={ 28 } color={ 'red' }
      />,
      // onRequestClose:{show}
    }

    WModal.show(modalOpts)
  }

  test = () => {
    var user = {
      username: 'admin',
      pass: ''
    }
    // DeviceStorage.save("user", "fdghjefgjg");
    alert("欢迎来到云平台!")
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
  tomusic = () => {
    this.props.navigation.navigate('MusicList');
  }
  runxyy = (xyy) => {
    switch (xyy) {
      case 'test':
        return this.show2();
      case 'toMy':
        return this.toMy();
      case 'exitlogin':
        return this.exitlogin();
      case 'setModalVisible':
        return this.setModalVisible(true);
      case 'videodetail':
        return this.tovideo();
      case 'tomenu':
        return this.tomenu();
      case 'tomusic':
        return this.tomusic();
      case 'show':
        return this.show();
      case 'show3':
        return this.show3();
      case 'tomsg':
        return this.tomsg();
      case 'gom2':
        return this.gom2();
      case 'gomen':
        return this.gomen();
      case 'gocity':
        return this.gocity();
      case 'rightAction':
        return this.rightAction();
      default:
        return this.show();
    }
  }
  rightAction=()=>{
   
}
  gomen=()=>{
    this.props.navigation.navigate('men');
  }
  gocity=()=>{
    this.props.navigation.navigate('city');
  }
  gom2 = () => {
    this.setState({ modalVisible2: true });
  }
  tomsg = () => {
    this.props.navigation.navigate('MsgList');
  }
  show2 = () => {
    const snackBarOpts = {
      data: '该应用还未授权.请充值会员',
      position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
      duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
      textColor: '#ff490b',
      backgroundColor: '#050405',
      actionText: '好的',
      actionTextColor: '#ff490b',
      actionClick: () => {
        // Click Action
      },
    }

    WSnackBar.show(snackBarOpts)
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
    // var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // colorjson[Math.floor(Math.random() * colorjson.length)]
    // 遍历
    // icons=icons.slice().sort(() => Math.random() - 0.5);
    for (let index = lineindex; index < linelength; index++) {
      const xyy = xyys[index];
      itemAry.push(
        <View style={ styles.xyyicon }>
          <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
            color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
            //  color={ '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }
            onPress={ () => {
              this.runxyy(xyy.function);
            } }
          />
          <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
            { xyy.name }
          </Text>
        </View>
      );
    }
    return itemAry;
  }
  renderItem2(line) {
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
    // var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // colorjson[Math.floor(Math.random() * colorjson.length)]
    // 遍历
    // icons=icons.slice().sort(() => Math.random() - 0.5);
    for (let index = lineindex; index < linelength; index++) {
      const xyy = xyys[index];
      itemAry.push(
        <View style={ styles.xyyicon2 }
        >

          <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
            color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
            onPress={ () => {
              this.runxyy(xyy.function);
            } }
          />
          <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
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
      <View style={ { flex: 1, flexDirection: 'column', backgroundColor: '#F0F0F0' } }>
        <BouncingBalls
          amount={ 10 }
          animationDuration={ 5000 }
          minSpeed={ 30 }
          maxSpeed={ 200 }
          minSize={ 40 }
          maxSize={ 100 }
          imageBall={ img_arr['lsc'] }
          style={ {} }
        // style={[
        //   {backgroundColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}
        // ]
        //   }   
        />
        <View>
          <Header
            containerStyle={ {
              backgroundColor: '#3399ff',
              justifyContent: 'space-around',
              height: ScaleSize(56),
              top: ScaleSize(-12)
            } }
            // backgroundImage={ require('../../src/assets/images/contemplative-reptile.jpg')}
            leftComponent={
              <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1, alignItems: 'flex-start' } }>
                <MaterialCommunityIcons name={ 'comment-arrow-left' } size={ 28 } color={ '#fff' }
                  style={ { top: -5 } }
                  onPress={ () => {
                    this.runxyy("tomsg");
                  } }
                />
                <View
                  style={ {
                    // /If you're using react-native < 0.57 overflow outside of the parent
                    // will not work on Android, see https://git.io/fhLJ8
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <Text style={ { color: 'white', fontSize: 10, fontWeight: 'bold' } }>
                    { 9 }
                  </Text>
                </View>
              </View>


            }
            centerComponent={ <SearchBar
              containerStyle={ style = { width: Dimensions.get("screen").width * 6 / 8, height: ScaleSize(35), top: ScaleSize(-5), borderRadius: 2.5, borderWidth: 1, borderColor: '#3399ff', backgroundColor: '#3399ff' } }
              inputContainerStyle={ style = { height: ScaleSize(18), borderRadius: 25, top: ScaleSize(-6), backgroundColor: '#ffffff' } }
              inputStyle={ style = { fontSize: ScaleText(12), height: ScaleSize(18) } }
              placeholder="请输入..."
              onChangeText={ this.updateSearch }
              value={ search }
              lightTheme={ true }
              clearIcon={ { icon: 'menu', color: 'gray' } }
            /> }
            rightComponent={ <MaterialCommunityIcons name={ 'image-filter-vintage' } size={ 28 } color={ '#fff' }
              style={ { top: -5, alignItems: 'flex-end' } }
              onPress={ () => {
                this.runxyy("tomusic");
              } }
            /> }
          />
        </View>
        <View style={ { height: ScaleSize(200), top: ScaleSize(-13) } }>
          <Swiper
            style={ styles.swiper }          //样式
            height={ ScaleSize(200) }                   //组件高度
            loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={ true }                //自动轮播
            autoplayTimeout={ 10 }                //每隔4秒切换
            horizontal={ true }              //水平方向，为false可设置为竖直方向
            paginationStyle={ { bottom: ScaleSize(10) } } //小圆点的位置：距离底部10px
            showsButtons={ false }           //为false时不显示控制按钮
            showsPagination={ true }       //为false不显示下方圆点
            dot={ <View style={ {           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: ScaleSize(8),
              height: ScaleSize(8),
              borderRadius: 4,
              marginLeft: ScaleSize(10),
              marginRight: ScaleSize(9),
              marginTop: ScaleSize(-15),
            } } /> }
            activeDot={ <View style={ {    //选中的圆点样式
              backgroundColor: '#3399ff',
              width: ScaleSize(8),
              height: ScaleSize(8),
              borderRadius: 4,
              marginLeft: ScaleSize(10),
              marginRight: ScaleSize(9),
              marginTop: ScaleSize(-15),
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
        <View style={ { height: Dimensions.get('window').height * 4.1 / 10, } }>
          <ScrollView style={ styles.xyys }>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(2) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(2) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(2) }
            </View>
          </ScrollView>
        </View>
        <View style={ { alignItems: 'center', width: "auto" } }>
          <Overlay
            isVisible={ this.state.modalVisible }
            windowBackgroundColor="rgba(255, 255, 255, .1)"
            overlayBackgroundColor="#F0F0F0"
            width="auto"
            height="auto"
            onBackdropPress={ () => this.setState({ modalVisible: false }) }
          >
            <View>
              <Button title={ '小应用列表' }
                style={ styles.row }
                onPress={ () => this.setState({ modalVisible: false }) }
              ></Button>
              <ScrollView style={ styles.xyys2 }>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
              </ScrollView>
            </View>

          </Overlay>
        </View>
        <View style={ { alignItems: 'center', width: "auto" } }>
          <Overlay
            isVisible={ this.state.modalVisible2 }
            windowBackgroundColor="rgba(255, 255, 255, .1)"
            overlayBackgroundColor="#F0F0F0"
            width={ Dimensions.get('window').width }
            height={ Dimensions.get('window').height }
            onBackdropPress={ () => this.setState({ modalVisible2: false }) }
          >
            <BouncingBalls
              amount={ 10 }
              animationDuration={ 5000 }
              minSpeed={ 30 }
              maxSpeed={ 200 }
              minSize={ 40 }
              maxSize={ 100 }
              imageBall={ img_arr['lsc'] }
            // style={[
            //   {backgroundColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}
            // ]
            //   }   
            />
          </Overlay>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1, flexDirection: 'column', backgroundColor: '#F0F0F0'
  },
  swiper: {
    backgroundColor: 'gray',
    borderWidth: ScaleSize(1),
    borderColor: 'gray'
  },
  img: {
    width: Dimensions.get("screen").width,
    height: ScaleSize(200),
  },
  xyys: {
    flexDirection: 'column',
    height: Dimensions.get('window').height * 4.1 / 10,
    top: ScaleSize(20),
    marginLeft: ScaleSize(6),
    marginRight: ScaleSize(6),
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  xyys2: {
    flexDirection: 'column',
    height: Dimensions.get('window').height * 9 / 10,
    top: ScaleSize(8),
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  xyyicon2: {
    width: ScaleSize(59),
    height: Dimensions.get('window').height * 2 / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  xyyicon: {
    width: ScaleSize(59),
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
});