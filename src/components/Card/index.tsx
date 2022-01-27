import { useTheme } from '@mui/material'
import { ReactElement } from 'react'
import { MotionBox, Typography } from '..'
import * as S from './styles'

interface CardProps {
  title: string
  duration: string
  text: string
}

function Card({ title, duration, text }: CardProps): ReactElement {
  const theme = useTheme()
  return (
    <MotionBox>
      <S.Card>
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
    </MotionBox>
  )
}

export { Card }
