"use client";
import { ThemeProvider } from 'next-themes' 

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-purple-500">this is a test hehe</h1>
      </main>
    </ThemeProvider>
  )
}
