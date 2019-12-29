import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
import { ScaleSize, ScaleText } from 'react-native-scale-size';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class GoodsPrice extends Component {

    render() {
        // let icon = null;
        // if (this.props.image) {
        //     icon = <Image style={styles.icon} source={this.props.image} />
        // }
        return (
          
                <View style={{width:width/3-5,height:ScaleSize(36),flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:(width/3-5)*4/5,alignItems:'flex-start',flexDirection:'row',backgroundColor:'white',marginLeft:ScaleSize(3)}}>
                    <MaterialCommunityIcons
                    raised
                    name={this.props.menuicon.name}
                    color={this.props.menuicon.color}
                    size={20} />
                    <Text style={{alignContent:'center'}}>{this.props.fastmenu}</Text>
                    </View>
                    <View style={{width:(width/3-5)/5}}>
                    <TouchableOpacity>
                    <MaterialCommunityIcons
                    raised
                    name='dots-vertical' 
                    color='gary'
                    size={20} />
                    </TouchableOpacity>
                    </View>
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

export default GoodsPrice;