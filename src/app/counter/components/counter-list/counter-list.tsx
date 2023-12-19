'use client'
import { Counter } from '@prisma/client'

import { FC } from 'react'
import classes from './counter-list.module.scss'
import { ActionCard } from '@/lib/components'
import { useRouter } from 'next/navigation'

interface Props {
  counters: Counter[]
}

const CounterList: FC<Props> = ({ counters }) => {
  const router = useRouter()

  const onSelect = (id: string) => {
    router.push(`/counter/${id}`)
  }

  return (
    <div className={classes.counterList}>
      {counters.map((counter) => (
        <ActionCard
          key={counter.id}
          title={counter.name}
          onSelect={onSelect.bind(this, counter.id)}
        />
      ))}
    </div>
  )
}

export default CounterList
