import React, { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import * as S from './styles'
import { Typography } from '../../Typography'
import { Skillbar, CircularSkillbar } from '@/components'

interface SkillsProps {}

function Skills({}: SkillsProps): ReactElement {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center">
          Technical Skills
        </Typography>
        <Skillbar name="Javascript" percentage={71} />
        <Skillbar name="ReactJS" percentage={68} />
        <Skillbar name="NodeJS" percentage={61} />
        <Skillbar name="Typescript" percentage={55} />
        <Skillbar name="CSS" percentage={68} />
      </Grid>
      <Grid item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center">
          Professional Skills
        </Typography>
        <Grid container item sm={12}>
          <CircularSkillbar />
          <CircularSkillbar />
          <CircularSkillbar />
          <CircularSkillbar />
        </Grid>
      </Grid>
    </Grid>
  )
}

export { Skills }
