import './globals.css'

export const metadata = {
  title: 'Space Tourism',
  description: 'Walk through space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='md:bg-hero-bg bg-mobile-bg bg-center bg-cover'>{children}</body>
    </html>
  )
}
