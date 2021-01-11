import Head from 'next/head'
import styles from './layout.module.css'
import {siteDesc, siteTitle} from "../constants";
import {Header} from "./Header/Header";

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content={siteDesc}
                />
                <meta
                    property="og:image"
                    content={'src'}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
