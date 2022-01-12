import { styled } from '@mui/material/styles'

const boxShadowColor = {
  dark: '#000',
  light: '#00000015',
}

export const Card = styled('div')(({ theme }) => ({
  boxShadow: `0px 10px 20px 4px ${boxShadowColor[theme.palette.mode]}`,
  padding: '26px 30px',
  borderRadius: 4,
  marginBottom: '30px',
  backgroundColor: theme.palette.neutral,
  [theme.breakpoints.down('sm')]: {
    minWidth: 0,
  },
}))
