import Grid from '@mui/material/Grid'
import React, { ReactElement } from 'react'
import { Typography } from '..'
import * as S from './styles'

interface SkillbarProps {
  name: string
  percentage: number
}

function Skillbar({ name, percentage }: SkillbarProps): ReactElement {
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
            transition={{ duration: 1 }}
            animate={{
              width: ['0%', `${percentage}%`],
            }}
          />
        </S.Skillbar>
      </Grid>
    </Grid>
  )
}

export { Skillbar }
