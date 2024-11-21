import React from 'react'
import './title.scss'
export default function Title({children, className, ...props}) {
  return (
    <div className={`title ${className}`} {...props}>{children}</div>
  )
}
