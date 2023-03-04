import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import { fetchRoomListData } from '@/store/modules/entire'
import { CircularProgress } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EntireRoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isloading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isloading: state.entire.isloading
  }), shallowEqual)

  /** 副作用 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListData())
  }, [dispatch])

  /** 事件处理 */
  const navigate = useNavigate()
  const itemClick = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  })

  return (
    <EntireRoomsWrapper>
      { !!totalCount && <h2>{totalCount}多处住所</h2>}
      <div className='room-list'>
        {
          roomList.map(item => {
            return <RoomItem itemClick={itemClick}  item={item} key={ item._id } itemwidth="20%"/>
          })
        }
      </div>
      {isloading && (
        <>
          <div className='load-cover'></div>
          <CircularProgress/>
        </>
      )}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms