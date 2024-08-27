export const metadata = {
  title: 'Home',
  description: 'Welcome',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
