import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import * as S from './styles'
import skillsImage from '../../../../public/skills.png'
import { Typography } from '../../Typography'
import { MotionBox } from '@/components'

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
        <MotionBox delay={0.1}>
          <Typography margin="10px 0" fontWeight={700} variant="h3">
            {title}
          </Typography>
        </MotionBox>
        <MotionBox delay={0.2}>
          <Typography margin="0 0 30px 0" fontWeight={500} variant="subtitle1">
            {description}
          </Typography>
        </MotionBox>
        <MotionBox delay={0.3}>
          <S.Tools>
            {tools.map((tool) => (
              <S.ToolsItem key={tool.id}>{tool.name}</S.ToolsItem>
            ))}
          </S.Tools>
        </MotionBox>
        <MotionBox delay={0.4}>
          <S.Button variant="outlined">Download CV</S.Button>
        </MotionBox>
      </S.RightWrapper>
    </S.Container>
  )
}

export { AboutMe }
