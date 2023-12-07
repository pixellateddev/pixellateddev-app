'use client'

import type { counter  } from "@prisma/client"
import { FC, useEffect, useState } from "react"
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import classes from './counter.module.scss'

interface Props {
    counter: counter
}

const Counter: FC<Props> = ({ counter }) => {
    const [time, setTime] = useState(Date.now())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const days = differenceInDays(time, counter.startTime)
    const hours = differenceInHours(time, counter.startTime) % 24
    const minutes = differenceInMinutes(time, counter.startTime) % 60
    const seconds = differenceInSeconds(time, counter.startTime) % 60
    return (
        <div className={classes.container}>
            <div>{days} Day{days !== 1 && 's'}</div>
            <div>{hours} Hour{hours !== 1 && 's'}</div>
            <div>{minutes} Minutes{minutes !== 1 && 's'}</div>
            <div>{seconds} Second{seconds !== 1 && 's'}</div>
        </div>
    )
}

export default Counter