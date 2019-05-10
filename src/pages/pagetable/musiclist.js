import React from "react";
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage,Dimensions} from "react-native";
import { LargeList } from "react-native-largelist-v3";
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import img_arr from '../../config/imgarr';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  }
]
export default class musiclist extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (

            <MaterialCommunityIcons
              raised
              name='reply'
              type='font-awesome'
              color='#f50'
              backgroundColor="#cccfff"
              size={ 25 }
              onPress={ navigation.getParam('back') } />
      ),
      headerTitle: (
        <View style={{width: Dimensions.get("screen").width*2/3, alignItems: 'center', justifyContent: 'center' }  }>
          <Text>友圈</Text>
        </View>


      ),
      headerRight: (

            <MaterialCommunityIcons
              raised
              name='folder-search'
              type='font-awesome'
              color='#f50'
              backgroundColor="#cccfff"
              size={ 25 }
              onPress={ navigation.getParam('exitlogin') } />

      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
        username: '莫笙',
        search: '',
        listType: '消息',
        listViewData: list,
        sectionListData: list,
    };
}
  _sectionCount = 10;
  _rowCount = 10;
  updateSearch = search => {
    this.setState({ search });
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
  render() {
    const { search } = this.state;
    const data = [];
    for (let section = 0; section < this._sectionCount; ++section) {
      const sContent = { items: [] };
      for (let row = 0; row < this._rowCount; ++row) {
        sContent.items.push(row);
      }
      data.push(sContent);
    }
    return (
      <View style={ styles.container }>
         <SearchBar
                    containerStyle={ style = {    width: Dimensions.get('window').width, height: 50, borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top: 0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
      <View>
 <LargeList
        data={ data }
        heightForSection={ () => 0}
        renderSection={() => null}
        heightForIndexPath={ () =>400}
        renderIndexPath={ this._renderIndexPath }
      />
      </View>
      </View>
    );
  }

  _renderSection = (section) => {
    return (
      <View style={ styles.section }>
        <Text>
          Section { section }
        </Text>
      </View>
    );
  };

  _renderIndexPath = ({ section, row }) => {
    return (
      <Card
        containerStyle={ { height: 400 } }
        title='HELLO WORLD'
        image={ require('../../assets/images/ma.jpg') }>
        <Text style={ { marginBottom: 10 } }>
          The idea with React Native Elements is more about component structure than actual design.
</Text>
        <Button
          icon={ <MaterialCommunityIcons
            raised
            name='human-handsup'
            type='font-awesome'
            color='#f50'
            backgroundColor="#cccfff"
            size={ 32 } /> }
          backgroundColor='#03A9F4'
          buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
          title='VIEW NOW' />
      </Card>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 600
  },
  line: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#EEE"
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
  },
  list: {
    top: 10,
    width: 340,
    height: 500,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  item: {
    margin: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});