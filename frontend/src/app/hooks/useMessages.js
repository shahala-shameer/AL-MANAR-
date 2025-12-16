import en from "../messages/en.json";
import ar from "../messages/ar.json";

export default function useMessages(lang = "en") {
  const messages = { en, ar };
  return messages[lang] || messages["en"];
}
