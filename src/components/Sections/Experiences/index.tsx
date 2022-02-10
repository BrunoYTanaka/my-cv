import { ReactElement } from 'react'
import { Card } from '@/components/Card'
import * as S from './styles'
import { MotionBox, Typography } from '@/components'

interface Experience {
  id: number
  title: string
  duration: string
  text: string
}

interface ExperiencesProps {
  educations: {
    title: string
    experiences: Experience[]
  }
  workExperiences: {
    title: string
    experiences: Experience[]
  }
}

function Experiences({
  educations,
  workExperiences,
}: ExperiencesProps): ReactElement {
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
          {educations.title}
        </Typography>

        {educations.experiences.map((experience) => (
          <Card key={experience.id} {...experience} />
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
          {workExperiences.title}
        </Typography>

        {workExperiences.experiences.map((experience) => (
          <Card key={experience.id} {...experience} />
        ))}
      </S.RightWrapper>
    </S.Container>
  )
}

export { Experiences }
