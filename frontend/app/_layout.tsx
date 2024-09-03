import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import './i18n/translatioins'; // Import i18n config

export default function Layout() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{t('welcome')}</Text>
        <Picker
          selectedValue={i18n.language}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="हिन्दी" value="hi" />
          <Picker.Item label="தமிழ்" value="tam" />
          <Picker.Item label="తెలుగు" value="tel" />
          {/* Add more languages here */}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
  },
});
