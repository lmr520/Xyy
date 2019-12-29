import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
import { ScaleSize, ScaleText } from 'react-native-scale-size';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class FastMenuItm extends Component {
    render() {
        // let icon = null;
        // if (this.props.image) {
        //     icon = <Image style={styles.icon} source={this.props.image} />
        // }
        return (
            <View style={{width:width/6,height:ScaleSize(70),flexDirection:'column',marginTop:ScaleSize(20),marginLeft:ScaleSize(5),alignItems:'center'}}>
                <TouchableOpacity>
                <MaterialCommunityIcons
                    raised
                    name={this.props.icon.name}
                    color={this.props.icon.color}
                    size={36} />
                </TouchableOpacity>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
} 
class BuyList extends Component {
    render() {
        // let icon = null;
        // if (this.props.image) {
        //     icon = <Image style={styles.icon} source={this.props.image} />
        // }
        return (
            <View style={{flexDirection:'row',marginLeft:ScaleSize(5),alignItems:'center'}}>
                <View style={{height:ScaleSize(78),width:width/5,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity>
                <Image 
        source={require('../assets/images/a2.jpg')}
        style={{width:width/6,height:width/6}}></Image>
                </TouchableOpacity>
                </View>
               
                <View style={{height:ScaleSize(78),flexDirection:'column',marginLeft:ScaleSize(5)}}>
                    <View style={{height:ScaleSize(40),width:width/5*3.5,justifyContent:'center'}}>
                        <Text>红蛇果驾驶人个人计划和烦得很
                            
                            比较好的房价的八年级的</Text>
                    </View>
                    <View style={{height:ScaleSize(35),flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome
                    raised
                    name={'rmb'}
                    color={'#EF4A21'}
                    size={23} />
                    <Text style={{alignContent:'center',color:'#EF4A21',marginLeft:ScaleSize(2)}}>25.99</Text>
                    <MaterialCommunityIcons
                    raised
                    name={'duck'}
                    color={'#EF4A21'}
                    size={23} 
                    style={{marginLeft:ScaleSize(200)}}
                    />
                    </View>
                   
                </View>
                
            </View>
        );
    }
}
class Express extends Component {
    render() {
        // let icon = null;
        // if (this.props.image) {
        //     icon = <Image style={styles.icon} source={this.props.image} />
        // }
        return (
            <View style={{flexDirection:'row',marginLeft:ScaleSize(5),alignItems:'center'}}>
                <View style={{height:ScaleSize(78),width:width/5*1.2,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity>
                <Image 
        source={require('../assets/images/st.jpg')}
        style={{width:width/6*1.5,height:width/6}}></Image>
                </TouchableOpacity>
                </View>
               
                <View style={{height:ScaleSize(78),flexDirection:'column',marginLeft:ScaleSize(5)}}>
                    <View style={{height:ScaleSize(40),width:width/5*3.3,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text>广东本部</Text>
                        <MaterialCommunityIcons
                    raised
                    name={'ray-start-arrow'}
                    size={20} 
                    />
                      <Text>杭州中转部</Text>
                    </View>
                    <View style={{height:ScaleSize(35),flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons
                    raised
                    name={'bike'}
                    color={'#EF4A21'}
                    size={23} />
                    <Text style={{alignContent:'center',color:'#EF4A21',marginLeft:ScaleSize(2)}}>运输中</Text>
                    <MaterialCommunityIcons
                    raised
                    name={'flag-variant-outline'}
                    color={'#EF4A21'}
                    size={23} 
                    style={{marginLeft:ScaleSize(160)}}
                    />
                    </View>
                   
                </View>
                
            </View>
        );
    }
}
class FastMenu extends Component {

    render() {
        // let icon = null;
        // if (this.props.image) {
        //     icon = <Image style={styles.icon} source={this.props.image} />
        // }
        return (
            <View style={styles.container}>
                <View style={{width:width,height:ScaleSize(36),flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:width*9/10,alignItems:'flex-start',flexDirection:'row',backgroundColor:'white',marginLeft:ScaleSize(5)}}>
                    <MaterialCommunityIcons
                    raised
                    name={this.props.menuicon.name}
                    color={this.props.menuicon.color}
                    size={20} />
                    <Text style={{alignContent:'center'}}>{this.props.fastmenu}</Text>
                    </View>
                    <View style={{width:width/10}}>
                    <MaterialCommunityIcons
                    raised
                    name='dots-vertical'
                    color='gary'
                    size={20} />
                    </View>
                </View>
                <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
                    { 
                        this.props.menucde=='fast' && 
                        <View style={{height:ScaleSize(80),backgroundColor:'#DDDDDD',flexDirection:'row',alignItems:'flex-start'}}>
                             <FastMenuItm icon={{name:'code-greater-than-or-equal',color:'#31DFDF'}} name={'新增任务'}></FastMenuItm>
                        <FastMenuItm icon={{name:'code-not-equal',color:'#31DFDF'}} name={'处理消息'}></FastMenuItm>
                        <FastMenuItm icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></FastMenuItm>
                        <FastMenuItm icon={{name:'clover',color:'#31DFDF'}} name={'审批'}></FastMenuItm>
                        {/* <FastMenuItm icon={{name:'plus',color:'#294FE8'}} name={'添加'}></FastMenuItm> */}
                        </View>
                       
                    }
                    { 
                        this.props.menucde=='wuliu' && 
                      <View style={{flexDirection:'column'}}>
                          
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <Express icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></Express>
                      </View>
                     
                        
                
                       
                    }
                     { 
                        this.props.menucde=='buy' && 
                      <View style={{flexDirection:'column'}}>
                          
   <BuyList icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></BuyList>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <BuyList icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></BuyList>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <BuyList icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></BuyList>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <BuyList icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></BuyList>
   <View style={{height:ScaleSize(0.5),backgroundColor:'#DDDDDD'}}></View>
   <BuyList icon={{name:'code-string',color:'#31DFDF'}} name={'处理订单'}></BuyList>
                      </View>
                     
                        
                
                       
                    }
                
               
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection:'column',
        borderWidth: ScaleSize(1),
    borderRadius: 5,
    borderColor:'#C7C7C7',
    marginLeft:ScaleSize(5),
    marginRight:ScaleSize(5),
    marginTop: ScaleSize(10),
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});

export default FastMenu;