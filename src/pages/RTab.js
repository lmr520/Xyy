import React from 'react';
import { Image, Platform, StyleSheet, Modal, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, AsyncStorage,Animated,Dimensions} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import xyys from './xyys/xyys';
import colorjson from './xyys/colors';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
});

const Page = ({label, text = ''}) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {label}
    </Text>
    <Text style={styles.instructions}>
      {text}
    </Text>
  </View>
);

const iconsSet = {
  hot: require('../assets/images/play3.png'),
  trending: require('../assets/images/play3.png'),
  fresh: require('../assets/images/play3.png'),
  funny: require('../assets/images/play3.png'),
  movieAndTv: require('../assets/images/play3.png'),
  sport: require('../assets/images/play3.png'),
};

const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
  const { label, icon } = tab;
  const style = {
    marginHorizontal: 20,
    paddingVertical: 10,
  };
  const containerStyle = {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#3399ff",
    opacity: styles.opacity,
    transform: [{ scale: styles.opacity }],
  };
  const textStyle = {
    color: styles.textColor,
    fontWeight: '600',
  };
  const iconStyle = {
    tintColor: styles.textColor,
    resizeMode: 'contain',
    width: 22,
    height: 22,
    marginLeft: 10,
  };
  return (
    <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
      <Animated.View style={containerStyle}>
        <Animated.Text style={textStyle}>{label}</Animated.Text>
        <Animated.Image style={iconStyle} source={icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default class Rtab extends React.Component  {
  state = {
    search: '',
  }
  _scrollX = new Animated.Value(0);
  // 6 is a quantity of tabs
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    scale: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [1, 1.2, 1],
      extrapolate: 'clamp',
    }),
    opacity: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    }),
    textColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['#000', '#fff', '#000'],
    }),
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View style={[styles.container]}>
         <SearchBar
                    containerStyle={ style = { width: Dimensions.get("screen").width, height: height*1/12, borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top: 0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
        <ScrollableTabView
          renderTabBar={() => (
            <TabBar
              underlineColor="#000"
              tabBarStyle={{ backgroundColor: "#fff", borderTopColor: '#d2d2d2', borderTopWidth: 1 }}
              renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                <Tab
                  key={page}
                  tab={tab}
                  page={page}
                  isTabActive={isTabActive}
                  onPressHandler={onPressHandler}
                  onTabLayout={onTabLayout}
                  styles={this.interpolators[page]}
                />
              )}
            />
          )}
          onScroll={(x) => this._scrollX.setValue(x)}
        >
          <Page tabLabel={{label: "Hot", icon: iconsSet.hot}} label="Page #1 Hot" text="You can pass your own views to TabBar!"/>
          <Page tabLabel={{label: "Trending", icon: iconsSet.trending}} label="Page #2 Trending" text="Yehoo!!!"/>
          <Page tabLabel={{label: "Fresh", icon: iconsSet.fresh}} label="Page #3 Fresh" text="Hooray!"/>
          <Page tabLabel={{label: "Funny", icon: iconsSet.funny}} label="Page #4 Funny"/>
          <Page tabLabel={{label: "Movie & TV", icon: iconsSet.movieAndTv}} label="Page #5 Movie & TV"/>
          <Page tabLabel={{label: "Sport", icon: iconsSet.sport}} label="Page #6 Sport"/>
        </ScrollableTabView>
      </View>
    );
  }
}
