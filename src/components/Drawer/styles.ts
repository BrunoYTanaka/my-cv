import { styled } from '@mui/material/styles'
import MuiButton, { ButtonProps } from '@mui/material/Button'
interface SidebarProps {
  open: boolean
}
export const Sidebar = styled('div')<SidebarProps>(({ theme, open }) => ({
  height: '100vh',
  width: 250,
  position: 'fixed',
  top: 0,
  left: open ? '0' : '-100%',
  padding: '1.25rem',
  transition: '350ms',
  zIndex: 10,
  backgroundColor: theme.palette.neutral,
}))

export const SidebarWrapper = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: '4rem',
  gap: '0.625rem', //10px
}))

export const ButtonsWrapper = styled('div')(() => ({
  display: 'inline-flex',
  borderRadius: '0.625rem',
  width: '100%',
}))

interface CustomButtonProps extends ButtonProps {
  isSelected: boolean
}

export const Button = styled(MuiButton)<CustomButtonProps>(
  ({ theme, isSelected }) => ({
    width: '100%',
    textTransform: 'none',
    padding: '0.75rem',
    borderRadius: '0.625rem',
    border: '1px solid',
    color: isSelected ? theme.palette.primary.dark : theme.palette.text.primary,
    borderColor: isSelected
      ? theme.palette.primary.dark
      : theme.palette.text.primary,
    fontWeight: isSelected ? 700 : 500,

    '&:not(:last-of-type)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },

    '&:not(:first-of-type)': {
      marginLeft: '-1px',
      borderLeft: `1px solid ${
        isSelected ? theme.palette.primary.dark : 'transparent'
      }`,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },

    svg: {
      marginRight: '0.5rem',
    },
  }),
)

export const LanguageButton = styled(MuiButton)<CustomButtonProps>(
  ({ isSelected }) => ({
    width: '100%',
    textTransform: 'none',
    padding: '0.75rem',
    borderRadius: '0.625rem',
    border: isSelected ? '1px solid' : 'none',
    marginBottom: 5,
  }),
)
