import Grid from '@mui/material/Grid'
import React, { ReactElement } from 'react'
import { Typography } from '..'
import * as S from './styles'

interface SkillbarProps {
  name: string
  percentage: number
}

function Skillbar({ name, percentage }: SkillbarProps): ReactElement {
  const variants = {
    empty: {
      width: 0,
    },
    fill: {
      width: `${percentage}%`,
    },
  }
  const transition = {
    duration: 0.8,
    delay: 0.4,
    ease: 'easeInOut',
  }
  return (
    <Grid container spacing={1} mt={2}>
      <Grid item sm={12} style={{ width: '100%' }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <Typography margin="0">{name}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography margin="0" align="right">
              {`${percentage}%`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} style={{ width: '100%' }}>
        <S.Skillbar>
          <S.SkillbarProgress
            initial="empty"
            viewport={{ once: true }}
            transition={transition}
            variants={variants}
            whileInView="fill"
          />
        </S.Skillbar>
      </Grid>
    </Grid>
  )
}

export { Skillbar }
