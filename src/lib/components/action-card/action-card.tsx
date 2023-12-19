'use client'
import { FC } from 'react'
import classes from './action-card.module.scss'

interface Props {
  title: string
  onSelect?: () => void
}

const ActionCard: FC<Props> = ({ title, onSelect }) => {
  return (
    <div
      role='button'
      className={classes.actionCard}
      onClick={() => onSelect?.()}
    >
      {title}
    </div>
  )
}

export default ActionCard
