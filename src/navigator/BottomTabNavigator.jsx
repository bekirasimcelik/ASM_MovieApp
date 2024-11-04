import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import LocationScreen from '../screens/LocationScreen';
import HomeIconFull from '../assets/Icons/HomeIconFull';
import HomeIcon from '../assets/Icons/HomeIcon';
import MovieIconFull from '../assets/Icons/MovieIconFull';
import MovieIcon from '../assets/Icons/MovieIcon';
import FavouriteIconFull from '../assets/Icons/FavouriteIconFull';
import FavouriteIcon from '../assets/Icons/FavouriteIcon';
import LocationIconFull from '../assets/Icons/LocationIconFull';
import LocationIcon from '../assets/Icons/LocationIcon';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const renderTabIcon = (focused, Icon, IconFull) => {
  return focused ? <IconFull /> : <Icon />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(focused, HomeIcon, HomeIconFull),
        }}
      />
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(focused, MovieIcon, MovieIconFull),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(focused, FavouriteIcon, FavouriteIconFull),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(focused, LocationIcon, LocationIconFull),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    // bottom: 20,
    left: '10%',
    right: '10%',
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 5}, // Gölge konumu
    shadowOpacity: 0.5, // Gölge opaklığı
    shadowRadius: 10, // Gölge yarıçapı
    elevation: 5, // Android'deki gölge için
    backgroundColor: '#0A091E',
  },
});
