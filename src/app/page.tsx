import prisma from '@/lib/db'

export default async function Home() {
  const resume = await prisma.resume.findFirst()
  return <main>{JSON.stringify(resume)}</main>
}
