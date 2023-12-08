import { FC } from "react"
import Image from "next/image"
import classes from './header.module.scss'

const Header: FC = () => {
    return (
       <header className={classes.header}>
        <Image src='/logo.svg' alt="logo"  height={50} width={150}/>
       </header>
    )

}

export default Header