import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations
const resources = {
  en: {
    translation: {
        welcome: "Login",
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
        welcome: "लॉग इन करें",
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
        welcome: "உள்நுழைக",
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
        welcome: "లాగిన్ చేయండి",
        name: "పేరు",
        email: "ఈమెయిల్",
        mobile: "మొబైల్",
        password: "పాస్వర్డ్",
        register: "నమోదు",
        userExists: "వాడుకరి ఇప్పటికే ఉన్నారు",
        userCreated: "వాడుకరి సృష్టించబడింది"
    }
  },
  mal: {
    translation: {
          welcome: "ലോഗിൻ",
          name: "പേര്",
          email: "ഇമെയിൽ",
          mobile: "മൊബൈൽ",
          password: "പാസ്വേഡ്",
          register: "രജിസ്റ്റർ",
          userExists: "ഉപയോക്താവ് ഇതിനകം നിലവിലുണ്ട്",
          userCreated: "ഉപയോക്താവ് സൃഷ്ടിച്ചു"
    }
  },
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
