import React from 'react'
import Center from '../Center'
import { SkeletonText } from '.'

export const basic = () => (
  <Center>
    <SkeletonText />
  </Center>
)

export const withLength = () => (
  <Center>
    <SkeletonText length={24} />
  </Center>
)
