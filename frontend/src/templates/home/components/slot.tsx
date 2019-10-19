import React from 'react'

import dayjs from 'dayjs'
import { FaPencilAlt } from 'react-icons/fa'

import { Box, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

import { ISlotProps } from '../@types/ISlotProps'

const Tag = styled(Box)`
  background: rgb(255, 64, 129);
  border-radius: 3px;
  color: #fff;
`

const HomeSlotComponent: React.FC<ISlotProps> = props => {
  const {slot} = props

  const time = dayjs(`${Math.floor(slot.begin / 24)}:${slot.begin % 60}`, 'H:m')

  return (
    <Card py={2} px={4}>
      <Flex>
        <Box>
          <Text fontSize={16} p={1}>Registration</Text>
          <Text fontSize={14} color={`#718096`} p={1}>09:30 - 10:30 / War room</Text>
        </Box>
        <Box mx={`auto`} />
        <Box mt={2}>
          <Box>
            <FaPencilAlt color={`#718096`} />
          </Box>
        </Box>
      </Flex>
      <Box>
        <Flex>
          <Box py={2}>
            <Tag fontSize={12} px={2} py={1}>Riffy</Tag>
          </Box>
        </Flex>
      </Box>
    </Card>
  )
}

export default HomeSlotComponent
