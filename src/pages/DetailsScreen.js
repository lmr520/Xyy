import React from 'react';
import { Image, Platform, View, Text, Modal, TouchableHighlight, ScrollView, StyleSheet, FlatList } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
// import Icon from "react-native-vector-icons/Ionicons"
import LogoTitle from './LogoTitle';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header } from 'react-native-elements';
var imgs = [{}];
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
];
const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
const BadgedIcon = withBadge(1)(Icon)
export default class DetailsScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerTitle: <LogoTitle />,
  //     headerRight: (
  //       <View style={ { flex: 1, flexDirection: 'row' } }>
  //         <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>
  //           <Icon
  //             raised
  //             name='heartbeat'
  //             type='font-awesome'
  //             color='#f50'
  //             backgroundColor="#cccfff"
  //             size={ 32 }
  //             onPress={ navigation.getParam('increaseCount') } />
  //           {/* <Button
  //             icon={ <Icon name='ios-american-football' color='red'/> }
  //             backgroundColor="#cccfff"
  //             size={ 32 }
  //             buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
  //             onPress={ navigation.getParam('increaseCount') } /> */}
  //           {/* <Icon name="ios-settings" size={40} color="red" /> */ }
  //         </View>
  //         {/* <View>  
  //           <Button
  //           onPress={navigation.getParam('increaseCount')}
  //           title="+1"
  //         >
  //         </Button>
  //         </View> */}
  //       </View>

  //     ),
  //   };
  // };

  // componentWillMount() {
  //   this.props.navigation.setParams({ increaseCount: this._increaseCount });
  // }

  state = {
    count: 0,
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  onActionSelected = (position) => {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

  render() {
    return (
      <ScrollableTabView
        style={ {top:10} }
        initialPage={0}
        renderTabBar={ () => <DefaultTabBar /> }
      >
        <ScrollView tabLabel="首页" style={ styles.tabView }>
          <View style={ styles.card }>
            <FlatList
              data={ [
                { key: 'Devin' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' },
                { key: 'Devin1' },
                { key: 'Jackson1' },
                { key: 'James1' },
                { key: 'Joel1' },
                { key: 'John1' },
                { key: 'Jillian1' },
                { key: 'Jimmy1' },
                { key: 'Julie1' },
                { key: 'Devin2' },
                { key: 'Jackson2' },
                { key: 'James2' },
                { key: 'Joel2' },
                { key: 'John2' },
                { key: 'Jillian2' },
                { key: 'Jimmy2' },
                { key: 'Julie2' },
              ] }
              renderItem={ ({ item }) => <Text style={ styles.item }>{ item.key }</Text> }
            />
          </View>
        </ScrollView>
        <ScrollView tabLabel="水果" style={ styles.tabView }>
          <View style={ styles.card }>
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
            <View style={ { width: 70 } }>
              <Avatar
                rounded
                source={ {
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                } }
                size="large"
              />

              <Badge
                value="5"
                status="error"
                containerStyle={ { position: 'absolute', top: 3, right: 4 } }
              />
              <SocialIcon
                button
                light
                type='instagram'
              />
            </View>
          </View>
        </ScrollView>
        <ScrollView tabLabel="蔬菜" style={ styles.tabView }>
          <View style={ styles.card }>
            <Header
              leftComponent={ { icon: 'menu', color: '#fff' } }
              centerComponent={ { text: 'MY TITLE', style: { color: '#fff' } } }
              rightComponent={ { icon: 'home', color: '#fff' } }
            />
          </View>

        </ScrollView>
        <ScrollView tabLabel="肉类" style={ styles.tabView }>
          <View style={ styles.card }>
            <Card
              title='HELLO WORLD'
              image={ require('../../src/assets/images/contemplative-reptile.jpg') }>
              <Text style={ { marginBottom: 10 } }>
                The idea with React Native Elements is more about component structure than actual design.
  </Text>
              <Button
                icon={ <Icon name='code' color='#ffffff' /> }
                backgroundColor='#03A9F4'
                buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
                title='VIEW NOW' />
            </Card>
          </View>
        </ScrollView>
        <ScrollView tabLabel="好玩" style={ styles.tabView }>
          <View style={ styles.card }>
            <Text>Other nav</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Home Screen</Text>
      //     <Text>Count: {this.state.count}</Text>
      //     <Button
      //       title="Go to Details"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('Details', {
      //           itemId: 86,
      //           otherParam: '详情1',
      //         });
      //       }}
      //     />
      //     <Button
      //       title="Go to Cust"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('Cust', {
      //           itemId: 86,
      //           otherParam: '详情2',
      //         });
      //       }}
      //     />
      //       <Button
      //       title="Go to RTa"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('RTable', {
      //           itemId: 86,
      //           otherParam: '详情3',
      //         });
      //       }}
      //     />
      //          <View style={{ marginTop: 22 }}>
      //   <Modal
      //     animationType="slide"
      //     transparent={false}
      //     visible={this.state.modalVisible}
      //     onRequestClose={() => {
      //       alert("Modal has been closed.");
      //     }}
      //   >
      //     <View style={{ marginTop: 22 }}>
      //       <View>
      //        <Image
      //         source={require('../../src/assets/images/contemplative-reptile.jpg')}
      //         style={{width:400,height:600,marginLeft:8}}
      //        ></Image>
      //         <TouchableHighlight
      //           onPress={() => {
      //             this.setModalVisible(!this.state.modalVisible);
      //           }}
      //         >
      //           <Text>Hide Modal</Text>
      //         </TouchableHighlight>
      //       </View>
      //     </View>
      //   </Modal>

      //   <TouchableHighlight
      //     onPress={() => {
      //       this.setModalVisible(true);
      //     }}
      //   >
      //     <Text>Show Modal</Text>
      //   </TouchableHighlight>
      // </View>
      //   </View>


    );
  }
}
const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 5,
    // backgroundColor: '#ccccff',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 600,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  carditem:{
    marginTop: 5,
    marginLeft: 6,
    width: 200,
    height:80,
    alignItems: 'center',
    justifyContent: 'center'
  }
});