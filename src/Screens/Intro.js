import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");
const Intro = ({onfinish}) => {
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");

  const handleContinue=async()=>{
    const getUserList= JSON.parse( await AsyncStorage.getItem('userNames'))||[];
    getUserList.includes(userName)?getUserList:getUserList.push(userName);
    await AsyncStorage.setItem('userNames', JSON.stringify(getUserList));

    const User={ "name":name, "userName":userName };
   await AsyncStorage.setItem('user', JSON.stringify(User));
   if(onfinish) onfinish();
  }

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/474x/04/c2/3d/04c23d5d2d6c90fbaab2c1c0704d1102.jpg",
      }}
      style={{ width: width, height: "100%" }}
    >
      <Image
        source={require("./lineImage.png")}
        style={{ width: width, height: 300 }}
      />
      <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          placeholder="Hi!  Your Name Please..."
          placeholderTextColor="#ECECEC"
          value={name}
          onChangeText={(e) => setName(e)}
          style={styles.inputBox}
        />

        <TextInput
          placeholder="Give yourself a Unique UserName..."
          placeholderTextColor="#ECECEC"
          value={userName}
          onChangeText={(e) => setuserName(e)}
          style={styles.inputBox}
        />
        
            {
                userName.length>5?
                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <AntDesign name="arrowright" size={50} color="black" />
                </TouchableOpacity>:null
            }
          
        
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
 
  inputBox: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 20,
    fontSize: 15,
    fontStyle: "italic",
    backgroundColor: "#7D93AE",
    marginTop: 30,
  },
  button: {
    width: 70,
    backgroundColor: "#E8C699",
    height: 70,

    borderRadius: 35,
    borderWidth: 1,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 50,
  },
});
