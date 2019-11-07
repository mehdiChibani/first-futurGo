import React, { Component } from 'react';
import { Container, Header, Left, Text,Content,Body, Right, Icon, Title,Card,CardItem } from 'native-base';
import {View,TouchableOpacity,Alert,ScrollView} from 'react-native'
const axios = require('axios');
import config from './config'
import Prodcard from './prodcard'
class Home extends Component {
  state={
    products:[]
  }
  onPressLearnMore(){
    Alert.alert('jj')
  }
  componentWillMount(){
    this.getCuisineProducts()
  }
  getCuisineProducts=()=>{
    axios.get(config.productServicesURL)
  .then(response => {
    // handle success
    this.setState({products:response.data})
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
  render() { 
    return (
      <Container>
      <Header>
          <Left>
          <TouchableOpacity onPress={()=>Alert.alert('jj')}><View><Icon name='md-menu' style={{color:'white'}}
              /></View></TouchableOpacity>
          </Left>
          <Body><Text numberOfLines={1} style={{ color: 'white', fontSize: 20}}>Electroshop</Text></Body>
          <Right>
          <Icon name='md-cart' style={{color:'white'}}/>
          </Right>
      </Header>
      <View style={{height:60,backgroundColor:'#4286f4'}}>
        <TouchableOpacity>
        <Card>
            <CardItem>
            <Icon active name="search" />
              <Body><Text>Chercher un Produit</Text></Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
        </Card></TouchableOpacity>
        </View>
        <Content>
        <ScrollView>
        {this.state.products.map(prod =>{
          const img=config.imageProd+prod.photo
          return(
          <View key={prod.id}>
            <Prodcard prodimg={img} prod={prod} />
          </View>)
        })}
      </ScrollView>
      </Content>
      
      </Container>

    );
  }
}

export default Home;
