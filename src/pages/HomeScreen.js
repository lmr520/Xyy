import React from 'react';
import { Image, Platform, StyleSheet, Modal, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, AsyncStorage, Dimensions,StatusBar} from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScaleSize, ScaleText } from 'react-native-scale-size';
import Swiper from 'react-native-swiper';
import xyys from './xyys/xyys';
import mainxyys from './xyys/mainyy';
import colorjson from './xyys/colors';
import icons from './xyys/icons';
import { WToast } from 'react-native-smart-tip';
import { WSnackBar } from 'react-native-smart-tip';
import { WModal } from 'react-native-smart-tip';
import BouncingBalls from 'react-native-bouncing-ball';
import img_arr from '../config/imgarr';
import TextTicker from 'react-native-text-ticker';
import DropdownMenu from 'react-native-dropdown-menu';
import SideMenu from 'react-native-side-menu';
import { LargeList } from "react-native-largelist-v3";
import Menu from './Menu';
import { red } from 'ansi-colors';
import FastMenu from '../components/FastMenu';
import GoodsPrice from '../components/GoodsPrice';
import LinearGradient from 'react-native-linear-gradient';
const {width,height}=Dimensions.get('window');
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    loading: true,
    users: [],
    search: '',
    isVisible: true,
    modalVisible: false,
    modalVisible2: false,
    isOpen:false,
    text:'',
    bbcount:1
  }
  this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this);
  _sectionCount = 10;
  _rowCount = 10;
}
//点击侧边栏的按钮，回调此函数，关闭menu
SelectMenuItemCallBack(){
  this.setState({
      isOpen:!this.state.isOpen,
  })
}

