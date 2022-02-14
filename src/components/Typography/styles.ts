import { styled } from '@mui/material/styles'
import MuiTypography from '@mui/material/Typography'
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
interface TypographyProps extends MuiTypographyProps {
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
  color?: string
  letterSpacing?: number
}

export const Typography = styled(MuiTypography)<TypographyProps>(
  ({
    theme,
    fontWeight = 500,
    fontSize,
    lineHeight,
    color = theme.palette.text.primary,
    letterSpacing,
  }) => ({
    fontWeight: fontWeight,
    fontSize: fontSize && `${fontSize}rem`,
    lineHeight: lineHeight && `${lineHeight}rem`,
    color: color,
    letterSpacing: letterSpacing && `${letterSpacing}rem`,
  }),
)
