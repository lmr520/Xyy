import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import MineScene from './mine/MineScene'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class LeftMenu extends Component {
    constructor(props){
        super(props);

        this.selectSideMenu = this.selectSideMenu.bind(this);
    }


    //函数回调
    selectSideMenu(){
        this.props.onSelectMenuItem();
    }

    render() {
        return (
            <View style={styles.container}>
                <MineScene></MineScene>
                <TouchableOpacity
                onPress={()=>{this.selectSideMenu()}}
                >
                <MaterialCommunityIcons
                    raised
                    name='trending-neutral'
                    color='#f50'
                    backgroundColor="#cccfff"
                    size={ 32} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    topContainer: {
        backgroundColor: '#06C1AE',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 7,
    },

});