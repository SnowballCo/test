import React from 'react';
import { SafeAreaView, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/pnmp2/TopContainer';
import BackButton from '../components/pnmp2/BackButton';
import TopTextContainer from '../components/pnmp2/TopTextContainer';
import MdContainer from '../components/pnmp2/MdContainer';
// 전화번호관리 1~3까지있음
const PNMP2 = ({navigation}) => {
    return (
      <Container>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
                <Image source={require('../img/TMP2.png')}/>
              </TopTextContainer>
          </TopContainer>
          <MdContainer>
            <View style={{paddingLeft:20,paddingRight:20,flex:1}}>
              <View style={{flexDirection:'row',borderBottomColor:'#c4c4c4',borderBottomWidth:1,height:62}}>
                <View style={{backgroundColor:'black',marginTop:31,height:26,width:240}}>

                </View>
                <View style={{flex:1}}>
                </View>
                <View style={{backgroundColor:'black',marginTop:27,height:30,width:30}}>

                </View>
              </View>
              <View style={{borderBottomColor:'#c4c4c4',borderBottomWidth:1,height:72}}>
                <View style={{backgroundColor:'black',marginTop:43,height:26,width:240}}>

                </View>
              </View>
              <TouchableOpacity style={{marginTop:66,backgroundColor:'black',height:50,width:'100%',alignItems:'center',justifyContent:'center'}} activeOpacity={1} onPress={() => navigation.navigate( 'PNMP3' )}>
                <Text style={{color:'white'}}>다음</Text>
              </TouchableOpacity>
            </View>
          </MdContainer>
      </Container>
    )
  }
  
  export default PNMP2;