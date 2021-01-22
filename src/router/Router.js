import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import PSP from '../pages/PSP';
import TOS from '../pages/TOS';
import OSIP from '../pages/OSIP';
import Menu from '../pages/Menu';
import Mypage from '../pages/Mypage';
import PNMP1 from '../pages/PNMP1';
import PNMP2 from '../pages/PNMP2';
import PNMP3 from '../pages/PNMP3';
import EMP from '../pages/EMP';
import PMP from '../pages/PMP';


const PNMPStack = createStackNavigator();

function PNMPStackS() {
  return (
    <PNMPStack.Navigator>
      <PNMPStack.Screen name="PNMP1" component={PNMP1} options={{headerShown: false}} />
      <PNMPStack.Screen name="PNMP2" component={PNMP2} options={{headerShown: false}}/>
      <PNMPStack.Screen name="PNMP3" component={PNMP3} options={{headerShown: false}}/>
    </PNMPStack.Navigator>
  )
}


const SubStack = createStackNavigator();

function SubStackS() {
  return (
    <SubStack.Navigator>
      <SubStack.Screen name="Mypage" component={Mypage} options={{headerShown: false}} />
      <SubStack.Screen name="PNMP1" component={PNMPStackS} options={{headerShown: false}}/>
      <SubStack.Screen name="EMP" component={EMP} options={{headerShown: false}}/>
      <SubStack.Screen name="PMP" component={PMP} options={{headerShown: false}}/>
      <SubStack.Screen name="PSP" component={PSP} options={{headerShown: false}}/>
      <SubStack.Screen name="TOS" component={TOS} options={{headerShown: false}} />
      <SubStack.Screen name="OSIP" component={OSIP} options={{headerShown: false}} />
    </SubStack.Navigator>
  )
}

const SubTab = createBottomTabNavigator();

function SubTabS() {
  return (
    <SubTab.Navigator>
      <SubTab.Screen name="Home" component={Home} />
      <SubTab.Screen name="Menu" component={Menu} />
    </SubTab.Navigator>
  )
}
const MainStack = createStackNavigator();

export default function Router() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={SubTabS} options={{headerShown: false}}/>
      <MainStack.Screen name="Mypage" component={SubStackS} options={{headerShown: false}} />
    </MainStack.Navigator>
  )
}

