
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    debug: false, // Set to true for development debugging
    fallbackLng: "en", // Fallback language if detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          // Button specific
          saveChanges: "Save Changes",
          submitApplication: "Submit Application",
          cancelOperation: "Cancel",
          deleteItem: "Delete Item",
          learnMore: "Learn More",
          viewDetails: "View Details",
          continue: "Continue",
          getStarted: "Get Started",
          // Generic
          loading: "Loading...",
          // App specific
          toggleDarkMode: "Toggle Dark Mode",
          toggleLanguage: "Switch to Turkish",
          currentLanguage: "Current Language: English",
          buttonShowcase: "Button Component Showcase",
          primaryButton: "Primary",
          secondaryButton: "Secondary",
          ghostButton: "Ghost",
          dangerButton: "Danger",
          successButton: "Success",
          warningButton: "Warning",
          infoButton: "Info",
          glassButton: "Glass Effect",
          smallButton: "Small",
          mediumButton: "Medium",
          largeButton: "Large",
          fullWidthButton: "Full Width Button",
          buttonWithIcon: "Icon Left",
          buttonWithIconRight: "Icon Right",
          loadingButton: "Loading Button",
          disabledButton: "Disabled Button",
          welcomeToBookmeza: "Welcome to Bookmeza Design System",
          rtlSectionTitle: "RTL Layout Test"
        },
      },
      tr: {
        translation: {
          // Button specific
          saveChanges: "Değişiklikleri Kaydet",
          submitApplication: "Başvuruyu Gönder",
          cancelOperation: "İptal",
          deleteItem: "Öğeyi Sil",
          learnMore: "Daha Fazla Bilgi",
          viewDetails: "Detayları Görüntüle",
          continue: "Devam Et",
          getStarted: "Başla",
          // Generic
          loading: "Yükleniyor...",
          // App specific
          toggleDarkMode: "Karanlık Modu Değiştir",
          toggleLanguage: "Switch to English",
          currentLanguage: "Geçerli Dil: Türkçe",
          buttonShowcase: "Buton Bileşeni Tanıtımı",
          primaryButton: "Birincil",
          secondaryButton: "İkincil",
          ghostButton: "Hayalet",
          dangerButton: "Tehlike",
          successButton: "Başarı",
          warningButton: "Uyarı",
          infoButton: "Bilgi",
          glassButton: "Cam Efekti",
          smallButton: "Küçük",
          mediumButton: "Orta",
          largeButton: "Büyük",
          fullWidthButton: "Tam Genişlik Buton",
          buttonWithIcon: "Simge Solda",
          buttonWithIconRight: "Simge Sağda",
          loadingButton: "Yükleniyor Butonu",
          disabledButton: "Devre Dışı Buton",
          welcomeToBookmeza: "Bookmeza Tasarım Sistemine Hoş Geldiniz",
          rtlSectionTitle: "RTL Düzen Testi"
        },
      },
    },
  });

export default i18n;
