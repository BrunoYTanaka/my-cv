import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const Footer = styled(motion.footer)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '5rem', //80px
  backgroundColor: theme.palette.neutral,
}))
