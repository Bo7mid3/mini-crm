import STORE from "@store";
import { setLanguage } from "@store/slices/language";

export default async function setUpTranslator() {
  const id = "eng";
  const language = {
    id,
    dictionary: await require(`../assets/language/${id}.json`),
  };
  await STORE.dispatch(setLanguage(language));
}
