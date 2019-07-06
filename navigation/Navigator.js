import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreeen from '../screens/HomeScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';

const Navigator = createStackNavigator({
  Home: HomeScreeen,
  NowPlaying: NowPlayingScreen
}, {
  initialRouteName: "Home",
  headerMode: 'none'
});

export default createAppContainer(Navigator)