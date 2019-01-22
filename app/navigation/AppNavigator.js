import { StackNavigator } from 'react-navigation';
import screens from './screens';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/Home/HomeScreenContainer';

const routes = {
  // [screens.HomeTab]: HomeNavigator,
  [screens.Home]: HomeScreen,
};

const AppNavigator = StackNavigator(routes, {
  tabBarOptions: {},
});

export default AppNavigator;
