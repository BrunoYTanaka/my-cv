import * as S from './styles'
import { TypographyProps } from '@mui/material/Typography'
interface CustomTypographyProps extends TypographyProps {
  children: React.ReactNode
  margin?: string
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
  color?: string
}

function Typography({ children, ...rest }: CustomTypographyProps) {
  return <S.Typography {...rest}>{children}</S.Typography>
}
export { Typography }
