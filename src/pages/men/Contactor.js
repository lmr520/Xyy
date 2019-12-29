import React, { Component ,PureComponent} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity
} from 'react-native';

import SectionListContacts from 'react-native-sectionlist-contacts'

export default class Contactor extends React.Component {

 constructor(props) {
      super(props)

      //name字段必须,其他可有可无
    let nameData=[
        {name:'阿玛尼',id:'amani',params: ''},
        {name:'OK',id:'ok',params: '123'},
        {name:'天津饭'},
        {name:'%……&'},
        {name:'周星驰'},
        {name:'习大表哥'},
        {name:'不要这样'},
        {name:'V字仇杀队'},
        {name:'拼车'},
        {name:'他妈跌'},
        {name:'淫僧'},
        {name:'钱学森'},
        {name:'宁采臣'},
        {name:'史泰龙'},
        {name:'恐龙'},
        {name:'任达华'},
        {name:'妈咪宝贝'},
        {name:'ing'},
        {name:'康麦隆'},
        {name:'刘德华'},
        {name:'精忠报国'},
        {name:'黄药师'},
        {name:'大叔皮'},
        {name:'布达拉宫'},
        {name:'方世玉'},
        {name:'ET外星人'},
        {name:'程咬金'},
        {name:'**&&&&'},
    ]
    
      this.state = {
          dataArray: nameData,
      }
  }
  renderItem=(item,index,section)=>{
    var index = escape(item).indexOf( "%u" );
    var firstName='';
    // if(index > 0){
    //     firstName =  item.substring(0,1);
    // }
    firstName = (firstName+item.name).slice(0,1);
    console.log('---custom-renderItem--',item,index,section)
    return <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:40,width:40,alignItems:'center',justifyContent:'center',borderWidth: 1,marginLeft:5,marginTop:2,marginRight:5,
    borderRadius: 5,
    borderColor: '#C7C7C7',
    backgroundColor: '#FFF'}}>

        <Text style={{color:'red',fontSize:20,fontStyle:'italic', fontWeight:('bold', '800')
}}>{firstName}</Text>
        </View>
        <Text style={{fontWeight:('bold', '500'),fontSize:15, fontFamily:'KaiTi'}}>{item.name}</Text></View>
}
_renderHeader=(params)=>{
    console.log('---custom-renderHeader--',params)
    return <View><Text>{params.key}</Text></View>
}

  render() {
        return(
            <View style={styles.container}>
                <SectionListContacts
                    ref={s=>this.sectionList=s}
                    sectionListData={this.state.dataArray}
                    initialNumToRender={this.state.dataArray.length}
                    showsVerticalScrollIndicator={false}
                    SectionListClickCallback={(item,index)=>{
                       console.log('---SectionListClickCallback--:',item,index)
                    }}
                    otherAlphabet="#"
                    showAlphabet={true}
                    renderHeader={this._renderHeader}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
});