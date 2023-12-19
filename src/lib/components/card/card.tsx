import { FC, PropsWithChildren } from 'react'
import classes from './card.module.scss'
import clsx from 'clsx'

interface Props {
  title: string
  className?: string
}

const Card: FC<PropsWithChildren<Props>> = ({ title, children, className }) => {
  return (
    <div className={clsx(classes.card, className)}>
      <div className={classes.head}>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}

export default Card
