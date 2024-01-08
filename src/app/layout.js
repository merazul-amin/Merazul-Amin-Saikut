import './globals.css'

export const metadata = {
  title: 'Merazul Amin Saikut',
  description: 'Bio Data and Lifestyle of Merazul Amin Saikut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
