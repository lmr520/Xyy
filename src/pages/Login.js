import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {requestForlogin} from '../commoen/RequestHelper';
export default class Login extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <View style={ { marginLeft: 150 } }>
                {/* <MaterialCommunityIcons
          raised
          name='rhombus-split'
          type='font-awesome'
          color='#f50'
          backgroundColor="#cccfff"
          size={ 32 }
          onPress={ navigation.getParam('exitlogin') } /> */}
                <Text h1 style={ { color: '#f50' } }>欢迎你！</Text>
            </View>


        ),
    };
    state = {
        username: 'admin',
        pass: '',
    }
    _signInAsync = async () => {
        _that=this;
        await AsyncStorage.setItem('userToken', this.state.username);
        var user = {
            username: 'admin',
            password: 'admin123',
            rememberMe:true
        }
        this.props.navigation.navigate('App');
        // requestForlogin({
        //     username: 'admin',
        //     password: 'admin123',
        //     rememberMe:true
        //   })
        //     .then((res) => {
        //         _that.props.navigation.navigate('App');
        //     })
        //     .catch((err) => {
        //       if (!err.data.handled) {
        //       }
        //     })
// postRequest('http://192.168.31.217:80/login?username=admin&password=admin123&rememberMe=true', {
//     username: 'admin',
//     password: 'admin123',
//     rememberMe:true
// }, function(result){
// //   alert(result);
//   this.props.navigation.navigate('App');
// })


    };
    render() {
        /* 2. Read the params from the navigation state */
        return (
            <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C6E2FF' } }>
                <View style={ styles.card }>
                    <View>
                        <Input
                            style={ { width: 200 } }
                            placeholder='用户名'
                            leftIcon={
                                <MaterialCommunityIcons
                                    name='account-box'
                                    size={ 24 }
                                    color='black'
                                />
                            }
                            onChangeText={ (username) => this.setState({ username }) }
                            value={ this.state.username }
                        />
                        <Input
                            style={ { width: 200 } }
                            placeholder='密码'
                            autoComplete='password'
                            password={true}
                            errorStyle={ { color: 'red' } }
                            errorMessage='密码不得低于6位'
                            leftIcon={
                                <MaterialCommunityIcons
                                    name='briefcase-account'
                                    size={ 24 }
                                    color='black'
                                />
                            }
                            onChangeText={ (pass) => this.setState({ pass }) }
                        />
                    </View>
                    <View style={ { marginTop: 20, width: 200, marginLeft: 80, } }>
                        <Button
                            style={ { width: 200 } }
                            icon={ <MaterialCommunityIcons
                                name='checkbox-marked-circle'
                                size={ 24 }
                                color='black'
                            /> }
                            onPress={ this._signInAsync }
                            title="登录"
                        />
                    </View>
             
                    <View style={ { marginTop: 20, width: 200, marginLeft: 90, } }>
                               <Text>
              ©2019 lmr software Co.,Ltd
            </Text>
                    </View>
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
    xyyicon: {

    },
    card: {
        flexDirection: 'column',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        marginTop: 50,
        marginLeft: 10,
        height: 300,
        width: 380,
        padding: 15,
    },
});
function postRequest(url, data, callback) {
    var opts = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    }
   
    fetch(url, opts)
    .then((resonse) => resonse.text())
    .then((responseText) => {
      //将返回的JSON字符串转成JSON对象，并传递到回调方法中
      callback(responseText);
    });
  }