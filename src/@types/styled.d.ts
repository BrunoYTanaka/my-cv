import '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Palette {
    neutral: string
    progressBar: string
  }

  interface PaletteOptions {
    neutral?: string
    progressBar?: string
  }
}
