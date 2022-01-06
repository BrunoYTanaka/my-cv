import Grid from '@mui/material/Grid'
import React from 'react'
import Image from 'next/image'

import { Container, InfoWrapper, Tools, ToolsItem, Button } from './styles'
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

function AboutMe({ title, description, tools }: AboutMeProps) {
  return (
    <Container container alignItems="flex-start" justifyContent="space-between">
      <Grid item sm={6} alignSelf="center">
        <MotionBox delay={0.4}>
          <Image alt="Skill Image" src={skillsImage} width={540} height={340} />
        </MotionBox>
      </Grid>
      <InfoWrapper item sm={6}>
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
          <Tools>
            {tools.map((tool) => (
              <ToolsItem key={tool.id}>{tool.name}</ToolsItem>
            ))}
          </Tools>
        </MotionBox>
        <MotionBox delay={0.4}>
          <Button variant="outlined">Download CV</Button>
        </MotionBox>
      </InfoWrapper>
    </Container>
  )
}

export { AboutMe }
