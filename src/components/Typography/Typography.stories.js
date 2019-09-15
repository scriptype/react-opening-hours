import React from 'react'
import * as Typography from '.'

export const All = () => (
  <div>
    <Heading1 />
    <Heading2 />
    <Heading3 />
    <Heading4 />
    <Paragraph />

    <Typography.H2>
      Dark Mode
    </Typography.H2>

    <Heading1 dark={true} />
    <Heading2 dark={true} />
    <Heading3 dark={true} />
    <Heading4 dark={true} />
    <Paragraph dark={true} />
  </div>
)

export const Heading1 = ({ dark }) => (
  <Typography.H1 dark={dark}>
    H1
  </Typography.H1>
)

export const Heading2 = ({ dark }) => (
  <Typography.H2 dark={dark}>
    H2
  </Typography.H2>
)

export const Heading3 = ({ dark }) => (
  <Typography.H3 dark={dark}>
    H3
  </Typography.H3>
)

export const Heading4 = ({ dark }) => (
  <Typography.H4 dark={dark}>
    H4
  </Typography.H4>
)

export const Paragraph = ({ dark }) => (
  <Typography.P dark={dark}>
    Paragraph. Adipisicing nobis vel nostrum esse repellendus! Quo perspiciatis dolorum reprehenderit voluptas esse Totam ipsa libero earum necessitatibus quasi Est ea officia illo debitis iure Consectetur vitae perferendis vel eaque fugiat
  </Typography.P>
)
