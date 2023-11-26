"use client";
import { useState,React } from "react";
import ToDoForm from '../components/ToDoForm.jsx';
import ToDoList from '../components/ToDoList.jsx';
import MainLayout from "../layouts/MainLayout.jsx";
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
      <SafeAreaView >
      <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <ToDoList tasks={tasks} />
        <ToDoForm onAddTask={handleAddTask} />

      </SafeAreaView>
    </MainLayout>

  );
}

export default HomeScreen;
