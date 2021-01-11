import * as React from 'react'
import { ReactElement } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

interface Props {}

export const Header = ({}: Props): ReactElement => {
  return (
    <header className={styles.container}>
      <a
        className={styles.imageContainer}
        href="https://naratunek.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/images/logo.png" layout="fill" objectFit="cover" />
      </a>
    </header>
  )
}
