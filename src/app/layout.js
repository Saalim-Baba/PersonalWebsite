export const metadata = {
  title: 'Home',
  description: 'Welcome',
  icons: {
    icon: '/face.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
