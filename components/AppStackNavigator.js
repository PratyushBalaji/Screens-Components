import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import DetailsScreen from '../screens/DetailsScreen';


export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen: BookDonateScreen,
    navigationOptions :{
      headerShown : false,
    }
  },
  ReceiverDetails: {
    screen: DetailsScreen,
    navigationOptions :{
        headerShown : false,
    }
  }
},{initialRouteName : 'BookDonateList'});