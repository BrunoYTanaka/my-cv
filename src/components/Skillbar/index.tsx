import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid'
import { Typography } from '@/components/Typography'
import { defaultTransition } from '@/constants/framerMotion'
import * as S from './styles'
interface SkillbarProps {
  name: string
  percentage: number
}

function Skillbar({ name, percentage }: SkillbarProps): ReactElement {
  const parentVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const variants = {
    empty: {
      width: 0,
    },
    fill: {
      width: `${percentage}%`,
    },
  }

  return (
    <Grid
      container
      spacing={1}
      mt={2}
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Grid item sm={12} style={{ width: '100%' }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <Typography m={0}>{name}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography m={0} align="right">
              {`${percentage}%`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} style={{ width: '100%' }}>
        <S.Skillbar>
          <S.SkillbarProgress
            initial="empty"
            viewport={{ once: true }}
            transition={defaultTransition}
            variants={variants}
            whileInView="fill"
          />
        </S.Skillbar>
      </Grid>
    </Grid>
  )
}

export { Skillbar }
