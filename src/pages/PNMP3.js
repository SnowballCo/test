import React from 'react';
import { SafeAreaView, View, Text, Button, Image,TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/pnmp3/TopContainer';
import BackButton from '../components/pnmp3/BackButton';
import TopTextContainer from '../components/pnmp3/TopTextContainer';
import MdContainer from '../components/pnmp3/MdContainer';
// 전화번호관리 1~3까지있음
const PNMP3 = ({navigation}) => {
    return (
      <Container>
        <View style={{flex:1,paddingLeft:20,paddingRight:20,backgroundColor:'white'}}>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
                <Image source={require('../img/TMP3.png')}/>
              </TopTextContainer>
              <View style={{width:222,height:32,marginTop:12,backgroundColor:'black'}}>

              </View>
          </TopContainer>
          <MdContainer>
            <View style={{borderColor:'#c4c4c4',borderBottomWidth:1}}>
              <View style={{height:63}}>
                <View style={{marginTop:35,height:23,width:80,backgroundColor:'blue'}}></View>
              </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{backgroundColor:'red',height:13,width:80,marginTop:11}}>

              </View>
              <View style={{flex:1}} />
              <View style={{width:42,height:25,backgroundColor:'red',marginTop:2}}>

              </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'black',height:50,width:'100%',alignItems:'center',justifyContent:'center'}} activeOpacity={1} onPress={() => navigation.navigate( 'Menu' )}>
              <Text style={{color:'white'}}>다음</Text>
            </TouchableOpacity>
          </MdContainer>
        </View>
      </Container>
    )
  }
  
  export default PNMP3;