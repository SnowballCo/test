import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import StatusList from './StatusList';
import StatusDetail from './StatusDetail';
import Settings from './Settings';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Modal from './Modal';
import Loading from './Loading';


const ChatStack = createStackNavigator();
const ChatStackScreen = () => (
    <ChatStack.Navigator>
        <ChatStack.Screen
        name="ChatList"
        component={ChatList}
        options={{
            headerTitle: 'Chats',
        }}
        />
        <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
    </ChatStack.Navigator>
)

const StatusStack = createStackNavigator();
const StatusStackScreen = () => (
    <StatusStack.Navigator>
        <StatusStack.Screen 
        name="StatusList" 
        component ={StatusList} 
        options={{
            headerTitle: 'Status',
        }}/>
        <StatusStack.Screen name="StatusDetail" component={StatusDetail}/> 
    </StatusStack.Navigator>
);
 
const CreatePlaceholder = () => (
    <View style={{ flex: 1, backgroundColor: 'blue'}} />
)
const AppTabs = createBottomTabNavigator();
const AppTabScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen 
            name="Chat" 
            component = {ChatStackScreen} 
            options={{tabBarIcon: props => (
                <Ionicons name="ios-contacts" size={props.size} color={props.color} />
            ),}}
        />
        <AppTabs.Screen
            name="More"
            component={CreatePlaceholder}
            options={{
                tabBarIcon: props => (
                    <Ionicons name="ios-add" size={props.size} color={props.color} />
                ),
            }}
            listeners={({ navigation }) => ({
                tabPress: e => {
                    e.preventDefault();
                    navigation.navigate("CreateNew");
                },
            })}
            />
        <AppTabs.Screen 
            name="Status" 
            component ={StatusStackScreen} 
            options={{tabBarIcon: props => (
                <Ionicons name="ios-checkmark-circle-outline" size={props.szie} color={props.color} />
            ),}}
        />
    </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator drawerType='back'>
        <AppDrawer.Screen 
            name="Tabs" 
            component={AppTabScreen} 
            options={{drawerLabel: 'Home'}}
            />
        <AppDrawer.Screen 
            name="Settings" 
            component={Settings} 
            options = {{
                gestureEnabled: false,
            }}
            />
    </AppDrawer.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
)

const CreateNew = () =>  <View style = {{flex: 1, backgroundColor: '#F084B7'}} />;

const RootStack = createStackNavigator();
const RootStackScreen = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
            setUser({});

        }, 500);
    }, []);

    return (
        <RootStack.Navigator
            headerMode="none"
            screenOptions={{ animationEnabled: false}}
            mode="modal"
            >
                {isLoading ? (
                    <RootStack.Screen name="Loading" component={Loading} />
                ): user ? (
                    <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
                ) : (
                    <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
                )}
                <RootStack.Screen name="Modal" component={Modal} options ={{animationEnabled: true}} />
                <RootStack.Screen name="Alert" component={Modal} options =
                {{
                    animationEnabled: true,
                    cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)"},
                    cardOverlayEnabled: true,
                    cardStyleInterpolator: ({current: { progress }}) => {
                        return{
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1]
                                })
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: "clamp"
                                })
                            }
                        };
                    }
                }}
                 />
                 <RootStack.Screen
                    name="CreateNew"
                    component={CreateNew}
                    options={{ animationEnabled: true }}
                    />
            </RootStack.Navigator>
    );
}; 

export default () => {
    return(
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
};