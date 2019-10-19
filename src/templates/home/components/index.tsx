import React, { useState } from 'react'

import Modal from 'react-modal'

import dayjs from 'dayjs'
import { FaMinus, FaPlus } from 'react-icons/fa'

import { Input, Label, Select } from '@rebass/forms'
import { Box, Button, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

import Date from './date'
import Slot from './slot'

const ShadowCard = styled(Card)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const FabButton = styled(Box)`
  background: rgb(26, 115, 232);
  position: fixed;
  bottom: calc(10px + env(safe-area-inset-bottom));
  right: 10px;
  z-index: 2;
  border-radius: 50%;
  line-height: 0;
`

const Divider = styled(Box)`
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;

  border-style: solid;
  border-color: #e8e8e8;
`

const StyledInput = styled(Input)`
  border: 1px solid rgb(218,220, 224) !important;
  border-radius: 3px;
`

const StyledSelect = styled(Select)`
  border: 1px solid rgb(218,220, 224) !important;
  border-radius: 3px;
`

const StyledButton = styled(Button)`
  background: rgb(26, 115, 232);
  color: #fff;
`

const HomeComponent: React.FC = props => {
  const [isModal, setIsModal] = useState<boolean>(false)

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
          <Divider />
          <Slot slot={{
              begin: 387,
              duration: 20,
              title: 'Registration',
              venue: 'Somewhere',
              date: '2020-02-21',
              workspace: 'someid',
            }}
          />
          <Divider />
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
      <FabButton p={3} onClick={() => setIsModal(prev => !prev)}>
        {isModal ? <FaMinus size={`22px`} color={`#fff`} /> : <FaPlus size={`22px`} color={`#fff`} />}
      </FabButton>
      <Modal
        isOpen={isModal}
        onRequestClose={() => setIsModal(false)}
        contentLabel={`Add slot`}
        ariaHideApp={false}
        style={{
          content : {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Box>
          <Box py={2}>
            <Text fontSize={26} fontWeight={500}>Adding a slot</Text>
          </Box>
          <Box py={2}>
            <Label htmlFor='title' pb={1}>Title</Label>
            <StyledInput
              placeholder='Input here'
            />
          </Box>
          <Box py={2}>
            <Label htmlFor='venue' pb={1}>Venue</Label>
            <StyledInput
              placeholder='Input here'
            />
          </Box>
          <Flex flexWrap={`wrap`}>
            <Box width={1 / 2} py={2} pr={2}>
              <Label htmlFor='title' pb={1}>Start time</Label>
              <StyledInput
                placeholder='11:12'
              />
            </Box>
            <Box width={1 / 2} py={2} pl={2}>
              <Label htmlFor='title' pb={1}>Duration (minutes)</Label>
              <StyledSelect
                id='duration'
                name='duration'
                defaultValue='5'>
                  <option key={5}>5</option>
                  <option key={10}>10</option>
                  <option key={15}>15</option>
                  <option key={20}>20</option>
              </StyledSelect>
            </Box>
          </Flex>
          <Box py={2}>
            <StyledButton mr={2}>
              ADD
            </StyledButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default HomeComponent
