import React from 'react'

interface Props {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {children}
    </div>
  )
}

