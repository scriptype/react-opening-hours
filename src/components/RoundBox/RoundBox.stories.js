import React from 'react'
import Center from '../Center'
import { H1, P } from '../Typography'
import RoundBox from '.'

export const empty = () => (
  <Center>
    <RoundBox></RoundBox>
  </Center>
)

export const withInlineLevelChildren = () => (
  <Center>
    <RoundBox>Lorem ipsum dolor.</RoundBox>
  </Center>
)

export const withBlockLevelChildren = () => (
  <Center>
    <RoundBox>
      <header>
        <H1>My Box Title</H1>
      </header>
      <main>
        <P>Sit suscipit dolore dolorum rem quas Corporis illo expedita nobis veritatis quisquam.</P>
        <P>Excepturi facilis esse odit odio cum iure? Dolores dolorem natus non rem quod, tenetur repudiandae Repellat ipsum nobis?</P>
      </main>
    </RoundBox>
  </Center>
)
