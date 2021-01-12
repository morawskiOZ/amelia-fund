import { FC } from 'react'
import styles from './layout.module.css'
import { Header } from './Header/Header'
import { Seo } from './Seo'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Seo />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
