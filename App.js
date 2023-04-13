import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Intro from './src/Screens/Intro';
import NoteScreen from './src/Screens/NoteScreen';

export default function App() {
  const [user, setUser]=useState([]);
const FindUser=async()=>{
  const userData= await AsyncStorage.getItem('user')||[];
  setUser(JSON.parse(userData));
 
}

useEffect(()=>{
 FindUser();

},[])
  return (
    <View style={styles.container}>
      
      {user?<NoteScreen user={user}/>:<Intro onfinish={FindUser}/>}
      
    
      <StatusBar style="auto" backgroundColor='#182746' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
