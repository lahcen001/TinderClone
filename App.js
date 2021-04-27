import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar'
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';

export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=male&results=10')
      setUsers(data.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting usres', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 && (
          <Swipes currentIndex={currentIndex} users={users} />
        )

        }
      </View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.66,
    elevation: 7,
  }
});
