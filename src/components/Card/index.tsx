import { useTheme } from '@mui/material'
import { ReactElement } from 'react'
import { Typography } from '@/components/Typography'
import { defaultTransition, fadeInUpVariants } from '@/constants/framerMotion'
import * as S from './styles'

interface CardProps {
  title: string
  duration: string
  text: string
  delay?: number
}

function Card({ delay = 0.1, title, duration, text }: CardProps): ReactElement {
  const theme = useTheme()

  return (
    <S.Card
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay }}
    >
      <Typography variant="h5" mb={1} fontWeight={700}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        mt={1.25}
        mb={1.25}
        color={theme.palette.primary.main}
      >
        {duration}
      </Typography>
      <Typography m={0}>{text}</Typography>
    </S.Card>
  )
}

export { Card }
