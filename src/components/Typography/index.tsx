import { styled } from '@mui/material/styles'
import MuiTypography from '@mui/material/Typography'
interface TypographyProps {
  margin?: string
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
  color?: string
}

const Typography = styled(MuiTypography)<TypographyProps>(
  ({ theme, margin, fontWeight, fontSize, lineHeight, color }) => ({
    margin: margin || '10px',
    fontWeight: fontWeight || 500,
    fontSize: fontSize && `${fontSize}rem`,
    lineHeight: lineHeight && `${lineHeight}rem`,
    color: color || theme.palette.text.primary,
  }),
)
export { Typography }
