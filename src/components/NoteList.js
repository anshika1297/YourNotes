import { StyleSheet,SafeAreaView, ScrollView, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react';
import SingleNote from './SingleNote';
const { width } = Dimensions.get("window");

const NoteList = ({notesData}) => {
  return (
    <SafeAreaView style={{
    paddingRight:10,
      paddingVertical:30,
      
    }}>
       <FlatList
        data={notesData}
        renderItem={({item}) => <SingleNote item={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        
      />
    </SafeAreaView>
  )
}

export default NoteList

const styles = StyleSheet.create({})