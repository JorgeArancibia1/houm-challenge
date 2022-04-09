import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes'
import { lightTheme } from '../themes'
import { globalStyles } from '../styles/globals'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
        <style jsx global>
          {globalStyles}
        </style>
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp
