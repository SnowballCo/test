import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/mypage/TopContainer';
import BackButton from '../components/mypage/BackButton';
import TopTextContainer from '../components/mypage/TopTextContainer';
import MdContainer from '../components/mypage/MdContainer';
import SettingContainer from '../components/mypage/SettingContainer';
import SmallContainer from '../components/mypage/SmallContainer';
import SmallTittle from '../components/mypage/SmallTittle';
import SmallItem from '../components/mypage/SmallItem';
import SmallItemText from '../components/mypage/SmallItemText';

const Mypage = ({navigation}) => {
    return (
      <Container>
          <TopContainer>
              <BackButton activeOpacity={1} onPress={() => navigation.goBack()}>
                <Image source={require('../img/BACKICON.png')}/>
              </BackButton>
              <TopTextContainer>
                <Image source={require('../img/MYP.png')}/>
              </TopTextContainer>
          </TopContainer>
          <MdContainer>
            <SettingContainer>
              <SmallContainer style={{marginTop: 27}}>
                <SmallTittle>
                  <Text>계정정보</Text>
                </SmallTittle>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'PNMP1' )}>
                  <SmallItemText>
                    <Text>전화번호 관리</Text>
                  </SmallItemText>
                </SmallItem>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'EMP' )}>
                  <SmallItemText>
                    <Text>이메일 관리</Text>
                  </SmallItemText>
                </SmallItem>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'PMP' )}>
                  <SmallItemText>
                    <Text>비밀번호 변경</Text>
                  </SmallItemText>
                </SmallItem>
              </SmallContainer>
              <SmallContainer>
                <SmallTittle>
                  <Text>고객센터</Text>
                </SmallTittle>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'PSP' )}>
                  <SmallItemText>
                      <Text>개인정보 취급방침</Text>
                  </SmallItemText>
                </SmallItem>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'TOS' )}>
                  <SmallItemText>
                    <Text>서비스 이용약관</Text>
                  </SmallItemText>
                </SmallItem>
                <SmallItem activeOpacity={1} onPress={() => navigation.navigate( 'OSIP' )}>
                  <SmallItemText>
                    <Text>오픈소스 라이선스</Text>
                  </SmallItemText>
                </SmallItem>
              </SmallContainer>
            </SettingContainer>
          </MdContainer>
      </Container>
    )
  }
  
  export default Mypage;