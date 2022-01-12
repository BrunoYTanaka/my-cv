import '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Palette {
    neutral: string
  }

  interface PaletteOptions {
    neutral?: string
  }
}
