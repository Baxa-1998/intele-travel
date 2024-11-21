import React from 'react'
import './button.scss'
export default function Button({children, className, ...props}) {
  return (
    // <button className={`btn ${className}`} {...props}>{children}</button>
    <button className={`group relative rounded-full border-2 flex btn ${className}`} {...props}>
    <span className='relative flex overflow-hidden'>
      <div className='flex items-center gap-1 translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12'>
        {children}
      </div>
      <div className='absolute items-center gap-1 flex translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
        {children}
      </div>
    </span>
  </button>
  )
}
