import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity,AsyncStorage,Dimensions} from 'react-native';
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';
import LogoTitle from '../LogoTitle';
import DeviceStorage from '../../config/DeviceStorage'
export default class customer extends React.Component {
    static navigationOptions = ({ navigation }) => {
    return {
        headerLeft:(

            <MaterialCommunityIcons
              raised
              name='keyboard-backspace'
              type='font-awesome'
              color='#f50'
              backgroundColor="#cccfff"
              size={ 25 }
              onPress={ navigation.getParam('back') } />
         
        ),
      headerTitle: (
        <View style={{width: Dimensions.get("screen").width*2/3, alignItems: 'center', justifyContent: 'center' }  }>
                {/* <MaterialCommunityIcons
        raised
        name='rhombus-split'
        type='font-awesome'
        color='#f50'
        backgroundColor="#cccfff"
        size={ 32 }
        onPress={ navigation.getParam('exitlogin') } /> */}
        <Text>个人中心</Text>
          </View>
      

      ),
      headerRight: (
      
            <MaterialCommunityIcons
              raised
              name='settings'
              type='font-awesome'
              color='#f50'
              backgroundColor="#cccfff"
              size={ 25 }
              onPress={ navigation.getParam('exitlogin') } />
      ),
    };
  };
 state={
     username:'莫笙'
 }
 exitlogin=()=>{
    AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate('Auth');
  }
      _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      };
       componentWillMount() {
    this.props.navigation.setParams({ back: this._signInAsync,exitlogin:this.exitlogin});
  }
    render() {
        /* 2. Read the params from the navigation state */
        return (
            <View style={styles.container}>
            {/* <View style={styles.viewTop}>
              <Text style={styles.txtTitle}>我</Text>
              <Icon name='cog' style={styles.iconSetting} size={20}/>
            </View> */}
            <View style={styles.viewUser}>
              <View style={styles.viewUserTop}>
                <Image style={styles.imgUserTitle} source={require('../../assets/images/kkk.png')}/>
              </View>
              <Text style={styles.txtName}>{this.state.username}</Text>
              <Text style={styles.txtGF}>关注 0   |   粉丝 0</Text>
              <View style={styles.viewEdit}>
                <Icon name='pencil-square-o' style={styles.iconEdit} size={15}/>
                <Text style={styles.txtEdit}>编辑个人资料</Text>
              </View>
            </View>
            <View style={styles.viewLove}>
              <View style={styles.viewLoveTop}>
                <Text style={styles.txtCommon}>我的喜爱 1</Text>
                <Icon style={styles.iconCommon} name='angle-right' size={20}/>
              </View>
              <View style={styles.viewContent}>
                <Image style={styles.imgLove} source={require('../../assets/images/contemplative-reptile.jpg')}/>
              </View>
            </View>
            <View style={styles.viewCommon}>
              <Text style={styles.txtCommon}>我的点评</Text>
              <Icon style={styles.iconCommon} name='angle-right' size={20}/>
            </View>
            <View style={styles.viewCommon}>
              <Text style={styles.txtCommon}>我参与的标签</Text>
              <Icon style={styles.iconCommon} name='angle-right' size={20}/>
            </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
      },
      viewTop: {
        height: 60,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        flexDirection: 'row'
      },
      txtTitle: {
        flex: 1,
        marginLeft: 10
      },
      iconSetting: {
        marginRight: 10
      },
      viewUser: {
        height: 250,
        backgroundColor: '#F0F0F0'
      },
      viewUserTop: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
      },
      imgUserTitle: {
        height: 80,
        width: 80,
        borderRadius: 40
      },
      txtName: {
        alignSelf: 'center'
      },
      txtGF: {
        alignSelf: 'center',
        marginTop: 40
      },
      viewEdit: {
        width: 150,
        marginTop: 20,
        height: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      },
      txtEdit: {
        marginLeft: 5,
        alignSelf: 'center',
        color: '#7997C7'
      },
      iconEdit: {
        color: '#7997C7',
        marginTop: 5
      },
      viewLove: {
        height: 150,
        borderBottomWidth: 10,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#ffffff'
      },
      viewLoveTop: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
      },
      txtCommon: {
        marginLeft: 15,
        flex: 1
      },
      iconCommon: {
        marginRight: 10
      },
      imgLove: {
        height: 90,
        width: 90,
        margin: 10,
        marginTop: 0
      },
      viewCommon: {
        height: 50,
        borderBottomWidth: 10,
        borderBottomColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFF'
      }
});