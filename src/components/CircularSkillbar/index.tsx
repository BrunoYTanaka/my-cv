import React, { ReactElement } from 'react'
import * as S from './styles'
import Grid from '@mui/material/Grid'
import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import Circle from './Circle'

interface CircularSkillbarProps {
  percents?: number
  counter?: boolean
  stroke?: string
  emptyStroke?: string
  emptyStrokeOpacity?: number
  duration?: number
  size?: number
  strokeWidth?: number
}

function CircularSkillbar({
  percents = 50,
  counter = true,
  stroke = '#0bceaf',
  duration = 1,
  size = 100,
  strokeWidth = 7,
}: CircularSkillbarProps): ReactElement {
  const theme = useTheme()
  const radius = 45
  const circumference = Math.ceil(2 * Math.PI * radius)
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100)),
  )
  const transition = {
    duration: duration,
    ease: 'easeIn',
  }

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  }
  return (
    <>
      <Box height={size} width="fit-content" position="relative" marginTop={2}>
        <Circle size={size}>
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle"
            strokeWidth={strokeWidth}
            stroke={theme.palette.text.primary}
            fill="transparent"
          />
        </Circle>
        <Circle size={size} hasAnimation>
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            stroke={stroke}
            fill="transparent"
            strokeDashoffset={fillPercents}
            strokeDasharray={circumference}
            variants={variants}
            initial="hidden"
            animate="show"
          />
        </Circle>
        {counter && (
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            style={{
              position: 'absolute',
              fontSize: 18,
              fontWeight: 400,
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
          >
            {percents}%
          </Grid>
        )}
      </Box>
    </>
  )
}

export { CircularSkillbar }
