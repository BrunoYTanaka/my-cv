import Grid from '@mui/material/Grid'
import React from 'react'
import Image from 'next/image'

import { Container, InfoWrapper, Tools, ToolsItem, Button } from './styles'
import skillsImage from '../../../../public/skills.png'
import { Typography } from '../../Typography'

interface Tool {
  id: number
  name: string
}

interface SkillsProps {
  title: string
  description: string
  tools: Tool[]
}

function Skills({ title, description, tools }: SkillsProps) {
  return (
    <Container container alignItems="flex-start" justifyContent="space-between">
      <Grid item sm={6} alignSelf="center">
        <Image
          alt="Skill Image"
          src={skillsImage}
          layout="responsive"
          width={540}
          height={340}
        />
      </Grid>
      <InfoWrapper item sm={6}>
        <Typography margin="10px 0" fontWeight={700} variant="h3">
          {title}
        </Typography>
        <Typography margin="0 0 30px 0" fontWeight={500} variant="subtitle1">
          {description}
        </Typography>
        <Tools>
          {tools.map((tool) => (
            <ToolsItem key={tool.id}>{tool.name}</ToolsItem>
          ))}
        </Tools>
        <Button variant="outlined">Download CV</Button>
      </InfoWrapper>
    </Container>
  )
}

export { Skills }
