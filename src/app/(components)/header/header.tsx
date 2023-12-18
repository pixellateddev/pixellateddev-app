import { FC } from 'react'
import Image from 'next/image'
import classes from './header.module.scss'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' height={40} width={250} />
      </Link>
    </header>
  )
}

export default Header
