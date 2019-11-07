import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {Card,CardItem,Content,Container,Right,Left} from 'native-base';
export default class Prodcard extends React.Component {
  render() {
    return (
    <TouchableOpacity onPress={() =>alert('bh')}>
    <View>
    <CardItem>
    <View> 
    <Image 
    style={{height:90,width:90}}
    source={{uri:this.props.prodimg}}/></View>
    <Right style={{flex:1,alignItems:'flex-start',height:90,paddingHorizontal:20}}>
      <Text>{this.props.prod.nom}</Text>
      <Text style={{fontSize:14,fontWeight:'bold',color:'#c4402f',marginTop:5}}>{this.props.prod.prix}{' DH'}</Text>
    </Right>
    </CardItem></View></TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
