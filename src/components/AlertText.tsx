import { FC } from 'react'
import { Center } from './Positioners/Center'
import styles from '../../styles/Home.module.css'
import { Text } from './Text/Text'

export const AlertText: FC = () => {
  return (
    <p className={styles.alertText}>
      <Center column>
        <Text fontSize={24} color="white" fontWeight={700}>
          Przekaż 1%
        </Text>
        <Text fontSize={14} fontWeight={500} color="white">
          Fundacja „Na Ratunek Dzieciom z Chorobą Nowotworową”
        </Text>
        <Text color="white" fontSize={18} fontWeight={300}>
          KRS 00000{' '}
          <Text color="white" fontSize={22} fontWeight={700}>
            86210
          </Text>
        </Text>
        <Text color="white" fontSize={12} fontWeight={300}>
          cel szczegółowy:
        </Text>
        <Text color="white" fontWeight={900} fontSize={22}>
          Amelia Morawska
        </Text>
      </Center>
    </p>
  )
}
