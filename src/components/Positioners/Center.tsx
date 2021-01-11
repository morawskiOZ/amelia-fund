import * as React from 'react'
import { FC } from 'react'
import styles from './Center.module.css'

interface Props {
  column?: boolean
}

export const Center: FC<Props> = ({ children, column = false }) => {
  return (
    <>
      <div
        className={styles.container}
        style={{ flexDirection: column ? 'column' : 'row' }}
      >
        {children}
      </div>
    </>
  )
}
