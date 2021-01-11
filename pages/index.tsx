import Head from 'next/head'
import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from '../src/components/layout'
import { siteTitle } from '../src/constants'
import { Text } from '../src/components/Text/Text'
import { Center } from '../src/components/Positioners/Center'
import styles from '../styles/Home.module.css'
import { AlertText } from '../src/components/AlertText'

const Home = (): ReactElement => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={styles.intro}>
      <Center>
        <Text fontWeight={300} color="#474242" fontSize={40}>
          Moje życie, <Text fontSize={40}>Twój&nbsp;1%</Text>
        </Text>
      </Center>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src="/images/Amelia.png"
          layout="responsive"
          width={700}
          height={475}
          quality={75}
        />
      </div>
      <section className={styles.textContainer}>
        <p className={styles.infoText}>
          <Text color="black">
            Drodzy przyjaciele! Prosimy o przekazanie 1% podatku na dodatkowe
            koszty leczenia naszej córeczki Amelii. Amelia choruje na ostrą
            białaczkę limfoblastyczną. Leczenie trwa min. 2 lata. Koszt głównej
            terapii pokrywa Przylądek Nadziei, mimo to pozostają koszty: -
            środków ochrony i pielęgnacji do wkłucia centralnego (tzw. Broviac)
            - dodatkowych leków - medycznych środków do higieny osobistej -
            rehabilitacji Dziękujemy za wsparcie! Rodzice
          </Text>
        </p>
        <AlertText />
        <p className={styles.infoText}>
          <Center column>
            <Text color="black">Jak przekazać swój 1% podatku?</Text>{' '}
            <Text color="black">Nic prostrzego! Zaglądnij na:</Text>{' '}
            <a href="https://www.podatki.gov.pl/pit/twoj-e-pit/jak-przekazac-1-podatku-w-usludze-twoj-e-pit/">
              Szczegółowe instrukcja na oficjalnym portalu podatkowym
            </a>
          </Center>
        </p>
        {/* <p className={styles.detailsText}> */}
        {/*  <Center column> */}
        {/*    <Text fontWeight={700} fontSize={24}> */}
        {/*      Przekaż darowiznę */}
        {/*    </Text>{' '} */}
        {/*    <Text fontSize={20}> */}
        {/*      konto imienne:{' '} */}
        {/*      <Text fontWeight={700} fontSize={20}> */}
        {/*        11 1160 2202 0000 0001 0214 2867 */}
        {/*      </Text> */}
        {/*    </Text> */}
        {/*    <Text fontSize={20}> */}
        {/*      + tytuł wpłaty:{' '} */}
        {/*      <Text fontWeight={700} fontSize={24}> */}
        {/*        Amelia Morawska */}
        {/*      </Text> */}
        {/*    </Text> */}
        {/*  </Center> */}
        {/* </p> */}
      </section>
    </section>
  </Layout>
)

export default Home
