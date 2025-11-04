import React from 'react'

const SecondaryButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={`${className}`}>
      {children}
    </button>
  )
}

export default SecondaryButton