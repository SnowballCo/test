import React from 'react';
import { SafeAreaView, View, Text, Button, Image } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/mypage/TopContainer';
import BackButton from '../components/mypage/BackButton';
import TopTextContainer from '../components/mypage/TopTextContainer';
import MdContainer from '../components/menu/MdContainer';
// 개인정보취급이용약관
const PSP = ({navigation}) => {
    return (
      <Container>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
                <Image source={require('../img/TMRP.png')}/>
              </TopTextContainer>
          </TopContainer>
          <MdContainer>
            <View style={{backgroundColor:'black',flex:1}}></View>
          </MdContainer>
      </Container>
    )
  }
  
  export default PSP;