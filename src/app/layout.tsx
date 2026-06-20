import './globals.css'

export const metadata = {
  title: 'VANTAGE',
  description: 'Web3 • Developer • Art'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
