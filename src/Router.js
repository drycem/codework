import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './context/store';
import Jobs from './pages/Jobs';
import Details from './pages/Details';
import FavoritedJobs from './pages/FavoritedJobs/FavoritedJobs';
import colors from './colors/colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default () => {
  const JobsAndDetailsStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="JobsList" component={Jobs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
  console.log(JSON.stringify(store));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            drawerActiveBackgroundColor: colors.primary,
            drawerActiveTintColor: colors.secondaryColor,
            drawerItemStyle: {borderRadius: 15},
          }}>
          <Drawer.Screen name="Jobs" component={JobsAndDetailsStack} />
          <Drawer.Screen name="Favorited Jobs" component={FavoritedJobs} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
