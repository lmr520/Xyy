import React, { Component } from 'react';

var Swiper = require('react-native-swiper');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  ScrollView,
} from 'react-native';

var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var imageUrl = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
];

var Slider = React.createClass({
    render: function(){
      return (
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={80} showsPagination={false}>
          <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
          <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
          <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
        </Swiper>
      );
    }
});


export default class ReactDeomo01 extends Component {

  render(){
      return(
      <ScrollView>
        <View style={{flex:1}}>
        <Slider/>      
        <View style={styles.flex}>
          <View style={[styles.containertop,styles.sbu_red,styles.topradius]}>
            <View style={[styles.item,styles.center]}>
              <Text style={styles.font}>酒店</Text>
              <Image source={{uri: imageUrl[0]}} style={styles.image}/>
            </View>
            <View style={[styles.item,styles.lineLeftRight]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={styles.font}>海外酒店</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>特价酒店</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
               <Text style={styles.font}>团购</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
               <Text style={styles.font}>名宿·短租</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containermiddle,styles.sbu_blue]}>
            <View style={[styles.item,styles.center]}>
              <Text style={styles.font}>机票</Text>
              <Image source={{uri: imageUrl[1]}} style={styles.image}/>
            </View>
            <View style={[styles.item,styles.lineLeftRight]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={styles.font}>火车票</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>特价机票</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
               <Text style={styles.font}>汽车票·船票</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
               <Text style={styles.font}>专车·租车</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containermiddle,styles.sbu_green]}>
            <View style={[styles.item,styles.center]}>
              <Text style={styles.font}>旅游</Text>
              <Image source={{uri: imageUrl[2]}} style={styles.image}/>
            </View>
            <View style={[styles.item,styles.lineLeftRight]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={styles.font}>目的地攻略</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>周边游</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
               <Text style={styles.font}>邮轮旅行</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
               <Text style={styles.font}>定制旅行</Text>
              </View>
            </View>
          </View>

          <View style={[styles.containermiddle,styles.sbu_yellow,styles.bottomradius]}>
             <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
               <Text style={styles.font}>景点·玩乐</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
               <Text style={styles.font}>礼品卡</Text>
              </View>
            </View>
            <View style={[styles.item,styles.lineLeftRight]}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={styles.font}>美食林</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
                <Text style={styles.font}>WiFi·电话卡</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={[styles.center,styles.flex,styles.lineCenter]}>
               <Text style={styles.font}>购物·外汇</Text>
              </View>
              <View style={[styles.center,styles.flex]}>
               <Text style={styles.font}>保险·签证</Text>
              </View>
            </View>
          </View>

          <View style={[styles.secondmenu]}>
            <View style={[{flexDirection:'row'},styles.menulineCenter]}>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon1.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>自由行</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon2.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>微领队</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon3.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>一日游</Text>
              </View>
              <View style={[styles.item,styles.center]}>
                <Image source={require('./img/icon4.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>高端游</Text>
              </View>
            </View>
            <View style={[{flexDirection:'row'},styles.menulineCenter]}>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon4.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>酒店+景点</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon3.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>海外玩乐</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon2.png')}style={styles.secondimage}/>
                <Text style={styles.secondfont}>寄存·托运</Text>
              </View>
              <View style={[styles.item,styles.center]}>
                <Image source={require('./img/icon1.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>加盟合作</Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon1.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>外币兑换</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon2.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>当季去哪</Text>
              </View>
              <View style={[styles.item,styles.center,styles.menulineRight]}>
                <Image source={require('./img/icon3.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>机场停车</Text>
              </View>
              <View style={[styles.item,styles.center]}>
                <Image source={require('./img/icon4.png')} style={styles.secondimage}/>
                <Text style={styles.secondfont}>更多服务</Text>
              </View>
            </View>
          </View>

          <View style={{height:30}}></View>

        </View>

        </View>

      </ScrollView>
      );
  }
}

const styles=StyleSheet.create({

  sbu_red:{
      backgroundColor: '#FA6778',
      borderColor:'#FA6778',
    },

    sbu_blue:{
      backgroundColor: '#3D98FF',
      borderColor:'#3D98FF',
    },

    sbu_green:{
      backgroundColor: '#5EBE00',
      borderColor:'#5EBE00',
    },

    sbu_yellow:{
      backgroundColor: '#FC9720',
      borderColor:'#FC9720',
    },
   containertop:{
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    padding:2,
  },
  topradius:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  bottomradius:{
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  containermiddle:{
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    padding:2,
    backgroundColor:'#FF0067',
  },
  secondmenu:{
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'white'
  },
  item:{
    flex:1,
    height:80,
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  flex:{
    flex:1
  },
  font:{
    color:'#fff',
    fontSize:14,
  },
  secondfont:{
    color:'black',
    fontSize:10,
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },

  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  menulineRight:{
    borderRightWidth:0.5/PixelRatio.get(),
    borderColor:'#d0d0d0'
  },

  menulineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#d0d0d0'
  },
  image:{
    width:30,
    height:30,
    marginTop:5
  },
  secondimage:{
    width:20,
    height:20,
    marginBottom:4
  },
  wrapper: {
      height:80,
    },
  slide: {
    height:80,
    resizeMode: Image.resizeMode.contain,
  },

});
