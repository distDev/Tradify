import { BottomNav, Header } from '@/widgets'

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col max-w-[428px] bg-[#141414]">
      <Header />

      <main className="min-w-full mx-auto px-[15px] min-h-[100vh] bg-red">
        {children}
      </main>

      <BottomNav />
    </div>
  )
}

export default RootLayout
