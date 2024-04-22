import * as React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  CompleteScreen,
  UpcomingScreen,
  AiringScreen,
  FavoriteScreen,
  DetailScreen,
} from '@Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackParamList } from '@Model/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const TabBarItem = ({
  route,
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
  route: RouteProp<ParamListBase, string>;
}) => {
  let iconName;

  if (route.name === 'AiringScreen') {
    iconName = 'airplane';
  } else if (route.name === 'CompleteScreen') {
    iconName = 'flag';
  } else if (route.name === 'UpcomingScreen') {
    iconName = 'search-sharp';
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName as any} size={size} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return TabBarItem({ route, focused, color, size });
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="AiringScreen"
        component={AiringScreen}
        options={{ tabBarLabel: 'Airing' }}
      />
      <Tab.Screen
        name="CompleteScreen"
        component={CompleteScreen}
        options={{ tabBarLabel: 'Completed' }}
      />
      <Tab.Screen
        name="UpcomingScreen"
        component={UpcomingScreen}
        options={{ tabBarLabel: 'Upcoming' }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ title: 'List of Anime' }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ title: 'Favorites' }}
      />
    </Drawer.Navigator>
  );
};

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
          <RootStack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Details"
            component={DetailScreen}
            initialParams={{ id: 0 }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
