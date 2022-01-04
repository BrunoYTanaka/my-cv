import { styled } from '@mui/material/styles'
import MList from '@mui/material/List'

interface ListProps {
  direction: 'row' | 'column'
  gap: number
}

export const List = styled(MList)<ListProps>(({ theme, direction, gap }) => ({
  display: 'flex',
  flexDirection: direction,
  alignItems: 'flex-start',
  gap: gap,
  padding: 0,
  listStyle: 'none',
  marginTop: 20,
  marginBottom: 60,

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
