import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

interface ButtonIcon {
  hidden: boolean
}

export const ButtonWrapper = styled(motion.div)<ButtonIcon>(
  ({ theme, hidden }) => ({
    display: hidden ? 'none' : 'flex',
    justifyContent: 'flex-end',
    position: 'sticky',
    bottom: '2rem',
    marginRight: '2rem',
    marginBottom: '2rem',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }),
)
