import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import MuiButton, { ButtonProps } from '@mui/material/Button'

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  paddingBottom: 180,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    maxWidth: 'none',
    paddingBottom: 60,
    textAlign: 'center',
  },
}))

export const InfoWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 50,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    marginBottom: 80,
  },
}))

export const Tools = styled('ul')(({ theme }) => ({
  paddingLeft: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}))

export const ToolsItem = styled('li')(() => ({
  listStyle: 'none',
  border: '2px solid #0bceaf',
  borderRadius: 8,
  padding: 5,
  fontSize: 14,
  lineHeight: '16px',
  cursor: 'default',
  fontWeight: 300,
}))

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  marginTop: 20,
  padding: '10px 15px',
  borderRadius: 24,
  borderColor: '#0bceaf',
  borderWidth: 2,
  fontWeight: 700,
  color: theme.palette.text.primary,
  '&:hover': {
    borderWidth: 2,
    borderColor: '#089a83',
  },
}))
