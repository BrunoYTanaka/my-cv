import { styled } from '@mui/material/styles'
import Link from '@mui/material/Link'
import Icon from '@mui/material/Icon'

export const ListItemText = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 'normal',
  transition: 'all ease-in-out .2s',
  textTransform: 'none',
  letterSpacing: 1,
}))

export const ListItemIcon = styled(Icon)({
  display: 'flex',
  alignItems: 'center',
  marginRight: 15,
  transition: 'all ease-in-out .2s',
})

export const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  cursor: 'pointer',
  marginBottom: 10,
  '&:hover': {
    [`${ListItemText}`]: {
      color: theme.palette.text.secondary,
    },
    [`${ListItemIcon}`]: {
      color: theme.palette.text.secondary,
    },
  },
}))
