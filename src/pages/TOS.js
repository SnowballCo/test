import React from 'react';
import { SafeAreaView, View, Text, Button, Image } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/mypage/TopContainer';
import BackButton from '../components/mypage/BackButton';
import TopTextContainer from '../components/mypage/TopTextContainer';
import MdContainer from '../components/menu/MdContainer';
// 서비스이용약관
const TOS = ({navigation}) => {
    return (
      <Container>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
              <Image source={require('../img/TMEP.png')}/>
              </TopTextContainer>
          </TopContainer>
          <MdContainer>
            <View style={{backgroundColor:'black',flex:1}}></View>
          </MdContainer>
      </Container>
    )
  }
  
  export default TOS;