import React from "react";

import { useSelector } from "react-redux";

export default function Translator({ children }) {
  const language = useSelector(({ language }) => language);

  return <>{language.dictionary[children] || children}</>;
}
