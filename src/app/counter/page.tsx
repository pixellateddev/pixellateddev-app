import { Card } from '@/lib/components'
import prisma from '@/lib/db'
import { NextPage } from 'next'
import { Empty } from 'antd'
import Link from 'next/link'

const Page: NextPage = async () => {
  const counters = await prisma.counter.findMany()
  return (
    <Card title='My Counters'>
      <div>
        <Empty description='No Counters Found. Please Create a new counter' />
      </div>
    </Card>
  )
}

export default Page
