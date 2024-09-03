import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function RegisterForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '' });
  const [message, setMessage] = useState<string>('');

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/register', formData);
      setMessage(response.data.data);
    } catch (error) {
      setMessage(t('userExists'));
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/nature-background.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>{t('welcome')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('name')}
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
          placeholderTextColor="#6b8e23" // Olive green
        />
        <TextInput
          style={styles.input}
          placeholder={t('email')}
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          placeholderTextColor="#6b8e23" // Olive green
        />
        <TextInput
          style={styles.input}
          placeholder={t('mobile')}
          value={formData.mobile}
          onChangeText={(text) => handleChange('mobile', text)}
          placeholderTextColor="#6b8e23" // Olive green
        />
        <TextInput
          style={styles.input}
          placeholder={t('password')}
          value={formData.password}
          secureTextEntry
          onChangeText={(text) => handleChange('password', text)}
          placeholderTextColor="#6b8e23" // Olive green
        />
        <View style={styles.buttonContainer}>
          <Button 
            title={t('register')} 
            onPress={handleSubmit} 
            color="#8fbc8f" // Light green
          />
        </View>
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    //backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slight white overlay
    marginHorizontal: 30,
    borderRadius: 15, // Rounded corners
  },
  heading: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#556b2f', // Dark olive green
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    fontFamily: 'sans-serif-medium', // Change to a more organic font if available
  },
  input: {
    borderWidth: 1,
    borderColor: '#8fbc8f', // Light green
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f5fffa', // Mint cream for input background
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    color: '#b22222', // Firebrick red
    fontFamily: 'sans-serif',
  },
});
