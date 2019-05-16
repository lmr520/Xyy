import React from 'react';
import { Image, Platform, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage, Dimensions, Slider, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input, Button } from 'react-native-elements';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import img_arr from '../../config/imgarr';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
const screenWidth = Dimensions.get('window').width;

export default class videodetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <MaterialCommunityIcons
                    raised
                    name='chevron-left'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 30}
                    onPress={ navigation.getParam('back') } />
            ),
            headerTitle: (
                <View style={ { width: Dimensions.get("screen").width * 2 / 3, alignItems: 'center', justifyContent: 'center' } }>
                    <Text>任务</Text>
                </View>


            ),
            headerRight: (

                <MaterialCommunityIcons
                    raised
                    name='content-save'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 30}
                    onPress={ navigation.getParam('exitlogin') } />

            ),

        };
    };

    exitlogin = () => {
        AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    componentWillMount() {
        this.props.navigation.setParams({ back: this._signInAsync, exitlogin: this.exitlogin });
    }
    /// -------Video组件回调事件-------
    render() {
        /* 2. Read the params from the navigation state */
        return (
            <View style={ styles.container }>
               <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="ios-musical-notes" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="ios-more" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    playButton: {
        width: 50,
        height: 50,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    playbuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#C7C7C7',
        width: 200,
    },
    buttonstyle: {
        width: 60,
        margin: 3
    },
    tabView: {
        top: 20,
        width: 340,
        height: 300,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      }
});