import { Link } from '@tanstack/react-router'

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col bg-gray-50 min-h-[100vh]">
      {/* Шапка */}

      {/* Основной контент */}
      <main className="min-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-100vh">
        {children}
      </main>
    </div>
  )
}

export default RootLayout
