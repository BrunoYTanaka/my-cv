import { styled } from '@mui/material/styles'
import MuiListItem from '@mui/material/ListItem'
import MuiListItemText from '@mui/material/ListItemText'
import MuiListItemIcon from '@mui/material/ListItemIcon'

export const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 'normal',
  transition: 'all ease-in-out .2s',
  textTransform: 'none',
  letterSpacing: 1,
}))

export const ListItemIcon = styled(MuiListItemIcon)({
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  transition: 'all ease-in-out .2s',
})

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  alignItems: 'center',
  gap: 15,
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover': {
    [`${ListItemText}`]: {
      color: theme.palette.text.secondary,
    },
    [`${ListItemIcon}`]: {
      color: theme.palette.primary.main,
    },
  },
}))
