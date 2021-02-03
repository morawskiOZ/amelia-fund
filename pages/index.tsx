import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from '../src/components/layout'
import { Text } from '../src/components/Text/Text'
import { Center } from '../src/components/Positioners/Center'
import styles from '../styles/Home.module.css'
import { AlertText } from '../src/components/AlertText'

const Home = (): ReactElement => (
  <Layout>
    <section className={styles.intro}>
      <Center>
        <Text fontWeight={300} color="#474242" fontSize={40}>
          Moje życie, <Text fontSize={40}>Twój&nbsp;1%</Text>
        </Text>
      </Center>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src="/images/Amelia.jpg"
          layout="responsive"
          width={700}
          height={475}
          quality={50}
          objectFit="contain"
        />
      </div>
      <section className={styles.textContainer}>
        <div className={styles.infoText}>
          <Text color="black">
            <div className={styles.marginBottom}>
              <Text color="black" fontWeight={700}>
                Drodzy przyjaciele!
              </Text>
            </div>
            Prosimy o przekazanie 1% podatku na dodatkowe koszty leczenia naszej
            córeczki Amelii. Amelia choruje na ostrą białaczkę limfoblastyczną.
            Leczenie trwa min. 2 lata. Koszt głównej terapii pokrywa Przylądek
            Nadziei, mimo to pozostają koszty: środków ochrony i pielęgnacji do
            wkłucia centralnego (tzw. Broviac), dodatkowych leków, medycznych
            środków do higieny osobistej oraz rehabilitacji.
            <div className={styles.thanksNote}>
              <Text color="black" fontWeight={900}>
                Dziękujemy za wsparcie! <br /> Rodzice
              </Text>
            </div>
          </Text>
        </div>
        <AlertText />
        <div className={styles.instructions}>
          <Center column>
            <Text color="black" className={styles.marginBottom}>
              Jak przekazać swój 1% podatku?
            </Text>
            <Text color="black">Nic prostrzego! Zaglądnij na:</Text>{' '}
            <a
              href="https://www.podatki.gov.pl/pit/twoj-e-pit/jak-przekazac-1-podatku-w-usludze-twoj-e-pit/"
              style={{ padding: '15px 0', textAlign: 'center' }}
            >
              Szczegółowe instrukcję na oficjalnym portalu podatkowym
            </a>
          </Center>
        </div>
        <div className={styles.detailsText}>
          <Center column>
            <Text fontWeight={700} fontSize={24}>
              Możesz również przekazać darowiznę
            </Text>{' '}
            <Text fontSize={20}>
              konto imienne:{' '}
              <Text fontWeight={700} fontSize={20}>
                11 1160 2202 0000 0001 0214 2867
              </Text>
            </Text>
            <Text fontSize={20}>
              + tytuł wpłaty:{' '}
              <Text fontWeight={700} fontSize={24}>
                Amelia Morawska
              </Text>
            </Text>
          </Center>
        </div>
      </section>
    </section>
  </Layout>
)

export default Home
