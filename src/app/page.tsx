import prisma from '@/lib/db'

export default async function Home() {
  const counter = await prisma.counter.findFirst()
  const resume = await prisma.resume.findFirst()
  return <main>{JSON.stringify(counter)}</main>
}
