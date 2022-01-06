import { styled } from '@mui/material/styles'
import MuiList from '@mui/material/List'

interface ListProps {
  direction?: 'row' | 'column'
  gap?: number
}

const List = styled(MuiList)<ListProps>(({ theme, direction, gap }) => ({
  display: 'flex',
  flexDirection: direction || 'column',
  alignItems: 'flex-start',
  gap: gap || 10,
  padding: 0,
  listStyle: 'none',
  marginTop: 20,
  marginBottom: 60,

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export { List }
