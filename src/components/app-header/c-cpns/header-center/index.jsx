import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { memo, useState } from "react";

import { CenterWrapper } from "./style";
import tabData from "@/assets/data/search_titles.json";
import classNames from "classnames";
import HeaderTab from "@/components/header-tab";

const HeaderCenter = memo((props) => {

  /** 数据定义 */
  const [isSearch, setIsSearch] = useState(false);
  const [currentItem, setCurrentItem] = useState(() => ({
    index: 0,
    tabInfo: tabData[0],
  }));

  /** 事件处理 */
  function searchClickHandle() {
    setIsSearch(true);
  }

  function tabClick(item, index) {
    setCurrentItem({
      index,
      tabInfo: item,
    });
  }

  return (
    <CenterWrapper>
      {!isSearch ? (
        <div className="search-bar" onClick={searchClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <>
          <div className="tab">
            {tabData?.map((item, index) => {
              return (
                <>
                  <div
                    className={classNames("title", {
                      active: currentItem.index === index,
                    })}
                    onClick={(e) => tabClick(item, index)}
                  >
                    {item.title}
                  </div>
                </>
              );
            })}
          </div>
          <div className="header-tab">
            <HeaderTab tabInfo={currentItem.tabInfo} />
          </div>
          <div className="cover" onClick={e => setIsSearch(false)}></div>
        </>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;
