import Image from 'next/image'
import React from 'react'

export default function OgImage() {
  return (
    <Image width={100} height={100} src="https://source.unsplash.com/random/800x600?recipe" alt="title" />
  )
}
