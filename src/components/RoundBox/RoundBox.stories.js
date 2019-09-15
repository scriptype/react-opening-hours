import React from 'react'
import RoundBox from '.'

export const empty = () => (
  <RoundBox></RoundBox>
)

export const withInlineLevelChildren = () => (
  <RoundBox>Lorem ipsum dolor.</RoundBox>
)

export const withBlockLevelChildren = () => (
  <RoundBox>
    <header>
      <h1>My Box Title</h1>
    </header>
    <main>
      <p>Sit suscipit dolore dolorum rem quas Corporis illo expedita nobis veritatis quisquam.</p>
      <p>Excepturi facilis esse odit odio cum iure? Dolores dolorem natus non rem quod, tenetur repudiandae Repellat ipsum nobis?</p>
    </main>
  </RoundBox>
)
