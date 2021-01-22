import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import Container from '../components/Container';

import TopContainer from '../components/home/TopContainer';
import LogContainer from '../components/home/LogContainer';
import MdContainer from '../components/home/MdContainer';
import BtsContainer from '../components/home/BtsContainer';
import MdTextContainer1 from '../components/home/MdTextContainer1';
import MdTextContainer2 from '../components/home/MdTextContainer2';

import Footer from '../components/footer/Footer';
import FooBts from '../components/footer/FooBts';

import StatusBarHeight from '../components/StatusBarHeight';

const SBH = StatusBarHeight;

const Home = ({navigation}) => {
  return (
    <Container>
      <TopContainer>
        <LogContainer/>
      </TopContainer>
      <MdContainer>
        
        <BtsContainer title="aaaa" >
          <View style={{backgroundColor:'green', width:260, height:260, borderRadius: 130}}></View>
        </BtsContainer>

        <MdTextContainer1>
          <Text style={{fontSize: 30,color: '#262626'}}>보이스피싱 보호해제</Text>
        </MdTextContainer1>

        <MdTextContainer2>
          <Text style={{fontSize: 12,color: '#a1a1a1'}}>보호가 해제되었습니다</Text>
        </MdTextContainer2>

      </MdContainer>
      {/* <Footer>
        <FooBts title="Home" style={{marginLeft: 92}} onPress={(Home) => navigation.navigate( 'Home' )}>
          <Image source={require('../img/homeOn/HOME_ICON_C.png')} />
        </FooBts>
        <View style={{flex:1}} />
        <FooBts title="Menu" style={{marginRight: 92}} onPress={(Menu) => navigation.navigate( 'Menu' )}>
          <Image source={require('../img/menuOff/MENU_ICON.png')} />
        </FooBts>
      </Footer> */}
    </Container>
  );
}

export default Home;