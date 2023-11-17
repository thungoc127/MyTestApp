"use client";
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid
} from 'react-native';


function ToDoForm({onAddTask}) {
  const [task, setTask] = useState('');
  const showToast = () => {
    ToastAndroid.show('Task is empty!', ToastAndroid.LONG);
  };
  const handleSetTask = () => {
    if (task.trim() !== '') {
      const result = onAddTask(task);
      console.log('Result:', result); // You can do something with the result
      setTask('');
    }
    else{
      showToast
    }
    
  };
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task..."
      value={task}
      onChangeText={(text) => setTask(text)}
    />
    <Button title="Add" onPress={handleSetTask} />
  </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
