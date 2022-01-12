import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const Skillbar = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  backgroundColor: theme.palette.text.primary,
  height: '0.5rem',
  borderRadius: '0.625rem',
}))

export const SkillbarProgress = styled(motion.span)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.primary.main,
  height: '0.5rem',
  borderRadius: '0.625rem',
}))
