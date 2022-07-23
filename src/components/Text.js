import React from 'react'

import { Text as TextPaper } from 'react-native-paper';

import THEME from '@constants/theme';
import Translator from './Translator';

export default function Text({ children, ...props }) {
  return (
    <TextPaper theme={THEME} {...props}>
        <Translator>{children}</Translator>
    </TextPaper>
  )
}