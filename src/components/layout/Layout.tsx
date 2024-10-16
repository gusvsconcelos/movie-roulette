import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-[calc(100vh-240px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
