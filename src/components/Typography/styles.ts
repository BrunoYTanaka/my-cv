import { styled } from '@mui/material/styles'
import MuiTypography from '@mui/material/Typography'

interface TypographyProps {
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
  color?: string
}

export const Typography = styled(MuiTypography)<TypographyProps>(
  ({
    theme,
    fontWeight = 500,
    fontSize,
    lineHeight,
    color = theme.palette.text.primary,
  }) => ({
    fontWeight: fontWeight,
    fontSize: fontSize && `${fontSize}rem`,
    lineHeight: lineHeight && `${lineHeight}rem`,
    color: color,
  }),
)
