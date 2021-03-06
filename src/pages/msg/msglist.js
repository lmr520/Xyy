import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage, Animated, AppRegistry, TouchableHighlight, Dimensions, ListView, InteractionManager,SwipeableFlatList} from 'react-native';
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { red } from 'ansi-colors';
import img_arr from '../../config/imgarr';
import { LargeList } from "react-native-largelist-v3";
import { ScaleSize } from 'react-native-scale-size';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../../commoen/FacebokTabBar';
const {width,height}=Dimensions.get('window');
const list = [
    {
        key: 1, name: '东北老宝',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '你瞅啥，再瞅我怼你',
        img: img_arr['lb']
    },
    {
        key: 2, name: '甘肃老湿',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '对方不想和你说话，并向你扔了个羊驼',
        img: img_arr['lsc'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 3, name: '台州小老弟',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '来来，上车，老司机要开车了',
        img: img_arr['fan'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 4, name: '东北老宝',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '你瞅啥，再瞅我怼你',
        img: img_arr['lb']
    },
    {
        key: 5, name: '甘肃老湿',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '对方不想和你说话，并向你扔了个羊驼',
        img: img_arr['lsc'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 6, name: '台州小老弟',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '来来，上车，老司机要开车了',
        img: img_arr['fan'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },,
    {
        key: 4, name: '东北老宝',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '你瞅啥，再瞅我怼你',
        img: img_arr['lb']
    },
    {
        key: 5, name: '甘肃老湿',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '对方不想和你说话，并向你扔了个羊驼',
        img: img_arr['lsc'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 6, name: '台州小老弟',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '来来，上车，老司机要开车了',
        img: img_arr['fan'],
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    }

]
export default class msglist extends React.Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            username: '莫笙',
            search: '',
            listType: '消息',
            listViewData: list,
            sectionListData: list,
            renderPlaceholderOnly: true
        };
       

        this.rowSwipeAnimatedValues = {};
        Array(20).fill('').forEach((_, i) => {
            this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
        });
    }
    _sectionCount = 10;
    _rowCount =10;
    closeRow(rowMap, rowKey) {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    deleteRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listViewData];
        const prevIndex = this.state.listViewData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        this.setState({ listViewData: newData });
    }

    deleteSectionRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        var [section, row] = rowKey.split('.');
        const newData = [...this.state.sectionListData];
        const prevIndex = this.state.sectionListData[section].data.findIndex(item => item.key === rowKey);
        newData[section].data.splice(prevIndex, 1);
        this.setState({ sectionListData: newData });
    }

    onRowDidOpen = (rowKey, rowMap) => {
        // console.log('This row opened', rowKey);
    }

    onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    }
 //侧滑菜单渲染
 getQuickActions=()=>{
    return <View style={styles.quickAContent}>
                <TouchableHighlight
                    onPress={()=>alert("确认删除？")}
                >
                    <View style={styles.quick}>
                        <Text style={styles.delete}>删除</Text>
                    </View>
                </TouchableHighlight>
          </View>
};
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
                    onPress={ navigation.getParam('back') }
                />
            ),
            headerTitle: (
                <View style={ { width: Dimensions.get("screen").width * 2 / 3, alignItems: 'center', justifyContent: 'center' } }>
                    {/* <MaterialCommunityIcons
        raised
        name='rhombus-split'
        type='font-awesome'
        color='#f50'
        backgroundColor="#cccfff"
        size={ 32 }
        onPress={ navigation.getParam('exitlogin') } /> */}
                    <Text>消息中心</Text>
                </View>


            ),
            headerRight: (

                <MaterialCommunityIcons
                    raised
                    name='account-plus'
                    type='font-awesome'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 25 }
                    onPress={ navigation.getParam('exitlogin') } />



            ),
        };
    };
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
        this.setState({ renderPlaceholderOnly: false });
        // InteractionManager.runAfterInteractions(() => {
        //     this.setState({ renderPlaceholderOnly: false });
        // });

    };
    tomsg = () => {
        this.props.navigation.navigate('Msgchart');
    }
    _renderPlaceholderView() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
   
    render() {
        const { search } = this.state;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }
        const data = [];
        for (let section = 0; section < this._sectionCount; ++section) {
          const sContent = { items: [] };
          for (let row = 0; row < this._rowCount; ++row) {
            sContent.items.push(row);
          }
          data.push(sContent);
        }

        /* 2. Read the params from the navigation state */
        return (
            <View style={ styles.container }>
                <SearchBar
                    containerStyle={ style = { width: Dimensions.get("screen").width, height: 50, borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top: 0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
                    <View style={ styles.controls }>
                    <View style={ styles.switchContainer }>
                        { ['消息', '群消息', '通知', '系统提示'].map(type => (
                            <TouchableOpacity
                                key={ type }
                                style={ [
                                    styles.switch,

                                ] }
                                onPress={ _ => this.setState({ listType: type }) }
                            >
                                <View style={ { flexDirection: "row", } }>
                                    <Text
                                        style={ [
                                            { color: this.state.listType === type ? '#f50' : 'white' }
                                        ] }
                                    >{ type }
                                    </Text>
                                    <Badge value={ 99 } textStyle={ { color: 'white' } } containerStyle={ { top: ScaleSize(-4), right: -6 } } status={ [
                                        type === '系统提示' ? 'error' : 'warning'
                                    ] }></Badge>

                                </View>

                            </TouchableOpacity>
                        )) }
                    </View>
                </View>
                {/* <ScrollableTabView
      style={ {top:10} }
        initialPage={ 1 }
        renderTabBar={ () => <FacebookTabBar  /> }
      >
  <ScrollView tabLabel="消息" style={{height:height*4/6}}>
          <View>
          <LargeList
        data={ data }
        heightForSection={ () => 0}
        renderSection={() => null}
        heightForIndexPath={ () =>100}
        renderIndexPath={ this._renderIndexPath }
      />
          </View>
        </ScrollView>
        <ScrollView tabLabel="群消息">
          <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                // onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }

                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key } account-group
                                        leftAvatar={ <Avatar rounded icon={ { name: 'account-group', type: 'material-community', color: '#00E5EE' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ '云创新业务开发部' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
      
        </ScrollView>
        <ScrollView tabLabel="通知" >
          <View>
         
          <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                // onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key }
                                        leftAvatar={ <Avatar rounded icon={ { name: 'bell-outline', type: 'material-community', color: '#f50' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ 'ADMIN' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
          </View>
        </ScrollView>
        <ScrollView tabLabel="系统提示">
          <View>
          <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                onPress={ this.exitlogin }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key }
                                        leftAvatar={ <Avatar rounded icon={ { name: 'alert', type: 'material-community', color: 'red' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ '小莫' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
          </View>
        </ScrollView>
      </ScrollableTabView> */}
   
                 {/* <View>
                 <SwipeableFlatList
                    //1数据的获取和渲染
                    data={this.state.listViewData}
                    renderItem={(data) =>  
                     <View style={styles.item2}>
                                           <TouchableHighlight
        onPress={ this.tomsg }
        style={ styles.rowFront }
        underlayColor={ '#AAA' }
    >
        <View>
            <ListItem
                style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                subtitle={
                    <View style={ styles.subtitleView }>
                        <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                            <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.item.subtitle }</Text>
                        </View>
                        <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                            <Text style={ styles.ratingText }>17:36</Text>
                            <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                        </View>
                    </View>

                }
                // rightTitleStyle={style={   marginTop:-20,
                //     marginRight:-20,  justifyContent: 'right',
                //     alignItems: 'right',}}
                key={ data.key }
                leftAvatar={ { source: data.item.img } }
                //   rightAvatar={ <MaterialCommunityIcons
                //     name='greater-than'
                //     color='#f50'
                //     backgroundColor="#cccfff"
                //     size={ 16 }
                //      />}
                title={ data.item.name }
            />
        </View>
    </TouchableHighlight>
                                           
                                           
                                           
                                            </View>
                                            
                                        
                                        
                                        }

                    //2创建侧滑菜单
                    renderQuickActions={()=>this.getQuickActions()}//创建侧滑菜单
                    maxSwipeDistance={80}//可展开（滑动）的距离
                   // bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
                />
                     
 <LargeList
        data={ data }
        heightForSection={ () => 0}
        renderSection={() => null}
        heightForIndexPath={ () =>400}
        renderIndexPath={ this._renderIndexPath }
      />
      </View> */}
  {
                    this.state.listType === '消息' &&

                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                onPress={ this.tomsg }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key }
                                        leftAvatar={ { source: data.img } }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ data.name }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
                }

                {
                    this.state.listType === '通知' &&

                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                // onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key }
                                        leftAvatar={ <Avatar rounded icon={ { name: 'bell-outline', type: 'material-community', color: '#f50' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ 'ADMIN' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
                }

                {
                    this.state.listType === '系统提示' &&

                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                onPress={ this.exitlogin }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key }
                                        leftAvatar={ <Avatar rounded icon={ { name: 'alert', type: 'material-community', color: 'red' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ '小莫' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
                }

                {
                    this.state.listType === '群消息' &&


                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(list) }
                        renderRow={ data => (
                            <TouchableHighlight
                                // onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }

                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <ListItem
                                        style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                                        subtitle={
                                            <View style={ styles.subtitleView }>
                                                <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                                                    <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                                                </View>
                                                <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                                                    <Text style={ styles.ratingText }>17:36</Text>
                                                    <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                                                </View>
                                            </View>

                                        }
                                        // rightTitleStyle={style={   marginTop:-20,
                                        //     marginRight:-20,  justifyContent: 'right',
                                        //     alignItems: 'right',}}
                                        key={ data.key } account-group
                                        leftAvatar={ <Avatar rounded icon={ { name: 'account-group', type: 'material-community', color: '#00E5EE' } } /> }
                                        //   rightAvatar={ <MaterialCommunityIcons
                                        //     name='greater-than'
                                        //     color='#f50'
                                        //     backgroundColor="#cccfff"
                                        //     size={ 16 }
                                        //      />}
                                        title={ '云创新业务开发部' }
                                    />
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>已读</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>删除</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
                } 

                {/* <ScrollView tabLabel="首页" style={ styles.list }>
                    <View style={ { top: 5 } }>
                        {
                            list.map((l, i) => (

                                <ListItem
                                    subtitle={
                                        <View style={ styles.subtitleView }>
                                        <View  style={{height:ScaleSize(30)}}>
                                        <Text style={ { fontSize: 12,top:ScaleSize(6)} }>{data.subtitle}</Text>
                                        </View>
                                        <View  style={{flexDirection:"column",left:ScaleSize(95),bottom:ScaleSize(20)}}>
                                        <Text style={ styles.ratingText }>17:36</Text>
                                        <Badge value={3} textStyle={{color: 'orange'}} containerStyle={{top:ScaleSize(4)}}></Badge>
                                       
                                        </View>
                                        </View>
                                        
                                    }
                                    // rightTitleStyle={style={   marginTop:-20,
                                    //     marginRight:-20,  justifyContent: 'right',
                                    //     alignItems: 'right',}}
                                    key={ i }
                                    leftAvatar={ { source: { uri: l.avatar_url } } }
                                    //   rightAvatar={ <MaterialCommunityIcons
                                    //     name='greater-than'
                                    //     color='#f50'
                                    //     backgroundColor="#cccfff"
                                    //     size={ 16 }
                                    //      />}
                                    title={ l.name }
                                />
                            ))
                        }
                    </View>
                </ScrollView> */}
            </View>
        );
    }
    _renderIndexPath = ({ section, row }) => {
        // alert(section+row);
        var data=list[1];
    return (
        
        <TouchableHighlight
        onPress={ this.tomsg }
        style={ styles.rowFront }
        underlayColor={ '#AAA' }
    >
        <View>
            <ListItem
                style={ { width: ScaleSize(380), height: ScaleSize(70) } }
                subtitle={
                    <View style={ styles.subtitleView }>
                        <View style={ { width: Dimensions.get('window').width * 4 / 6 } }>
                            <Text style={ { fontSize: 12, top: ScaleSize(6) } }>{ data.subtitle }</Text>
                        </View>
                        <View style={ { width: Dimensions.get('window').width / 6, flexDirection: "column", right: ScaleSize(10), bottom: ScaleSize(20), alignItems: 'center' } }>
                            <Text style={ styles.ratingText }>17:36</Text>
                            <Badge value={ 3 } textStyle={ { color: 'orange' } } containerStyle={ { top: ScaleSize(4) } }></Badge>

                        </View>
                    </View>

                }
                // rightTitleStyle={style={   marginTop:-20,
                //     marginRight:-20,  justifyContent: 'right',
                //     alignItems: 'right',}}
                key={ data.key }
                leftAvatar={ { source: data.img } }
                //   rightAvatar={ <MaterialCommunityIcons
                //     name='greater-than'
                //     color='#f50'
                //     backgroundColor="#cccfff"
                //     size={ 16 }
                //      />}
                title={ data.name }
            />
        </View>
    </TouchableHighlight>
    );
  };
}


const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    viewTop: {
        height: 75,
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
        width: Dimensions.get('window').width * 5 / 6,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',


    },
    ratingImage: {
        height: 40,
        width: 100
    },
    ratingText: {
        color: 'grey'
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: 'teal',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: '#f50',
        right: 0
    },
    controls: {
        alignItems: 'center',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    switch: {
        alignItems: 'center',
        paddingVertical: 10,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#3399ff'
    },
    trash: {
        height: 25,
        width: 25,
    },
    item2: {
        backgroundColor: '#aeffb1',
        height: ScaleSize(70),
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,//漂浮的效果
        borderRadius:5,//圆角
    },
    text: {
        color: '#444444',
        fontSize: 20,
    },
    //侧滑菜单的样式
    quickAContent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:15,
        marginBottom:10,
    },
    quick:{
        backgroundColor:"#ff1d49",
        flex:1,
        alignItems:'flex-end',//水平靠右
        justifyContent:'center',//上下居中
        width:100,
        borderRadius:5,
        elevation:5,//漂浮的效果

    },
    delete:{
        color:"#d8fffa",
        marginRight:30
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
      }

});