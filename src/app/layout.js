import { Navbar } from '@/sections/shared/Navbar/Navbar'
import './globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Footer } from '@/sections/shared/Footer/Footer';


export const metadata = {
  title: 'Merazul Amin Saikut',
  description: 'Bio Data and Lifestyle of Merazul Amin Saikut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
