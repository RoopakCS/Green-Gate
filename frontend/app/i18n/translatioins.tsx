/*const translations = {
    en: {
      welcome: "Welcome to Harvest Hub",
      name: "Name",
      email: "Email",
      mobile: "Mobile",
      password: "Password",
      register: "Register",
      userExists: "User already exists",
      userCreated: "User Created",
    },
    hi: {
      welcome: "हार्वेस्ट हब में आपका स्वागत है",
      name: "नाम",
      email: "ईमेल",
      mobile: "मोबाइल",
      password: "पासवर्ड",
      register: "रजिस्टर करें",
      userExists: "उपयोगकर्ता पहले से मौजूद है",
      userCreated: "उपयोगकर्ता बनाया गया",
    },
    // Add more languages as needed
  };
  
  export default translations;
  */

  import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations
const resources = {
  en: {
    translation: {
        welcome: "Welcome to Harvest Hub",
        name: "Name",
        email: "Email",
        mobile: "Mobile",
        password: "Password",
        register: "Register",
        userExists: "User already exists",
        userCreated: "User Created",
    },
  },
  hi: {
    translation: {
        welcome: "हार्वेस्ट हब में आपका स्वागत है",
        name: "नाम",
        email: "ईमेल",
        mobile: "मोबाइल",
        password: "पासवर्ड",
        register: "रजिस्टर करें",
        userExists: "उपयोगकर्ता पहले से मौजूद है",
        userCreated: "उपयोगकर्ता बनाया गया",
    },
  },
  tam: {
    translation: {
        welcome: "பண்டிகை களம் வரவேற்கிறது",
        name: "பெயர்",
        email: "மின்னஞ்சல்",
        mobile: "மொபைல்",
        password: "கடவுச்சொல்",
        register: "பதிவு செய்யவும்",
        userExists: "பயனர் ஏற்கனவே உள்ளது",
        userCreated: "பயனர் உருவாக்கப்பட்டது"
    },
  },
  tel: {
    translation: {
        welcome: "పంట హబ్ కు స్వాగతం",
        name: "పేరు",
        email: "ఈమెయిల్",
        mobile: "మొబైల్",
        password: "పాస్వర్డ్",
        register: "నమోదు",
        userExists: "వాడుకరి ఇప్పటికే ఉన్నారు",
        userCreated: "వాడుకరి సృష్టించబడింది"
    }
  }
};

i18n
  .use(initReactI18next) // Connects i18next instance with React
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
