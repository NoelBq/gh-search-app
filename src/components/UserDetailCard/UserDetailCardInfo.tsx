import { UserDetails } from '@/utils/api'
import React from 'react'
import { InfoItem } from '@/components/InfoItem'
import { getInfoItems } from './utils'

interface Props {
  user: UserDetails
}

export function UserDetailCardInfo({ user }: Props) {
  const infoItems = getInfoItems(user)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {infoItems.map((item, index) => (
        <InfoItem key={index} icon={item.icon} label={item.label} value={item.value} link={item.link} />
      ))}
    </div>
  )
}

