import { Card } from '@/lib/components'
import { Skeleton } from 'antd'
import classes from './styles.module.scss'
import CounterListSkeleton from './components/counter-list/counter-list-skeleton'

const Loading = () => {
  return (
    <Card title='My Counters' className={classes.card}>
      <CounterListSkeleton />
    </Card>
  )
}

export default Loading
