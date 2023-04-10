import { StyleSheet, SafeAreaView, Text,Dimensions, TouchableOpacity, ImageBackground, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("window");

const SingleNote = ({item}) => {
  return (
    
    <SafeAreaView style={{width:"50%", padding:1}}>
       <ImageBackground source={require("./noteBg.png")} style={{width:"107%", height:170}}>
       <TouchableOpacity style={{ padding:5, width:"90%", height:150, paddingVertical:20, opacity:1, borderColor:"#7D93AE"}}>
     
       <Text numberOfLines={6} style={{paddingTop:40, paddingLeft:25, fontSize:15}}>{item.noteDesc}</Text>
       
      </TouchableOpacity>
      </ImageBackground>
      <View style={{paddingTop:5, paddingBottom:10}}>
      <Text numberOfLines={1} style={{fontSize:16, fontWeight:"bold", alignSelf:"center"}}>{item.title}</Text>
      <View style={{flexDirection:"row", paddingVertical:3, alignSelf:"center"}}>
      <Text style={{fontSize:12, color:"#7D93AE"}}>{item.date}, </Text>
      <Text style={{fontSize:12, color:"#7D93AE"}}>{item.time}</Text>
      </View>
      </View>
    </SafeAreaView>
    
  )
}

export default SingleNote

const styles = StyleSheet.create({})