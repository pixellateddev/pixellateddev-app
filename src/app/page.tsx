import prisma from '@/lib/db'
import Link from 'next/link'

export default async function Home() {
  const resume = await prisma.resume.findFirst()
  return (
    <div className='main'>
      <Link href='/counter'>Counter</Link>
    </div>
  )
}
