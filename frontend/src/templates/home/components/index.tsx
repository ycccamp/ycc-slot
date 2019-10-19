import React from 'react'

import dayjs from 'dayjs'

import { Box, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

import Date from './date'
import Slot from './slot'

const ShadowCard = styled(Card)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const HomeComponent: React.FC = props => {
  return (
    <Box py={3}>
      <Date date={dayjs().format('YYYY-MM-DD')} />
      <Flex justifyContent={`center`} pt={4}>
        <Box width={22 / 24}>
          <Slot slot={{
              begin: 387,
              duration: 20,
              title: 'Registration',
              venue: 'Somewhere',
              date: '2020-02-21',
              workspace: 'someid',
            }}
          />
          <Slot slot={{
              begin: 387,
              duration: 20,
              title: 'Registration',
              venue: 'Somewhere',
              date: '2020-02-21',
              workspace: 'someid',
            }}
          />
          <Slot slot={{
              begin: 387,
              duration: 20,
              title: 'Registration',
              venue: 'Somewhere',
              date: '2020-02-21',
              workspace: 'someid',
            }}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default HomeComponent
