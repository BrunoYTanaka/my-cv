import React, { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import * as S from './styles'
import { Typography } from '../../Typography'
import { Skillbar, CircularSkillbar } from '@/components'

interface TechnicalSKills {
  id: number
  name: string
  percentage: number
}

interface ProfessionalSkills {
  id: number
  caption: string
  text: string
  percentage: number
}
interface SkillsProps {
  technicalSKills: {
    title: string
    skills: TechnicalSKills[]
  }
  professionalSkills: {
    title: string
    skills: ProfessionalSkills[]
  }
}

function Skills({
  technicalSKills,
  professionalSkills,
}: SkillsProps): ReactElement {
  return (
    <S.Container container alignItems="flex-start" justifyContent="center">
      <Grid item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center">
          {technicalSKills.title}
        </Typography>
        {technicalSKills.skills.map((skill) => (
          <Skillbar
            key={skill.id}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </Grid>
      <S.ProfessionalSkillsWrapper item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center">
          {professionalSkills.title}
        </Typography>
        {professionalSkills.skills.map((skill) => (
          <Grid
            key={skill.id}
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sm={3}>
              <CircularSkillbar percents={skill.percentage} />
            </Grid>
            <Grid item sm={9}>
              <Typography>
                <b>{skill.caption}</b>:{skill.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </S.ProfessionalSkillsWrapper>
    </S.Container>
  )
}

export { Skills }
