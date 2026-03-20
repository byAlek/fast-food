import type { Metadata } from 'next'
import { Courgette, Poppins, Sriracha } from 'next/font/google'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Foodeli - Fast Food',
  description: 'Quick and tasty fast food, serving burgers, fries, and more.',
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
})
const corugette = Courgette({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-corugette',
})
const sriracha = Sriracha({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sriracha',
})

export const fonts = [poppins.variable, corugette.variable, sriracha.variable].join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={fonts}>
      <body className="flex flex-col bg-background text-text items-start gap-4">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
