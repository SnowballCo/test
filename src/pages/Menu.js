import React from 'react';
import { SafeAreaView, View, Text, Button, Image } from 'react-native';
import Container from '../components/Container';
import TopContainer from '../components/menu/TopContainer';
import MenuNameCotaner from '../components/menu/MenuNameCotaner';
import UserContainer from '../components/menu/UserContainer';
import UserImgContainer from '../components/menu/UserImgContainer';
import UserTextContainer from '../components/menu/UserTextContainer';
import MdContainer from '../components/menu/MdContainer';
import SettingContainer from '../components/menu/SettingContainer';
import SmallContainer from '../components/menu/SmallContainer';
import SmallTittle from '../components/menu/SmallTittle';
import SmallItem from '../components/menu/SmallItem';
import SmallItemText from '../components/menu/SmallItemText';
import Blank from '../components/menu/Blank';
import SmallItemCheck from '../components/menu/SmallItemCheck';

import Footer from '../components/footer/Footer';
import FooBts from '../components/footer/FooBts';


const Menu = ({navigation}) => {
    return (
      <Container>
        <TopContainer>
          <MenuNameCotaner>
            <Image source={require('../img/TITLEMENU.png')}/>
          </MenuNameCotaner>
          <UserContainer activeOpacity={1} onPress={() => navigation.navigate( 'Mypage' )}>
            <UserImgContainer>
              <Image source={require('../img/userImgIcon/USER_IMG_ICON_BIG.png')}/>
            </UserImgContainer>
            <UserTextContainer>
              <Text style={{fontSize: 18}}>길동님의 마이페이지</Text>
            </UserTextContainer>
          </UserContainer>
          <View style={{flexDirection: 'row'}}>
            <Blank />
            <View style={{height:10, width:50, marginRight:20, backgroundColor: '#5c5a61'}}></View>
          </View>
        </TopContainer>
        <MdContainer>
          <SettingContainer>
            <SmallContainer style={{marginTop: 27}}>
              <SmallTittle>
              </SmallTittle>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
            </SmallContainer>
            <SmallContainer>
              <SmallTittle>
              </SmallTittle>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
            </SmallContainer>
            <SmallContainer>
              <SmallTittle>
              </SmallTittle>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
            </SmallContainer>
            <SmallContainer>
              <SmallTittle>
              </SmallTittle>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
              <SmallItem>
                <SmallItemText></SmallItemText>
                <Blank />
                <SmallItemCheck>
                  <Image source={require('../img/UNCHECKED.png')}/>
                </SmallItemCheck>
              </SmallItem>
            </SmallContainer>
          </SettingContainer>
        </MdContainer>
      </Container>
    )
  }
  
  export default Menu;