import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Footer = () => {
	return (
	  <View style={styles.footer}>
		<Text style={styles.text}>© 2023 TODOLISTAPP</Text>
	  </View>
	);
  };

const MainLayout = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
      <Footer />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
	backgroundColor: '#3498db', // Change to your preferred color
	padding: 10,
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
  },
  text: {
	color: 'white',
	fontSize: 14,
  },
});



export default MainLayout;