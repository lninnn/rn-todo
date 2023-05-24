import CheckBox from '@react-native-community/checkbox';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {CheckTodo, DelTodo} from './../actions/ToDoAction'

class Item extends Component{
  constructor(props){
    super(props);
    this.handleChecked = this.handleChecked.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  handleChecked(){
      const buffer = {
        id : this.props.item.id,
        value: !this.props.item.value,
        text: this.props.item.text
      }
      this.props.dispatch(CheckTodo(buffer))
    }
 
  handleDel = () =>{
    this.props.dispatch(DelTodo(this.props.item.id))
  }
  render(){
  return(
    <View key={this.props.item.id} style = {styles.toDoContainer}>
          <CheckBox
        disabled={false}
        value = {this.props.item.value}
        onValueChange={this.handleChecked}
            /> 
            <Text style = {(!this.props.item.value)?'':styles.completedText}>{this.props.item.text}</Text> 
            <Button 
            title = 'Delete'
            onPress={this.handleDel}
            />   
        </View>
  )
  }
}
const styles = StyleSheet.create({

  toDoContainer:{
    margin: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completedText:{
    textDecorationLine: 'line-through',
  }
});
 export default Item;