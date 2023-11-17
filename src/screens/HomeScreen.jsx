"use client";
import { useState } from "react";

import ToDoForm from '../components/ToDoForm.jsx';
import ToDoList from '../components/ToDoList.jsx';


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
import MainLayout from "../layouts/MainLayout.jsx";

function HomeScreen({ navigation }) {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };


  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm onAddTask={handleAddTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>

  );
}


export default HomeScreen;
