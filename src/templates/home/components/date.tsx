import React, { useState } from 'react'

import dayjs, { Dayjs } from 'dayjs'

import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import { IDateProps } from '../@types/IDateProps'

const ShadowFlex = styled(Flex)`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const SelectorBox = styled(Box)`
  ${(props) => props.selected ? `
    border-bottom: 2px solid rgb(26, 115, 232);
  ` : null}
`

const HomeDateComponent: React.FC<IDateProps> = props => {
  const {date} = props

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(date))

  const today = dayjs(date)

  return (
    <ShadowFlex justifyContent={`center`} pt={3}>
      <SelectorBox width={1 / 4} selected={selectedDate.isSame(today.subtract(1, 'day'))} onClick={() => setSelectedDate(today.subtract(1, 'day'))} py={2}>
        <Text textAlign={`center`}>{today.subtract(1, 'day').format('MMM DD')}</Text>
      </SelectorBox>
      <SelectorBox width={1 / 4} selected={selectedDate.isSame(today)} onClick={() => setSelectedDate(today)} py={2}>
        <Text textAlign={`center`}>{today.format('MMM DD')}</Text>
      </SelectorBox>
      <SelectorBox width={1 / 4} selected={selectedDate.isSame(today.add(1, 'day'))} onClick={() => setSelectedDate(today.add(1, 'day'))} py={2}>
        <Text textAlign={`center`}>{today.add(1, 'day').format('MMM DD')}</Text>
      </SelectorBox>
      <SelectorBox width={1 / 4} selected={selectedDate.isSame(today.add(2, 'day'))} onClick={() => setSelectedDate(today.add(2, 'day'))} py={2}>
        <Text textAlign={`center`}>{today.add(2, 'day').format('MMM DD')}</Text>
      </SelectorBox>
    </ShadowFlex>
  )
}

export default HomeDateComponent
