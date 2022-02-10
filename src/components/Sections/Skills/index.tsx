import { ReactElement } from 'react'
import * as S from './styles'
import { Typography } from '../../Typography'
import { Skillbar } from '@/components'

interface Skill {
  id: number
  name: string
  percentage: number
}

interface SkillsProps {
  technicalSKills: {
    title: string
    skills: Skill[]
  }
  professionalSkills: {
    title: string
    skills: Skill[]
  }
}

function Skills({
  technicalSKills,
  professionalSkills,
}: SkillsProps): ReactElement {
  return (
    <S.Container
      container
      alignItems="flex-start"
      justifyContent="center"
      id="skills"
    >
      <S.LeftWrapper item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center" mb={3.75}>
          {technicalSKills.title}
        </Typography>
        {technicalSKills.skills.map((skill) => (
          <Skillbar
            key={skill.id}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </S.LeftWrapper>
      <S.RightWrapper item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center" mb={3.75}>
          {professionalSkills.title}
        </Typography>
        {professionalSkills.skills.map((skill) => (
          <Skillbar
            key={skill.id}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </S.RightWrapper>
    </S.Container>
  )
}

export { Skills }
