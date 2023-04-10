import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import NoteInput from "../components/NoteInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteList from "../components/NoteList";

const { width } = Dimensions.get("window");
const NoteScreen = ({ user }) => {
  const [greeting, setGreeting] = useState("");
  const [bgUrl, setBgurl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GorApnPGD1dt2PN4Ltpwrxigj-5CKQSxUA&usqp=CAU");
  const [search, setSearch] = useState("");
  const [modal, setModal]=useState(false);
  const [notesData, setNotesData]=useState([]);

  const greetTime = () => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      setGreeting("Morning");
      setBgurl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GorApnPGD1dt2PN4Ltpwrxigj-5CKQSxUA&usqp=CAU"
      );
    }
    if (hour >= 13 && hour < 17) {
      setGreeting("AfterNoon");
      setBgurl(
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
      );
    }
    if (hour >= 17 && hour < 24) {
      setGreeting("Evening");
      setBgurl(
        "https://i.pinimg.com/736x/e0/a5/30/e0a530fb4ece2174390452ec2e59360b--twitter-backgrounds-cool-backgrounds.jpg"
      );
    }
    getNotes();
  };

  const onSubmit = async (title,note) => {

        const userData={
          "id":Date.now(),
            "title":title,
            "noteDesc":note,
            "time":new Date().toLocaleTimeString(),
            "date":new Date().toLocaleDateString(),
        }

      const updatedNotes=[...notesData,userData]
    await AsyncStorage.setItem("user"+user.userName, JSON.stringify(updatedNotes));
    setNotesData(updatedNotes);
  };

 const getNotes=async()=>{
  const getUserNotes = await AsyncStorage.getItem("user"+user.userName)||[];
  if(getUserNotes!==null)
  setNotesData(JSON.parse(getUserNotes));
  console.log(notesData);
  
 }

  useEffect(() => {
    greetTime();
    getNotes();
    
  },[]);
  return (
    <ImageBackground
      source={{ uri: bgUrl }}
      style={{ width: width, height: "100%" }}
    >
      <SafeAreaView style={{ alignSelf: "center" }}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search your Notes by Title...."
            placeholderTextColor="#ECECEC"
            value={search}
            onChangeText={(e) => setSearch(e)}
            style={styles.inputBox}
          />
          <AntDesign
            name="search1"
            size={22}
            color="#ECECEC"
            style={{ marginTop: 13 }}
          />
        </View>
        <Text style={styles.GreetText}>
          Hey {user.name}, Good {greeting}!
        </Text>
        {
          notesData.length===0?
          <View style={styles.emptyContainer}>
          <Text style={{color:"#7D93AE", fontSize:17, padding:15}}>Something on Your Mind?</Text>
          <Text style={{fontWeight:"bold", color:"#7D93AE",fontSize:25}}>ADD NOTES</Text>
         < TouchableOpacity style={styles.button} >
         <FontAwesome name="pencil-square-o" size={35} color="white" onPress={()=>setModal(true)} />
                
                </TouchableOpacity>
        </View>:<View><NoteList notesData={notesData}/>< TouchableOpacity style={[styles.button,{position:"absolute",zIndex:-1, right:15,top:400}]} >
        <FontAwesome name="pencil" size={30} color="white" onPress={()=>setModal(true)} />
                </TouchableOpacity></View>
        }
        
       <NoteInput visible={modal}  onClose={()=>setModal(false)} onSubmit={onSubmit}/>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal:10,
    paddingHorizontal:20,
    borderRadius: 30,
    backgroundColor: "#7D93AE",
    justifyContent:"space-around"
  },
  inputBox: {
    width: 220,
    height: 50,
    fontSize: 15,

  },
  GreetText:{
    fontSize:18,
    fontWeight:"bold",
    alignSelf:"center",
    fontStyle:"italic",
    color:"#D2796C",
  },
  emptyContainer:{
    flex:1, alignItems:"center", justifyContent:"center"
  },
  button: {
    width: 60,
    backgroundColor: "#72B2C9",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 30,
    zIndex:1
  },
});