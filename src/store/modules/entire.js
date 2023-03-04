import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getEntireRoomList } from '@/services/modules/entire'

export const fetchRoomListData = createAsyncThunk("fetchRoomListData", async (pageIndex = 0, { getState, dispatch }) => {
  // console.log(getState().entire.currentPage);
  dispatch(changeIsLoading(true))
  const res = await getEntireRoomList(pageIndex)
  dispatch(changeRoomListAction(res))
  dispatch(changeIsLoading(false))
})

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    roomList: [],
    currentPage: 0,
    totalCount: 0,

    isloading: false
  },
  reducers: {
    changeRoomListAction(state, { payload }) {
      state.roomList = payload.list
      state.totalCount = payload.totalCount
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeIsLoading(state, { payload }) {
      state.isloading = payload
    }
  }
})

export const { changeRoomListAction, changeCurrentPageAction, changeIsLoading } = entireSlice.actions
export default entireSlice.reducer