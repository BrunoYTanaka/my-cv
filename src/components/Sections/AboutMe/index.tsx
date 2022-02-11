import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import * as S from './styles'
import skillsImage from '../../../../public/skills.png'
import { Typography } from '../../Typography'
import { MotionBox } from '@/components'
import { useTranslation } from 'next-i18next'
interface Tool {
  id: number
  name: string
}

interface AboutMeProps {
  title: string
  description: string
  tools: Tool[]
}

function AboutMe({ title, description, tools }: AboutMeProps): ReactElement {
  const { t } = useTranslation('about-me')
  return (
    <S.Container
      container
      alignItems="flex-start"
      justifyContent="space-between"
      id="about"
    >
      <Grid item sm={6} alignSelf="center">
        <MotionBox delay={0.4}>
          <Image alt="Skill Image" src={skillsImage} width={540} height={340} />
        </MotionBox>
      </Grid>
      <S.RightWrapper item sm={6}>
        <Typography delay={0.1} margin="10px 0" fontWeight={700} variant="h3">
          {t(title)}
        </Typography>
        <Typography
          delay={0.2}
          margin="0 0 30px 0"
          fontWeight={500}
          variant="subtitle1"
        >
          {t(description, { name: 'Bruno' })}
        </Typography>
        <MotionBox delay={0.3}>
          <S.Tools>
            {tools.map((tool) => (
              <S.ToolsItem key={tool.id}>{tool.name}</S.ToolsItem>
            ))}
          </S.Tools>
        </MotionBox>
        <MotionBox delay={0.4}>
          <S.Button variant="outlined">
            {t('about-me-download-button')}
          </S.Button>
        </MotionBox>
      </S.RightWrapper>
    </S.Container>
  )
}

export { AboutMe }
