import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

const boxShadowColor = {
  dark: '#000',
  light: '#00000015',
}

export const Card = styled(motion.div)(({ theme }) => ({
  boxShadow: `0px 10px 20px 4px ${boxShadowColor[theme.palette.mode]}`,
  padding: '1.625rem 1.875rem', //26px 30px
  borderRadius: 4,
  marginBottom: '1.875rem', //30px
  backgroundColor: theme.palette.neutral,
  [theme.breakpoints.down('sm')]: {
    minWidth: 0,
  },
}))
