import React, { ReactElement } from 'react'
interface CirleProps {
  size: number
  children: React.ReactNode
  hasAnimation?: boolean
}

function Circle({
  size,
  children,
  hasAnimation = false,
}: CirleProps): ReactElement {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={
        hasAnimation
          ? {
              position: 'absolute',
              transform: 'rotate(-90deg)',
              overflow: 'visible',
              marginLeft: -size,
            }
          : {}
      }
    >
      {children}
    </svg>
  )
}

export default Circle
