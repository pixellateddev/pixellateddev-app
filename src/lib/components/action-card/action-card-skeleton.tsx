import { FC } from 'react'
import classes from './action-card.module.scss'
import { Skeleton } from 'antd'

const ActionCardSkeleton: FC = () => {
  return (
    <div className={classes.actionCard}>
      <Skeleton active/>
    </div>
  )
}

export default ActionCardSkeleton
