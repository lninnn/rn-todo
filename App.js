import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  View,
  Button
} from 'react-native';

import Item from './components/Item'

import store from './store';
import {Getter, AddTodo, CheckTodo, DelTodo} from './actions/ToDoAction'
import { useSelector, useDispatch, Provider } from 'react-redux';

function AppComp() {
  const [todo, setTodo] = useState('')
  // const [todos, setTodos] = useState()
  const [done,setDone] = useState(0)
  const dispatch = useDispatch()
  const item = Getter()
  let todos = item.state.todo.todos
  console.log(todos)
  const handleAddTodo = () =>{
    if (todo.length> 0 ){
      const buffer = {
        id: Date.now().toString(),
        value:false,
        text: todo
      }
      dispatch(AddTodo(buffer))
    }
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
            dispatch = {dispatch}
            // handleChange={handleChange}
            />)}
        </ScrollView>
        <Text style = {styles.complete}>{done}/{todos.length}</Text>
      </SafeAreaView>
  );
}
function App(){
  return(
    <Provider store = {store}>
      <AppComp/>
    </Provider>
  )
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
