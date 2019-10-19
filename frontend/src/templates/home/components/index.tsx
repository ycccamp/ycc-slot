import React from 'react'

import { Box, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

import Slot from './slot'

const ShadowCard = styled(Card)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const HomeComponent: React.FC = props => {
  return (
    <Flex justifyContent={`center`}>
      <Box width={12 / 24}>
        <Flex justifyContent={`center`} flexWrap={`wrap`}>
          <Box width={2 / 5} p={4}>
            <ShadowCard py={3} px={4}>
              <Text fontSize={21} fontWeight={500}>Add slot</Text>
            </ShadowCard>
          </Box>
          <Box width={2 / 5} p={4}>
            <Slot />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomeComponent
