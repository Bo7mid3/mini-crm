import STORE from "@store";
import { setLanguage } from "@store/slices/language";

export default async function setUpTranslator() {
  const id = "";
  var dictionary;
  switch (id) {
    default:
      dictionary = await require("@assets/language/eng.json");
  }
  const language = {
    id,
    dictionary,
  };
  STORE.dispatch(setLanguage(language));
}

export function translate(key) {
  return STORE.getState().language.dictionary[key] || key;
}
