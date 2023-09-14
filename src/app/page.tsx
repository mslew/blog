import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-purple-500">this is a test hehe</h1>
      <Link href="/blog">This goes to da blog</Link>
      <Logo />
    </main>
  )
}
