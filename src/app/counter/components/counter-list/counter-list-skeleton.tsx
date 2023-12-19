import { FC } from 'react'
import classes from './counter-list.module.scss'
import { ActionCardSkeleton } from '@/lib/components'

const CounterListSkeleton: FC = () => {
  const counters = new Array(4).fill(0)
  return (
    <div className={classes.counterList}>
      {counters.map((_, i) => (
        <ActionCardSkeleton key={i} />
      ))}
    </div>
  )
}

export default CounterListSkeleton
