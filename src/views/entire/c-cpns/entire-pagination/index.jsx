import PropTypes from "prop-types";
import { Pagination } from "@mui/material";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { EntirePaginationWrapper } from "./style";
import { fetchRoomListData } from "@/store/modules/entire";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  /** 数据计算 */
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20);

  /** 事件处理 */
  const dispatch = useDispatch();
  function pageChangeHandle(e, pageIndex) {
    window.scrollTo(0, 0);
    dispatch(fetchRoomListData(pageIndex - 1));
  }

  return (
    <EntirePaginationWrapper>
      {!!totalCount && (
        <>
          <div className="pagination">
            <Pagination count={totalPage} onChange={pageChangeHandle} />
          </div>
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </>
      )}
    </EntirePaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
