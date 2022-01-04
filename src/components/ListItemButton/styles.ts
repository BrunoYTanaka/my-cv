import { styled } from '@mui/material/styles'
import MListItemIcon from '@mui/material/ListItemIcon'
import MListItemButton from '@mui/material/ListItemButton'

export const ListItemIcon = styled(MListItemIcon)({
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  transition: 'all ease-in-out .2s',
})

export const ListItemButton = styled(MListItemButton)({
  display: 'flex',
  padding: 0,
  flexGrow: 0,
  borderRadius: '50%',
  alignItems: 'center',
  gap: 15,
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover': {
    [`${ListItemIcon}`]: {
      color: '#0bceaf',
    },
  },
})
