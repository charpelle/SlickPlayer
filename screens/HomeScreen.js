import React, { Component } from 'react'
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';


import Card from '../components/card';
import MiniPlayer from '../components/miniPlayer';
import { getAllTracks } from '../redux/actions/music';


import colors from '../utils/colors';
import styles from './homeStyles';

class HomeScreen extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.background, true);
    }
    this.props.getAllTracks();
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/music.jpeg')}
          style={styles.image}
        />
        <ScrollView style={styles.whiteBack}>
          <View style={styles.title}>
            <Text style={styles.titleText}>MAD PLAYER</Text>
            <Text style={styles.titleH2}> Built with ❤ by Charpelle</Text>
            <Text style={styles.tracksStats}>{7} Tracks</Text>
          </View>
            <TouchableOpacity>
              <LinearGradient
                start={{x: 0.02, y: 0.1}} end={{x: 0.5, y: 0.50}}
                colors={[colors.purple, colors.accent]}
                style={styles.shuffleButton}>
                  <Text style={styles.shuffleText}>SHUFFLE PLAY </Text>
              </LinearGradient>
            </TouchableOpacity>
          <View style={styles.tabBar}>
            <Card />
          </View>
        </ScrollView>
        <MiniPlayer />
      </View>
    )
  }
}


const mapStateToProps = state => state;

export default connect(() => mapStateToProps, { getAllTracks })(HomeScreen);
