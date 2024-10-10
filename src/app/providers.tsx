import {
  ChakraBaseProvider,
} from '@chakra-ui/react'

import theme from './theme/theme'


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  )
}