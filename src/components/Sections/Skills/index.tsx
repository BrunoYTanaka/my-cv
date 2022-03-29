import { ReactElement } from 'react'
import * as S from './styles'
import { Typography } from '../../Typography'
import { Skillbar } from '@/components/Skillbar'
import { useTranslation } from 'next-i18next'

function Skills({
  technicalSKills,
  professionalSkills,
}: SkillsProps): ReactElement {
  const { t } = useTranslation('skills')
  return (
    <S.Container
      container
      alignItems="flex-start"
      justifyContent="center"
      id="skills"
    >
      <S.LeftWrapper item sm={6}>
        <Typography variant="h4" fontWeight={700} align="center" mb={3.75}>
          {t(technicalSKills.title)}
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
          {t(professionalSkills.title)}
        </Typography>
        {professionalSkills.skills.map((skill) => (
          <Skillbar
            key={skill.id}
            name={t(skill.name)}
            percentage={skill.percentage}
          />
        ))}
      </S.RightWrapper>
    </S.Container>
  )
}

export { Skills }
