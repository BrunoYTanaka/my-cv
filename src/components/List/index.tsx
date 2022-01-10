import { styled } from '@mui/material/styles'
import MuiList from '@mui/material/List'

interface ListProps {
  direction?: 'row' | 'column'
  gap?: number
  mt?: number
  mb?: number
}

const List = styled(MuiList)<ListProps>(
  ({ theme, direction = 'column', gap = 10, mt = 20, mb = 60 }) => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: 'flex-start',
    gap: gap,
    padding: 0,
    listStyle: 'none',
    marginTop: mt,
    marginBottom: mb,

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
)

export { List }
