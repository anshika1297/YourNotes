import { StyleSheet, SafeAreaView, Text,Dimensions, TouchableOpacity, ImageBackground, View } from 'react-native'
import React from 'react';
import NoteDetail from './NoteDetail';
const { width } = Dimensions.get("window");

const SingleNote = ({item, userName, setNotesData}) => {
  
  const [openEdit, setOpenEdit]=React.useState(false);
  return (
    
    <SafeAreaView style={{width:"50%", padding:3}}>
       <ImageBackground source={require("./notes.png")} style={{width:"100%", height:170}}>
       <TouchableOpacity onPress={()=>setOpenEdit(true)} style={{ padding:5, width:"95%", height:160, paddingVertical:20, opacity:1, borderColor:"#7D93AE"}}>
     
       <Text numberOfLines={5} style={{paddingTop:30, paddingLeft:10, fontSize:15}}>{item.noteDesc}</Text>
       
      </TouchableOpacity>
      </ImageBackground>
      <View style={{paddingTop:5, paddingBottom:10, alignItems:"center", justifyContent:"center"}}>
      <Text numberOfLines={1} style={{fontSize:16, fontWeight:"bold"}}>{item.title}</Text>
      <View style={{flexDirection:"row", paddingVertical:3}}>
      <Text style={{fontSize:12, color:"#7D93AE"}}>{item.date}, </Text>
      <Text style={{fontSize:12, color:"#7D93AE"}}>{item.time}</Text>
      </View>
      </View>
      <NoteDetail visible={openEdit} item={item} onClose={()=>setOpenEdit(false)} userName={userName} setNotesData={setNotesData}/>
    </SafeAreaView>
    
  )
}

export default SingleNote

const styles = StyleSheet.create({})