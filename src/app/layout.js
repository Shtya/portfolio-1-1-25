import '@/sass/main.css'
import '../globals.css'
// import fav from '@/assets/fav.png'

export const metadata = {
  title: "Portfolio",
  description: "Portfolio ... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href='fav.png' sizes="any" />
      <body >{children}</body>
    </html>
  );
}
