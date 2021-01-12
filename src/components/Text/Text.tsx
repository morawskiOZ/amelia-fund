import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import styles from './Text.module.css'

interface Props {
  children: ReactNode
  color?: string
  fontSize?: number
  fontWeight?: 500 | 400 | 700 | 900 | 300
}

export const Text = ({
  color = '#cf4646',
  fontSize,
  children,
  fontWeight = 400,
}: Props): ReactElement => {
  return (
    <span className={styles.text} style={{ color, fontSize, fontWeight }}>
      {children}
    </span>
  )
}
