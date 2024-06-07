import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <div><h2>Not-found</h2>
    <p>The page you are looking is not here</p>
    <Link href='/' >Return Home</Link>
    </div>
    
    </>
  )
}

export default NotFound