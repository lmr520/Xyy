import React from 'react';
import { Button, Image, Platform, View, Text } from 'react-native';
import Svg, { Path,Polyline,Circle,Rect} from 'react-native-svg';
export default class LogoTitle extends React.Component {
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 40, height: 40}}>
              <Svg  role="img" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" aria-labelledby="gridSmallIconTitle gridSmallIconDesc" stroke="red" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="red">
        <Rect width="4" height="4" x="6" y="6"/>
         <Rect width="4" height="4" x="13" y="6"/> 
         <Rect width="4" height="4" x="6" y="13"/> 
         <Rect width="4" height="4" x="13" y="13"/>
          </Svg>
        {/* <Svg role="img" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" aria-labelledby="bookOpenedIconTitle bookOpenedIconDesc" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6">
        <Path d="M12 6s-2-2-4-2-5 2-5 2v14s3-2 5-2 4 2 4 2c1.333-1.333 2.667-2 4-2 1.333 0 3 .667 5 2V6c-2-1.333-3.667-2-5-2-1.333 0-2.667.667-4 2z"/>
        <Path stroke-linecap="round" d="M12 6v14"/>
          </Svg> */}

        </View>
        <View style={{width: 60, height: 40,marginLeft:110,alignItems: 'center', justifyContent: 'center'}} >
        <Text style={{fontWeight: 'bold'}}> 首页</Text>
        {/* <Svg role="img" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" aria-labelledby="cloudUploadIconTitle cloudUploadIconDesc" stroke="red" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="red">
        <Path  d="M6.5,18 C4.01471863,18 2,15.9852814 2,13.5 C2,11.0147186 4.01471863,9 6.5,9 C6.9194849,9 7.3255638,9.05739789 7.71081142,9.16476838 C8.72277,7.28089089 10.711801,6 13,6 C15.9817502,6 18.4554927,8.17503894 18.9211951,11.0250841 C20.6555928,11.2331085 22,12.7095527 22,14.5 C22,16.4329966 20.4329966,18 18.5,18 L6.5,18 Z"/>
         <Path d="M12,11 L12,15"/>
         <Polyline points="10 12 12 10 14 12 14 12"/> 
          </Svg> */}
        </View>
        {/* <View style={{width: 90, height: 40,marginLeft:40}} >
        <Svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="coloursIconTitle coloursIconDesc" stroke="red" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="red">
        <Circle cx="12" cy="9" r="5"/> 
        <Circle cx="9" cy="14" r="5"/> 
        <Circle cx="15" cy="14" r="5"/>
          </Svg>
        </View> */}
      </View>
       
       
       
      );
    }
  }