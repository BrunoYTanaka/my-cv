import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  paddingBottom: 180,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    maxWidth: 'none',
    paddingBottom: 60,
    textAlign: 'center',
  },
}))

export const ProfessionalSkillsWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 50,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    marginBottom: '4rem',
  },
}))
