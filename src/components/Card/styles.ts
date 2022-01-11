import { styled } from '@mui/material/styles'

const backgroundColor = {
  dark: '#212121',
  light: '#fff',
}
const boxShadowColor = {
  dark: '#000',
  light: '#00000015',
}

export const Card = styled('div')(({ theme }) => ({
  boxShadow: `-1rem 0 3rem ${boxShadowColor[theme.palette.mode]}`,
  padding: '26px 30px',
  borderRadius: 4,
  marginBottom: '30px',
  backgroundColor: backgroundColor[theme.palette.mode],
  [theme.breakpoints.down('sm')]: {
    minWidth: 0,
  },
}))
