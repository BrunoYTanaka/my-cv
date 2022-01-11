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
        <Typography variant="h5" margin="0 0 8px" fontWeight={700}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          margin="10px 0"
          color={theme.palette.secondary.main}
        >
          {duration}
        </Typography>
        <Typography margin="0">{text}</Typography>
      </S.Card>
    </MotionBox>
  )
}

export { Card }
