import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        finding_pair: "Finding a pair...",
        paired_with: "Paired with:",
        user_id: "User ID:",
        star_sign_id: "Star Sign ID:",
        room_number: "Room Number:",
        send_message: "Send Message",
      },
    },
    zh: {
      translation: {
        online_users: "在線用戶",
        finding_pair: "正在尋找配對...",
        paired_with: "已配對:",
        user_id: "用戶ID:",
        star_sign_id: "星座ID:",
        room_number: "房間號碼:",
        send_message: "發送消息",
      },
    },
  },
  lng: "zh", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