//点击打开侧边栏
SelectToOpenLeftSideMenu(){
  this.setState({
      isOpen:true,
  })
}
  updateSearch = search => {
    this.setState({ search });
  };
  show = () => {
    const toastOpts = {
      data: 'Success',
      textColor: '#ffffff',
      backgroundColor: '#444444',
      duration: WToast.duration.LONG, //1.SHORT 2.LONG
      position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
      icon: <Image source={ require('../assets/images/dog.jpg') } style={ { width: 32, height: 32, resizeMode: 'contain' } } />
    }

    WToast.show(toastOpts)
  }
  show3 = () => {
    const modalOpts = {
      data: 'Loading',
      textColor: '#fff',
      backgroundColor: '#444444',
      position: WModal.position.CENTER,
      icon: <MaterialCommunityIcons name={ 'menu' } size={ 28 } color={ 'red' }
      />,
      // onRequestClose:{show}
    }

    WModal.show(modalOpts)
  }

  test = () => {
    var user = {
      username: 'admin',
      pass: ''
    }
    // DeviceStorage.save("user", "fdghjefgjg");
    alert("欢迎来到云平台!")
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  exitlogin = () => {
    AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate('Auth');
  }
  toPage=(page)=>{
    this.props.navigation.navigate(page);
  }
  toMy = () => {
    this.toPage("Customer");
  }
  tovideo = () => {
    this.toPage("videodetail");
  }
  tomenu = () => {
    this.toPage("Menu");
    // this.props.navigation.navigate('Menu');
  }
  tomusic = () => {
    this.toPage("MusicList");
  }
  runxyy = (xyy) => {
    switch (xyy) {
      case 'test':
        return this.show2();
      case 'toMy':
        return this.toMy();
      case 'exitlogin':
        return this.exitlogin();
      case 'setModalVisible':
        return this.setModalVisible(true);
      case 'videodetail':
        return this.tovideo();
      case 'tomenu':
        return this.tomenu();
      case 'tomusic':
        return this.tomusic();
      case 'show':
        return this.show();
      case 'show3':
        return this.show3();
      case 'tomsg':
        return this.tomsg();
      case 'gom2':
        return this.gom2();
      case 'gomen':
        return this.gomen();
      case 'gocity':
        return this.gocity();
      case 'rightAction':
        return this.rightAction();
      case 'toTask':
        return this.toPage('TaskView');
      default:
        return this.show();
    }
  }
  rightAction=()=>{
   
}
  gomen=()=>{
    this.props.navigation.navigate('Menlist');
  }
  gocity=()=>{
    this.props.navigation.navigate('city');
  }
  gom2 = () => {
    this.setState({ modalVisible2: true });
  }
  tomsg = () => {
    this.props.navigation.navigate('MsgList');
  }
  show2 = () => {
    const snackBarOpts = {
      data: '是否显示气球',
      position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
      duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
      textColor: '#ff490b',
      backgroundColor: '#050405',
      actionText: '好的',
      actionTextColor: '#ff490b',
      actionClick: () => {
        this.setState({ bbcount: 20});
        // Click Action
      },
    }

    WSnackBar.show(snackBarOpts)
  }
  renderItem(line) {
    var linelength = line * 6;
    var lineindex = 0;
    if (line == 1) {
      lineindex = 0;
    } else {
      lineindex = (line - 1) * 6;
    }
    // 数组
    var itemAry = [];
    // 颜色数组
    // var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // colorjson[Math.floor(Math.random() * colorjson.length)]
    // 遍历
    // icons=icons.slice().sort(() => Math.random() - 0.5);
    // for (let index = lineindex; index < linelength; index++) {
    //   const xyy = xyys[index];
      itemAry.push(
        // <View style={ styles.xyyicon }>
        //   <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
        //     color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
        //     //  color={ '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }
        //     onPress={ () => {
        //       this.runxyy(xyy.function);
        //     } }
        //   />
        //   <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
        //     { xyy.name }
        //   </Text>
        // </View>
        <View style={{width:width/3-5,top:5}}>
        <Image 
        source={require('../assets/images/a6.jpg')}
        style={{width:width/3-5,height:130}}></Image>
<View style={{justifyContent:'center',flexDirection:'row',height:ScaleSize(20)}}>
        <Text style={ { marginBottom: 5 } }>
        React Native Elements 
</Text>
</View>
<GoodsPrice fastmenu={'12.99'} menuicon={{name:'shopify',color:'#EF4A21'}}></GoodsPrice>

      
       
        </View>

        
      );
      itemAry.push(
        // <View style={ styles.xyyicon }>
        //   <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
        //     color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
        //     //  color={ '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }
        //     onPress={ () => {
        //       this.runxyy(xyy.function);
        //     } }
        //   />
        //   <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
        //     { xyy.name }
        //   </Text>
        // </View>
        <View style={{width:width/3-5,top:5}}>
        <Image 
        source={require('../assets/images/a2.jpg')}
        style={{width:width/3-5,height:130}}></Image>
         <View style={{justifyContent:'center',flexDirection:'row',height:ScaleSize(20)}}>
        <Text style={ { marginBottom: 5 } }>
        React Native Elements 
</Text>
</View>
<GoodsPrice fastmenu={'12.99'} menuicon={{name:'shopify',color:'#EF4A21'}}></GoodsPrice>

       </View>


        
      );
      itemAry.push(
        // <View style={ styles.xyyicon }>
        //   <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
        //     color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
        //     //  color={ '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }
        //     onPress={ () => {
        //       this.runxyy(xyy.function);
        //     } }
        //   />
        //   <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
        //     { xyy.name }
        //   </Text>
        // </View>
        <View style={{width:width/3-5,top:5}}>
        <Image 
        source={require('../assets/images/a8.jpg')}
        style={{width:width/3-5,height:130}}></Image>
     <View style={{justifyContent:'center',flexDirection:'row',height:ScaleSize(20)}}>
        <Text style={ { marginBottom: 5 } }>
        React Native Elements 
</Text>
</View>

<GoodsPrice fastmenu={'12.99'} menuicon={{name:'shopify',color:'#EF4A21'}}></GoodsPrice>

       </View>

        
      );
    // }
    return itemAry;
  }
  renderItem3(line) {
    var linelength = line * 5;
    var lineindex = 0;
    if (line == 1) {
      lineindex = 0;
    } else {
      lineindex = (line - 1) * 5;
    }
    // 数组
    var itemAry = [];
    // 颜色数组
    // var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // colorjson[Math.floor(Math.random() * colorjson.length)]
    // 遍历
    // icons=icons.slice().sort(() => Math.random() - 0.5);
    for (let index = lineindex; index < linelength; index++) {
      const xyy = mainxyys[index];
      itemAry.push(
        <TouchableOpacity style={ styles.xyyicon3 }
        onPress={ () => {
         this.runxyy(xyy.function);
       } }
        >
          {/* <MaterialCommunityIcons name={xyy.icon.name} size={36 }
            // color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
             color={ '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }
            onPress={ () => {
              this.runxyy(xyy.function);
            } }
          /> */}
    
           <Image source={img_arr[xyy.icon.name] } 
             
             />
       
          
          <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
            { xyy.name }
          </Text>
        </TouchableOpacity>
      );
    }
    return itemAry;
  }
  renderItem2(line) {
    var linelength = line * 6;
    var lineindex = 0;
    if (line == 1) {
      lineindex = 0;
    } else {
      lineindex = (line - 1) * 6;
    }
    // 数组
    var itemAry = [];
    // 颜色数组
    // var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // colorjson[Math.floor(Math.random() * colorjson.length)]
    // 遍历
    // icons=icons.slice().sort(() => Math.random() - 0.5);
    for (let index = lineindex; index < linelength; index++) {
      const xyy = xyys[index];
      itemAry.push(
        <View style={ styles.xyyicon2 }
        >

          <MaterialCommunityIcons name={ icons.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * icons.length)] } size={ xyy.icon.size }
            color={ colorjson.slice().sort(() => Math.random() - 0.5)[Math.floor(Math.random() * colorjson.length)] }
            onPress={ () => {
              this.runxyy(xyy.function);
            } }
          />
          <Text style={ { fontSize: ScaleText(11), fontWeight: 'bold', top: ScaleSize(5) } }>
            { xyy.name }
          </Text>
        </View>

      );
    }
    return itemAry;
  }
  _renderIndexPath = ({ section, row }) => {
    return (
      <Card
        containerStyle={ { height: 400 } }
        title='HELLO WORLD'
        image={ require('../assets//images/ma.jpg') }>
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
  render() {
    const { search } = this.state;
    var data = [["品牌", "Objective-C"],["距离", "Java", "JavaScript", "PHP"], ["价格", "Ruby"], ["评价", "Objective-C"]];
    const menu=<Menu onSelectMenuItem={this.SelectMenuItemCallBack}/>;
    const data2 = [];
    for (let section = 0; section < this._sectionCount; ++section) {
      const sContent = { items: [] };
      for (let row = 0; row < this._rowCount; ++row) {
        sContent.items.push(row);
      }
      data.push(sContent);
    }
    /* 2. Read the params from the navigation state */
    return (
      <SideMenu 
      menu={menu}
            //menu={<Menu onSelectMenuItem={this.SelectMenuItemCallBack}/>}//这样写也可以
            isOpen={this.state.isOpen}
            onChange={(isOpen)=>{
                this.setState({
                    isOpen:isOpen,
                })
            }}
            menuPosition={'left'}//侧边栏是左边还是右边
            openMenuOffset={width}//侧边栏的宽度
            edgeHitWidth={200}//手指拖动可以打开侧边栏的距离（距离侧边栏）
      >
          <StatusBar backgroundColor="#ff0000"
                           translucent={true}
                           hidden={true}
                           animated={true}/>
        
       <View style={{width:width,flexDirection:'row', backgroundColor: '#F39150'}}>
      <View style={{width:width/8,justifyContent:'center'}}>
      <MaterialCommunityIcons
                    raised
                    name='menu'
                    type='font-awesome'
                    color='#C7C7C7'
                    backgroundColor="#cccfff"
                    size={ 32 }
                    onPress={() => this.SelectToOpenLeftSideMenu() }
                />
      </View>
      <View style={{width:width*7/8}}>
      <SearchBar
                    containerStyle={ style = { height: 50, borderRadius: 5, borderWidth: 1, borderColor: '#F39150',backgroundColor:'#F39150' } }
                    inputContainerStyle={ style = { height: 15, borderRadius: 25, top: 0, backgroundColor: '#F0F0F0' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
      </View>
      </View>
      <ScrollView style={ { flex: 1, flexDirection: 'column', backgroundColor: '#FFF',height:height} }>

      <LinearGradient
                    start={{x: 0.25, y: 0.25}} end={{x: 0.75, y: 0.75}}
                    colors={['#F39150','#ff9933','#ff6600']}
                    style={styles.top}>
                           {/* <TextTicker
          style={{ fontSize: 16 ,height:height/15,padding:1,}}
          duration={30000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
        NCC助力山东龙大肉食数字化业务新模式  此次，龙大肉食全面升级服务体系，选择用友NC Cloud大型企业数字化平台，对财务、人力业务系统进行统一的平台管理，实现集团化的人才管控、标准化的业财协同、精细化的数字挖掘。
        </TextTicker> */}
        <LinearGradient
                    start={{x: 0.25, y: 0.25}} end={{x: 0.75, y: 0.75}}
                    colors={['#ff9933','#ff9933','#ff6600']}
                    style={styles.swiper}>
      
          <Swiper        //样式
            height={ ScaleSize(200) }                   //组件高度
            loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={ true }                //自动轮播
            autoplayTimeout={ 10 }                //每隔4秒切换
            horizontal={ true }              //水平方向，为false可设置为竖直方向
            paginationStyle={ { bottom: ScaleSize(5) } } //小圆点的位置：距离底部10px
            showsButtons={ false }           //为false时不显示控制按钮
            showsPagination={ true }       //为false不显示下方圆点
            dot={ <View style={ {           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: ScaleSize(5),
              height: ScaleSize(5),
              borderRadius: 4,
              marginLeft: ScaleSize(10),
              marginRight: ScaleSize(9),
              marginTop: ScaleSize(-7),
            } } /> }
            activeDot={ <View style={ {    //选中的圆点样式
              backgroundColor: '#3399ff',
              width: ScaleSize(5),
              height: ScaleSize(5),
              borderRadius: 4,
              marginLeft: ScaleSize(10),
              marginRight: ScaleSize(9),
              marginTop: ScaleSize(-7),
            } } /> }

          >
          {/* <View  >
          <Image source={ require('../../src/assets/images/yylogo.jpg') } style={ styles.img } />
          </View>
          <View  >
          <Image source={ require('../../src/assets/images/longda.jpg') } style={ styles.img } />
          </View> */}
          <View  >
          <Image source={ require('../../src/assets/images/u10.jpg') } style={ styles.img } />
          </View>
          <View  >
          <Image source={ require('../../src/assets/images/u6.jpg') } style={ styles.img } />
          </View>
          <View  >
          <Image source={ require('../../src/assets/images/u3.jpg') } style={ styles.img } />
          </View>
          <View  >
          <Image source={ require('../../src/assets/images/contemplative-reptile.jpg') } style={ styles.img } />
          </View>
            {/* <Image source={ require('../../src/assets/images/yylogo.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/longda.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u10.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u6.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u3.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/contemplative-reptile.jpg') } style={ styles.img } /> */}
          </Swiper>
  
 </LinearGradient>
                </LinearGradient>
     
        
          {/* <View style={{width: Dimensions.get("screen").width,flexDirection:'row'}}>
            <View style={{width:width*1/6}}>
            
            </View>
            <View style={{width:width*5/6}}>
            <SearchBar
                    containerStyle={ style = { borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top: 0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
            </View>
          </View> */}
          {/* <DropdownMenu
          style={{width:width,height:height/8}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >

          <View> */}
   
  
      <View style={ styles.xyys3}>
      
      <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem3(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem3(2) }
            </View>
            
      </View>
      <View style={{borderWidth:1,borderColor:'#C7C7C7',top:5,width:width}}></View>
      <FastMenu fastmenu={'快捷功能'} menucde={'fast'} menuicon={{name:'iframe-outline',color:'#22B8DD'}}></FastMenu>
      <FastMenu fastmenu={'我的购物'} menucde={'buy'} menuicon={{name:'shopify',color:'#3FE23F'}}></FastMenu>
      <FastMenu fastmenu={'我的物流'} menucde={'wuliu'}menuicon={{name:'truck-fast',color:'#FF3030'}}></FastMenu>
      <FastMenu fastmenu={'我的收藏'} menucde={'faver'} menuicon={{name:'folder-star-outline',color:'#B157ED'}}></FastMenu>
      <FastMenu fastmenu={'我的任务'} menucde={'task'} menuicon={{name:'briefcase-account-outline',color:'#C87B49'}}></FastMenu>
        <View style={ styles.xyys }>
          <DropdownMenu
          style={{width:width,height:height/8}}
          bgColor={'white'} 
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
      
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(2) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(3) }
            </View>
            <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
              { this.renderItem(1) }
            </View>
            </DropdownMenu>
    
        </View>
      
     
   
        </ScrollView>
        <BouncingBalls
              amount={ 5 }
              animationDuration={ 5000 }
              minSpeed={ 30 }
              maxSpeed={ 200 }
              minSize={ 30 }
              maxSize={ 30 }
              imageBall={ img_arr['lsc'] }
            // style={[
            //   {backgroundColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}
            // ]
            //   }   
            />
          {/* </View>

        </DropdownMenu> */}
        
       
          {/* <Header
            containerStyle={ {
              backgroundColor: '#3399ff',
              justifyContent: 'space-around',
              height: ScaleSize(56),
              top: ScaleSize(-12)
            } }
            // backgroundImage={ require('../../src/assets/images/contemplative-reptile.jpg')}
            leftComponent={
              <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1, alignItems: 'flex-start' } }>
                <MaterialCommunityIcons name={ 'comment-arrow-left' } size={ 28 } color={ '#fff' }
                  style={ { top: -5 } }
                  onPress={ () => {
                    this.runxyy("tomsg");
                  } }
                />
                <View
                  style={ {
                    // /If you're using react-native < 0.57 overflow outside of the parent
                    // will not work on Android, see https://git.io/fhLJ8
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <Text style={ { color: 'white', fontSize: 10, fontWeight: 'bold' } }>
                    { 9 }
                  </Text>
                </View>
              </View>


            }
            centerComponent={ <SearchBar
              containerStyle={ style = { width: Dimensions.get("screen").width * 6 / 8, height: ScaleSize(35), top: ScaleSize(-5), borderRadius: 2.5, borderWidth: 1, borderColor: '#3399ff', backgroundColor: '#3399ff' } }
              inputContainerStyle={ style = { height: ScaleSize(18), borderRadius: 25, top: ScaleSize(-6), backgroundColor: '#ffffff' } }
              inputStyle={ style = { fontSize: ScaleText(12), height: ScaleSize(18) } }
              placeholder="请输入..."
              onChangeText={ this.updateSearch }
              value={ search }
              lightTheme={ true }
              clearIcon={ { icon: 'menu', color: 'gray' } }
            /> }
            rightComponent={ <MaterialCommunityIcons name={ 'image-filter-vintage' } size={ 28 } color={ '#fff' }
              style={ { top: -5, alignItems: 'flex-end' } }
              onPress={ () => {
                this.runxyy("tomusic");
              } }
            /> }
          /> */}
  {/* <BouncingBalls
          amount={this.state.bbcount}
          animationDuration={ 5000 }
          minSpeed={ 30 }
          maxSpeed={ 200 }
          minSize={ 40 }
          maxSize={ 60 }
          imageBall={ img_arr['lsc'] }
          isOpen={false}
          style={ {} }
        // style={[
        //   {backgroundColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}
        // ]
        //   }   
        /> */}
        <View style={ { alignItems: 'center', width: "auto" } }>
          <Overlay
            isVisible={ this.state.modalVisible }
            windowBackgroundColor="rgba(255, 255, 255, .1)"
            overlayBackgroundColor="#F0F0F0"
            width="auto"
            height="auto"
            onBackdropPress={ () => this.setState({ modalVisible: false }) }
          >
            <View>
              <Button title={ '小应用列表' }
                style={ styles.row }
                onPress={ () => this.setState({ modalVisible: false }) }
              ></Button>
              <ScrollView style={ styles.xyys2 }>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(1) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(2) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
                <View style={ { flexDirection: 'row', marginBottom: 1, marginTop: 1 } }>
                  { this.renderItem2(3) }
                </View>
              </ScrollView>
            </View>

          </Overlay>
        </View>
        <View style={ { alignItems: 'center', width: "auto" } }>
          <Overlay
            isVisible={ this.state.modalVisible2 }
            windowBackgroundColor="rgba(255, 255, 255, .1)"
            overlayBackgroundColor="#F0F0F0"
            width={ Dimensions.get('window').width }
            height={ Dimensions.get('window').height }
            onBackdropPress={ () => this.setState({ modalVisible2: false }) }
          >
            <BouncingBalls
              amount={ 10 }
              animationDuration={ 5000 }
              minSpeed={ 30 }
              maxSpeed={ 200 }
              minSize={ 40 }
              maxSize={ 100 }
              imageBall={ img_arr['lsc'] }
            // style={[
            //   {backgroundColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}
            // ]
            //   }   
            />
          </Overlay>
        </View>
      
      </SideMenu>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1, flexDirection: 'column', backgroundColor: '#FFF'
  },
  swiper: {

    height: height*1.47/8,
    width:width*9.45/10,
    // backgroundColor:'#F39150',
    // borderWidth: ScaleSize(1),
    // borderRadius: 10,
    // borderColor:'#F39150',
    // borderLeftColor: '#F39150',
    // borderRightColor:'#ff6600',
    // marginLeft:ScaleSize(5),
    // marginRight:ScaleSize(5)
  },
  img: {
    borderWidth: ScaleSize(1),
    borderRadius: 10,
    borderColor:'#ff6600',
    
    // backgroundColor:'red',
    // borderWidth: ScaleSize(1),
    // borderRadius: 10,
    // borderWidth: ScaleSize(1),
    // borderColor: 'gray',
    // borderRadius: 5,
    // marginLeft:ScaleSize(5),
    // width: Dimensions.get("screen").width,
    width:width*9.4/10,
    height: height*1.46/8,
  },
  xyys: {
    flexDirection: 'column',
    top: ScaleSize(20),
    marginLeft: ScaleSize(6),
    marginRight: ScaleSize(6),
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  xyys3: {
    width:width,
    flexDirection: 'column',
    height:  height*1.5/6,
    top: ScaleSize(15),
    // backgroundColor:'#C7C7C7'
  },
  xyys2: {
    flexDirection: 'column',
    height: Dimensions.get('window').height * 9 / 10,
    top: ScaleSize(8),
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  xyyicon2: {
    width: ScaleSize(59),
    height: Dimensions.get('window').height * 2 / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  xyyicon: {
    width: ScaleSize(59),
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  xyyicon3: {
    width: width/5,
    height: Dimensions.get('window').height*1.2/ 11,
    top:0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'
  },
  top:{
      width: width, flexDirection: 'column', justifyContent: 'center', alignItems: "center", borderWidth: ScaleSize(1),
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: '#ff6600', height: height * 1.5 / 5 /* 标准的语法（必须放在最后） */
  }
});