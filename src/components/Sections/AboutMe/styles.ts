import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  padding: '180px 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    maxWidth: 'none',
    paddingBottom: 60,
    textAlign: 'center',
  },
}))

export const RightWrapper = styled(Grid)(({ theme }) => ({
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

export const ToolsItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 8,
  padding: 5,
  fontSize: 14,
  lineHeight: '16px',
  cursor: 'default',
  fontWeight: 300,
}))
