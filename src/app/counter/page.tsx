import { ActionCard, Card } from '@/lib/components'
import prisma from '@/lib/db'
import { NextPage } from 'next'
import { Empty } from 'antd'
import CounterList from './components/counter-list/counter-list'
import classes from './styles.module.scss'

const Page: NextPage = async () => {
  const counters = await prisma.counter.findMany()
  return (
    <Card title='My Counters' className={classes.card}>
      {counters.length ? <CounterList counters={counters} /> : <Empty />}
    </Card>
  )
}

export default Page
