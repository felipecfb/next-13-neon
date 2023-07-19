'use client'

import { myContext } from '@/contexts/my-context'
import { useContext } from 'react'

export function Test() {
  const test = useContext(myContext)

  return <h1 className="text-3xl text-white">{test}</h1>
}
