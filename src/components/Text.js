import React from 'react'

import { Text as TextPaper } from 'react-native-paper';

import THEME from '@constants/theme';

export default function Text({ children, ...props }) {
  return (
    <TextPaper theme={THEME} {...props}>
        {children}
    </TextPaper>
  )
}