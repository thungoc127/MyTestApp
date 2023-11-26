"use client";
import React from 'react';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoForm from './src/components/ToDoForm.jsx';
import ToDoList from './src/components/ToDoList.jsx';
import HomeScreen from "./src/screens/HomeScreen.jsx";
import AboutScreen from "./src/screens/AboutScreen.jsx";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function App() {
  const Stack = createNativeStackNavigator();
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;
