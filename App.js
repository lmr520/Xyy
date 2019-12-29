import React from 'react';
import { Button, Image, Platform, View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import Cust from './src/pages/Cust';
import RTable from './src/pages/RTab';
import Login from './src/pages/Login';
import AuthLoading from './src/pages/AuthLoading';
import Customer from './src/pages/customer/customer';
import videodetail from './src/pages/details/videodetail';
import Menu from './src/pages/customer/menus';
import MusicList from './src/pages/pagetable/musiclist';
import chart from './src/pages/customer/chart';
import imchart from './src/pages/msg/imchart'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import msglist from './src/pages/msg/msglist';
import SplashScreen from 'react-native-splash-screen';
import TaskView from './src/pages/Task/TaskView';
import Menlist from './src/pages/men/menlist';
/***
 **************************************************************
 *                                                            *
 *   .=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.       *
 *    |                     ______                     |      *
 *    |                  .-"      "-.                  |      *
 *    |                 /            \                 |      *
 *    |     _          |              |          _     |      *
 *    |    ( \         |,  .-.  .-.  ,|         / )    |      *
 *    |     > "=._     | )(__/  \__)( |     _.=" <     |      *
 *    |    (_/"=._"=._ |/     /\     \| _.="_.="\_)    |      *
 *    |           "=._"(_     ^^     _)"_.="           |      *
 *    |               "=\__|IIIIII|__/="               |      *
 *    |              _.="| \IIIIII/ |"=._              |      *
 *    |    _     _.="_.="\          /"=._"=._     _    |      *
 *    |   ( \_.="_.="     `--------`     "=._"=._/ )   |      *
 *    |    > _.="                            "=._ <    |      *
 *    |   (_/                                    \_)   |      *
 *    |                                                |      *
 *    '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='      *
 *                                                            *
 *           LASCIATE OGNI SPERANZA, VOI CH'ENTRATE           *
 **************************************************************
 */
class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={ { width: 24, height: 24, margin: 5 } }>
        <MaterialCommunityIcons name={ name } size={ size } color={ color } />
        { badgeCount > 0 && (
          <View
            style={ {
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: '#ff6600',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            } }>
            <Text style={ { color: 'white', fontSize: 10, fontWeight: 'bold' } }>
              { badgeCount }
            </Text>
          </View>
        ) }
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge { ...props } badgeCount={ 3 } />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  } else if (routeName === 'MsgList') {
    iconName = `email${focused ? '' : '-outline'}`;
    IconComponent = HomeIconWithBadge;
  }
   else if (routeName === 'Details') {
    iconName = `cart${focused ? '' : '-outline'}`;
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Cust') {
    iconName = `coffee${focused ? '' : '-outline'}`;
  } else if (routeName === 'RTable') {
    iconName = `folder-star${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={ iconName } size={ 25 } color={ tintColor } />;
};
const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    MsgList: {
      screen: msglist,
    },
    Cust: {
      screen: Cust,
    },
    RTable: {
      screen: RTable
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),


    }),
    tabBarOptions: {
      activeTintColor: '#ff6600',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
        height: 50,
        shadowColor: '#ff6600',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
      },
      showLabel: false,
      showIcon: true,
      tabStyle: { // TabBar内单独tab的样式
        height: 50,
      },
      labelStyle: { // TabBar内单独tab的文字样式
        fontSize: 50,
      },
    }
  }
);
const OtherStack = createStackNavigator(
  {
    Customer: {
      screen: Customer,
    },
    videodetail: {
      screen: videodetail,
    },
    Menu: {
      screen: Menu,
    },
    MusicList: {
      screen: MusicList,
    },
    Msgchart: {screen:imchart},
    chart: { screen: chart, },
    TaskView:{screen: TaskView,},
    Menlist:{screen: Menlist,}
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        activeTintColor: 'red',
      inactiveTintColor: '#fff',
        height: 40,
        backgroundColor:'#fff'
      }
    }
  }


);

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//     Cust:{
//       screen:Cust,
//     },
//     RTable:{
//       screen:RTable,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor:'#cccfff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );
const AuthStack = createStackNavigator({
  Login: Login,
})
 const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: RootStack,
    Auth: AuthStack,
    Other: OtherStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoading,
//     App: RootStack,
//     Auth: AuthStack,
//     Other: OtherStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// )
// );

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
}
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({

  shadowStyle: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    elevation: 4,
  }
});