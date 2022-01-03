import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface TextData {
  marginTop: number
  marginBottom: number
}

export const Container = styled(Grid)({
  maxWidth: 1140,
  margin: '0 auto',
  padding: '180px 0',
})

export const GreetingText = styled(Typography)({
  display: 'inline-block',
  backgroundColor: '#0bceaf',
  padding: '10px 30px',
  fontWeight: 'bold',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 0,
  marginBottom: 30,
})

export const Text = styled(Typography)(
  ({ marginTop, marginBottom }: TextData) => ({
    marginTop: marginTop,
    marginBottom: marginBottom,
    fontWeight: 'bold',
  }),
)
