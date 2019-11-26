import React from 'react'
import { Ball, Bars } from '../src'
import { storiesOf } from '@storybook/react'

storiesOf('Spinners', module)
  .add('Ball', () => <Ball />)
  .add('Bars', () => <Bars />)
