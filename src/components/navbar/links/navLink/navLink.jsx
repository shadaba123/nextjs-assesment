'use client'
import Link from 'next/link'
import React from 'react'
import styles from "./navLink.module.css"
import { usePathname } from 'next/navigation'

const NavLink = ({item}) => {
    const pathname = usePathname()
  return (
    <div className={`${styles.container} ${pathname == item.path && styles.active}`}>
        <Link href={item.path} key={item.title}>{item.title}</Link>
    </div>
  )
}

export default NavLink