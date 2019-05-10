import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage, Animated, AppRegistry, TouchableHighlight, Dimensions, ListView, } from 'react-native';
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { red } from 'ansi-colors';
import { ScaleSize } from 'react-native-scale-size';
const list = [
    {
        key: 1, name: 'Amy Farha',
         data: [
             { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
             { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
             { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        key: 2, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 3, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 4, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 5, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
        
    },
    {
        key: 6, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 7, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
    {
        key: 8, name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        data: [
            { key: 1, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' }, 
            { key: 2, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' }, 
            { key: 3, name: 'Amy Farha', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },],
    },
]
export default class customer extends React.Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            username: '莫笙',
            search: '',
            listType: 'FlatList',
            listViewData:list,
            sectionListData:list,
        };

        this.rowSwipeAnimatedValues = {};
        Array(20).fill('').forEach((_, i) => {
            this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
        });
    }
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
        console.log('This row opened', rowKey);
    }

    onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>

                        <MaterialCommunityIcons
                            raised
                            name='reply'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 32 }
                            onPress={ navigation.getParam('back') }
                        />

                        {/* <Button
              icon={ <Icon name='ios-american-football' color='red'/> }
              backgroundColor="#cccfff"
              size={ 32 }
              buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
              onPress={ navigation.getParam('increaseCount') } /> */}
                        {/* <Icon name="ios-settings" size={40} color="red" /> */ }
                    </View>
                    {/* <View>  
            <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
          >
          </Button>
          </View> */}
                </View>
            ),
            headerTitle: (
                <View style={ { marginLeft: 100 } }>
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
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>
                        <MaterialCommunityIcons
                            raised
                            name='account-plus'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 32 }
                            onPress={ navigation.getParam('exitlogin') } />
                        {/* <Button
              icon={ <Icon name='ios-american-football' color='red'/> }
              backgroundColor="#cccfff"
              size={ 32 }
              buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
              onPress={ navigation.getParam('increaseCount') } /> */}
                        {/* <Icon name="ios-settings" size={40} color="red" /> */ }
                    </View>
                    {/* <View>  
            <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
          >
          </Button>
          </View> */}
                </View>

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
    }
    render() {
        const { search } = this.state;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        /* 2. Read the params from the navigation state */
        return (
            <View style={ styles.container }>
                <SearchBar
                    containerStyle={ style = { width: 320, height: 50, top: 10, borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top: 0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
                <View style={ styles.standalone }>
                    <SwipeRow
                        leftOpenValue={ 75 }
                        rightOpenValue={ -75 }
                    >
                        <View style={ styles.standaloneRowBack }>
                            <Text style={ styles.backTextWhite }>Left</Text>
                            <Text style={ styles.backTextWhite }>Right</Text>
                        </View>
                        <View style={ styles.standaloneRowFront }>
                            <Text>I am a standalone SwipeRow</Text>
                        </View>
                    </SwipeRow>
                </View>

                <View style={ styles.controls }>
                    <View style={ styles.switchContainer }>
                        { ['Basic', 'Advanced', 'FlatList', 'SectionList'].map(type => (
                            <TouchableOpacity
                                key={ type }
                                style={ [
                                    styles.switch,
                                    { backgroundColor: this.state.listType === type ? 'grey' : 'white' }
                                ] }
                                onPress={ _ => this.setState({ listType: type }) }
                            >
                                <Text>{ type }</Text>
                            </TouchableOpacity>
                        )) }
                    </View>
                    {
                        this.state.listType === 'Advanced' &&
                        <Text>(per row behavior)</Text>
                    }
                </View>

                {
                    this.state.listType === 'Basic' &&

                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(this.state.listViewData) }
                        renderRow={ data => (
                            <TouchableHighlight
                                onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <Text>I am { data.name } </Text>
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                    <Text style={ styles.backTextWhite }>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                    />
                }

                {
                    this.state.listType === 'Advanced' &&

                    <SwipeListView
                        dataSource={ this.ds.cloneWithRows(this.state.listViewData) }
                        renderRow={ (data, secId, rowId, rowMap) => (
                            <SwipeRow
                                disableLeftSwipe={ parseInt(rowId) % 2 === 0 }
                                leftOpenValue={ 20 + Math.random() * 150 }
                                rightOpenValue={ -150 }
                            >
                                <View style={ styles.rowBack }>
                                    <Text>Left</Text>
                                    <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, `${secId}${rowId}`) }>
                                        <Text style={ styles.backTextWhite }>Close</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, `${secId}${rowId}`) }>
                                        <Text style={ styles.backTextWhite }>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableHighlight
                                    onPress={ _ => console.log('You touched me') }
                                    style={ styles.rowFront }
                                    underlayColor={ '#AAA' }
                                >
                                    <View>
                                        <Text>{ data.name } </Text>
                                    </View>
                                </TouchableHighlight>
                            </SwipeRow>
                        ) }
                    />
                }

                {
                    this.state.listType === 'FlatList' &&

                    <SwipeListView
                        useFlatList
                        data={ this.state.listViewData }
                        renderItem={ (data, rowMap) => (
                            <TouchableHighlight
                                onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <Text>I am { data.item.name } </Text>
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenItem={ (data, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, data.item.key) }>
                                    <Text style={ styles.backTextWhite }>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteRow(rowMap, data.item.key) }>
                                    <Animated.View
                                        style={ [
                                            styles.trash,
                                            {

                                                transform: [
                                                    {
                                                        scale: this.rowSwipeAnimatedValues[data.item.key].interpolate({
                                                            inputRange: [45, 90],
                                                            outputRange: [0, 1],
                                                            extrapolate: 'clamp',
                                                        }),
                                                    }
                                                ],
                                            }
                                        ] }
                                    >
                                        <Image source={ require('../../assets/images/nav2.png') } style={ styles.trash } />
                                    </Animated.View>
                                </TouchableOpacity>
                            </View>
                        ) }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                        previewRowKey={ '0' }
                        previewOpenValue={ -40 }
                        previewOpenDelay={ 3000 }
                        onRowDidOpen={ this.onRowDidOpen }
                        onSwipeValueChange={ this.onSwipeValueChange }
                    />
                }

                {
                    this.state.listType === 'SectionList' &&

                    <SwipeListView
                        useSectionList
                        sections={ this.state.sectionListData }
                        renderItem={ (data, rowMap) => (
                            <TouchableHighlight
                                onPress={ _ => console.log('You touched me') }
                                style={ styles.rowFront }
                                underlayColor={ '#AAA' }
                            >
                                <View>
                                    <Text>I am { data.item.name } </Text>
                                </View>
                            </TouchableHighlight>
                        ) }
                        renderHiddenItem={ (data, rowMap) => (
                            <View style={ styles.rowBack }>
                                <Text>Left</Text>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnLeft] } onPress={ _ => this.closeRow(rowMap, data.item.key) }>
                                    <Text style={ styles.backTextWhite }>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ [styles.backRightBtn, styles.backRightBtnRight] } onPress={ _ => this.deleteSectionRow(rowMap, data.item.key) }>
                                    <Text style={ styles.backTextWhite }>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        ) }
                        renderSectionHeader={ ({ section }) => <Text>{ section.name }</Text> }
                        leftOpenValue={ 75 }
                        rightOpenValue={ -150 }
                        previewRowKey={ '0' }
                        previewOpenValue={ -40 }
                        previewOpenDelay={ 3000 }
                        onRowDidOpen={ this.onRowDidOpen }
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
                                        <Text style={ { fontSize: 12,top:ScaleSize(6)} }>在吗!收到请回复</Text>
                                        </View>
                                        <View  style={{flexDirection:"column",left:ScaleSize(95),bottom:ScaleSize(20)}}>
                                        <Text style={ styles.ratingText }>5 months ago</Text>
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
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
        width: ScaleSize(270),
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',

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
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
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
        backgroundColor: 'blue',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: Dimensions.get('window').width / 4,
    },
    trash: {
        height: 25,
        width: 25,
    }

});