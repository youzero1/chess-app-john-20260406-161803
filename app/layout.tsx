export const metadata = {
  title: 'Chess App',
  description: 'A beautiful chess game application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}