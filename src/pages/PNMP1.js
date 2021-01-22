import React from 'react';
import { SafeAreaView, View, Text, Button, Image,TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/pnmp1/TopContainer';
import BackButton from '../components/pnmp1/BackButton';
import TopTextContainer from '../components/pnmp1/TopTextContainer';
import MdContainer from '../components/pnmp1/MdContainer';
// 전화번호관리 1~3까지있음
const PNMP1 = ({navigation}) => {
    return (
      <Container>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
                <Image source={require('../img/TMP1.png')}/>
              </TopTextContainer>
          </TopContainer>
          <MdContainer style={{paddingLeft:20,paddingRight:20}}>
            <View style={{flex:1}}>
              <View style={{height: 83,borderBottomColor:'#c4c4c4',borderBottomWidth:1}}>
                <View style={{backgroundColor:'black',height: 11,marginTop: 12,width: 60,marginLeft: 20}}>
                
                </View>
                <View style={{marginTop: 35,alignItems:'center'}}>
                  <View style={{backgroundColor:'black',height: 17,width: 113}}>
                  
                  </View>
                </View>
              </View>
              <View style={{flex:1,alignItems:'center'}}>
                <View style={{marginTop:14,backgroundColor:'black',height:13,width:86}}>

                </View>
                <TouchableOpacity style={{marginTop:66,backgroundColor:'black',height:50,width:'100%',alignItems:'center',justifyContent:'center'}} activeOpacity={1} onPress={() => navigation.navigate( 'PNMP2' )}>
                  <Text style={{color:'white'}}>전화번호 변경하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </MdContainer>
      </Container>
    )
  }
  
  export default PNMP1;