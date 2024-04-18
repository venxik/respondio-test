import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  CompleteScreen,
  UpcomingScreen,
  AiringScreen,
  FavoriteScreen,
  DetailScreen,
} from '@Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="AiringScreen" component={AiringScreen} />
      <Tab.Screen name="CompleteScreen" component={CompleteScreen} />
      <Tab.Screen name="UpcomingScreen" component={UpcomingScreen} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{title: 'List of Anime'}}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{title: 'Favorites'}}
      />
    </Drawer.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Details" component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
