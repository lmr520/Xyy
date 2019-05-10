import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity,ActivityIndicator,AsyncStorage} from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
export default class AuthLoading extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      };
    
    render() {
        /* 2. Read the params from the navigation state */
        return (
            <View style={styles.container}>
      <ActivityIndicator />
      <Text>加载中...</Text>
      </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })