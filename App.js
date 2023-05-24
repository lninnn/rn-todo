/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  View,
  Button
} from 'react-native';
import Item from './components/Item'
function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [done,setDone] = useState(0)
  const handleAddTodo = () =>{
    if (todo.length> 0 ){
      const buffer = {
        id: Date.now().toString(),
        value:false,
        text: todo
      }
      setTodos([...todos, buffer])
    }
  }
  const handleChange = (id, value) => {
    let buffer = todos.length
    let updated =  todos.map((item)=>{
      if(item.id == id){
        item.value = value
      }
      if(!item.value){
        buffer = buffer -1
      }
      return item
    })
    setDone(buffer) 
    setTodos(updated)  
  }

  const handleDelete = (id) =>{
    let updated = todos.filter((item)=>item.id !==id)
    setTodos(updated)
  }

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">     
        <View> 
          <TextInput
          style = {styles.input}
          placeholder='add Todo'
          onChangeText={(text)=>setTodo(text)}
          />
          <Button
          title='ADD'
          onPress={handleAddTodo}
          />
        </View>  
        {todos.map((item)=><Item 
        key={item.id}
          item = {item}
          handleChange={handleChange}
          handleDelete = {handleDelete}
          />)}
      </ScrollView>
      <Text style = {styles.complete}>{done}/{todos.length}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%'
  },
  input:{
    height:50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding:6,
    margin:6,
  },
  complete:{
    position:'absolute',
    backgroundColor:'white',
    bottom:12,
    right:12,
  },
});

export default App;
