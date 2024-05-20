import React from 'react'
import LinkedIn_logo_initials  from '../public/LinkedIn_logo_initials.png'
import Image from 'next/image'
export default function Header() {
  return (
    <div>
        <Image
            src={LinkedIn_logo_initials}
            width={40}
            height={40}
            alt='Linkdin'
        />
    </div>
  )
}
