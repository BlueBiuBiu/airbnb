import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'

import { RoomItemListWrapper } from './style'

const RoomItemList = memo((props) => {
  const { roomList = [], itemwidth } = props
  return (
    <RoomItemListWrapper  itemwidth={itemwidth}>
      {
        roomList.slice(0,8)?.map(item => {
          return <RoomItem key={ item.id } item={ item } itemwidth={itemwidth}/>
        })
      }
    </RoomItemListWrapper>
  )
})

RoomItemList.propTypes = {
  roomList: PropTypes.array,
  itemwidth: PropTypes.string
}

export default RoomItemList