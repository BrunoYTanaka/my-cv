import { ReactElement } from 'react'
import { Card } from '@/components/Card'
import * as S from './styles'
import { Typography } from '@/components'
import { useTranslation } from 'next-i18next'

function Experiences({
  educations,
  workExperiences,
}: ExperiencesProps): ReactElement {
  const { t } = useTranslation('experience')
  return (
    <S.Container
      container
      justifyContent="center"
      alignItems="flex-start"
      id="experiences"
    >
      <S.LeftWrapper item sm={6}>
        <Typography
          delay={0.1}
          variant="h4"
          fontWeight={700}
          align="center"
          mb={3.75}
        >
          {t(educations.title)}
        </Typography>

        {educations.experiences.map((experience) => (
          <Card
            key={experience.id}
            {...experience}
            title={t(experience.title)}
            text={t(experience.text)}
          />
        ))}
      </S.LeftWrapper>
      <S.RightWrapper item sm={6}>
        <Typography
          delay={0.1}
          variant="h4"
          fontWeight={700}
          align="center"
          mb={3.75}
        >
          {t(workExperiences.title)}
        </Typography>

        {workExperiences.experiences.map((experience) => (
          <Card
            key={experience.id}
            {...experience}
            title={t(experience.title)}
            text={t(experience.text)}
          />
        ))}
      </S.RightWrapper>
    </S.Container>
  )
}

export { Experiences }
