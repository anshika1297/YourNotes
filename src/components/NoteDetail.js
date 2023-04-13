import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome, MaterialIcons, Alert } from "@expo/vector-icons";
import NoteInput from "./NoteInput";

const NoteDetail = ({ item, visible, onClose }) => {
  const [modal, setModal] = React.useState(false);

  const handleDelete=()=>{
    console.log("Delete Note");
Alert.alert("Are you Sure?", "This Action Will Delete your Note Permanently.",[
  {
    text:'Delete',
    onPress:()=>{console.log("Deleted")}
  },
  {
    text:'Cancel',
    onPress:()=>{console.log("Cancel")}
  }
],{
  cancelable:true
})
  }
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <ImageBackground
        source={{ uri: "https://wallpaperaccess.com/full/4868950.jpg" }}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity
          style={{ alignSelf: "flex-end", padding: 15 }}
          onPress={closeModal}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 40,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 13, opacity: 0.7 }}>
                  {item.time},{" "}
                </Text>
                <Text style={{ fontSize: 13, opacity: 0.7 }}>{item.date}</Text>
              </View>
            </View>
            <View style={{ paddingTop: 10, opacity: 0.7 }}></View>
          </View>
          <ScrollView>
            <Text style={{ fontSize: 17, alignSelf: "auto", padding: 5 }}>
              {item.noteDesc}
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              position: "absolute",
              alignSelf: "baseline",
              zIndex: 1,
              right: 20,
              bottom: 190,
            },
          ]}
        >
          <FontAwesome
            name="pencil-square-o"
            size={30}
            color="black"
            onPress={() => setModal(true)}
          />
        </TouchableOpacity>
        <TouchableOpacity
        
          style={[
            styles.button,
            {
              position: "absolute",
              alignSelf: "baseline",
              zIndex: 1,
              right: 20,
              bottom: 120,
            },
          ]}
        >
          <MaterialIcons name="delete" size={30} color="black" onPress={() => handleDelete} />
        </TouchableOpacity>
      </ImageBackground>
      <NoteInput
        visible={modal}
        item={item}
        isEdit={true}
        onClose={() => setModal(false)}
      />
    </Modal>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  button: {
    width: 50,
    backgroundColor: "#C8AA74",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 1,
  },
});
