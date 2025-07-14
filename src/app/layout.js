import '../globals.css'

import { Cairo } from 'next/font/google'
import { Poppins } from 'next/font/google'

// إعداد الخط العربي
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'], // يمكن إضافة أوزان إضافية إذا لزم
  variable: '--font-cairo',
  display: 'swap',
})

// إعداد الخط الإنجليزي
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio ...',
}

export default function RootLayout({ children }) {
  return (
    <html   className={`${cairo.variable} ${poppins.variable}`}>
      <body className="font-cairo">{children}</body>
    </html>
  )
}
