import React from 'react';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Image, StyleSheet, Text, View, ScrollView, } from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, PricingCard,CheckBox,Divider} from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
]
export default class Cust extends React.Component {
  state = {
    checked: true,
    modalVisible: false
  };
  render() {
    /* 2. Read the params from the navigation state */
    return (
      <ScrollableTabView
      style={ {top:10} }
        initialPage={ 1 }
        renderTabBar={ () => <DefaultTabBar /> }
      >
        <ScrollView tabLabel="首页" style={ styles.tabView }>
          <View>
            {
              list.map((l, i) => (
                <ListItem
                  key={ i }
                  leftAvatar={ { source: { uri: l.avatar_url } } }
                  title={ l.name }
                  subtitle={ l.subtitle }
                />
              ))
            }
          </View>
        </ScrollView>
        <ScrollView tabLabel="水果" style={ styles.tabView }>
          <View style={ styles.card }>
            <PricingCard
              color="#4f9deb"
              title="Free"
              price="$0"
              info={ ['1 User', 'Basic Support', 'All Core Features'] }
              button={ { title: 'GET STARTED', icon: 'flight-takeoff' } }
            />
          </View>
        </ScrollView>
        <ScrollView tabLabel="蔬菜" style={ styles.tabView }>
          <View style={ styles.card }>
          <CheckBox
  checkedIcon={<Image source={require('../assets/images/home.png')} />}
  uncheckedIcon={<Image source={require('../assets/images/nav1.png')} />}
  checked={this.state.checked}
  onPress={() => this.setState({checked: !this.state.checked})}
/>
          </View>
        </ScrollView>
        <ScrollView tabLabel="肉类" style={ styles.tabView }>
          <View style={ styles.card }>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="好玩" style={ styles.tabView }>
          <View style={ styles.card }>
            <Text>Other nav</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}
const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 400,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
