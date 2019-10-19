import React from 'react'

import { FaPencilAlt } from 'react-icons/fa'

import { Box, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

const ShadowCard = styled(Card)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const HomeSlotComponent: React.FC = props => {
  return (
    <ShadowCard py={4} px={4}>
      <Flex>
        <Box>
          <Box p={2}>
            <Text fontSize={32} fontWeight={500}>09:00 - 10:30</Text>
            <Text fontSize={16} color={`#a0aec0`}>War room</Text>
          </Box>
          <Box p={2}>
            <Text fontSize={18}>Registration</Text>
          </Box>
        </Box>
        <Box mx={`auto`} />
        <Box mt={3}>
          <Box>
            <FaPencilAlt color={`#718096`} />
          </Box>
        </Box>
      </Flex>
    </ShadowCard>
  )
}

export default HomeSlotComponent
