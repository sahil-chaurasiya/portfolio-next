import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Sahil Portfolio',
  description: 'My personal portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
