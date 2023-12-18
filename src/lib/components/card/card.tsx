import { FC, PropsWithChildren } from 'react'
import classes from './card.module.scss'

interface Props {
  title: string
}

const Card: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}

export default Card
