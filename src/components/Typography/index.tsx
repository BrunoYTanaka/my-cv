import * as S from './styles'
import { TypographyProps } from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { defaultTransition, fadeInUpVariants } from '@/constants/framerMotion'

type CustomTypographyProps = {
  children: React.ReactNode
  margin?: string
  fontSize?: number
  lineHeight?: number
  fontWeight?: 300 | 500 | 700
  color?: string
  delay?: number
}

function Typography<C extends React.ElementType>({
  children,
  delay = 0.1,
  ...rest
}: TypographyProps<C, { component?: C }> & CustomTypographyProps) {
  return (
    <S.Typography
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay }}
      {...rest}
    >
      {children}
    </S.Typography>
  )
}
export { Typography }
