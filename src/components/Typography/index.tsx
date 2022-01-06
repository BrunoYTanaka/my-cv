import { styled } from '@mui/material/styles'
import MuiTypography from '@mui/material/Typography'

interface TypographyProps {
  margin?: string
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
}

const Typography = styled(MuiTypography)<TypographyProps>(
  ({ margin, fontWeight, fontSize, lineHeight }) => ({
    margin: margin || '10px',
    fontWeight: fontWeight || 500,
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,
  }),
)

export { Typography }
