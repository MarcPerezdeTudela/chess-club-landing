import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

interface Props {
  children: React.ReactNode
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export { Theme }
