import { styled } from '@mui/material/styles'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import MuiListItemButton from '@mui/material/ListItemButton'

export const ListItemIcon = styled(MuiListItemIcon)({
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  transition: 'all ease-in-out .2s',
})

export const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  flexGrow: 0,
  borderRadius: '50%',
  alignItems: 'center',
  gap: '1rem',
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover': {
    [`${ListItemIcon}`]: {
      color: theme.palette.primary.main,
    },
  },
}))
