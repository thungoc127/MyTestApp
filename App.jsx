"use client";
import { useState } from "react";

import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';


import React from 'react';
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
  const [tasks, setTask] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);



  return (
    <SafeAreaView>
    <ToDoList tasks={tasks}/>
    <ToDoForm/>
    </SafeAreaView>
  );
}


export default App;
