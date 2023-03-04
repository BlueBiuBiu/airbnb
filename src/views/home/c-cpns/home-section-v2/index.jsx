import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { HomeSectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item-list";
import SectionTab from "@/components/section-tab";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { InfoData } = props;

  /** 定义数据 */
  const initialCityName = Object.keys(InfoData.dest_list)[0];
  const [cityName, setCityName] = useState(initialCityName);

  /** 事件处理 */
  function tabClick(item) {
    setCityName(item);
  }

  /** 数据处理 */
  const nameArr = InfoData?.dest_address?.map((item) => item.name);

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={InfoData.title} subtitle={InfoData?.subtitle} />
      <SectionTab tabNames={nameArr} tabClick={tabClick} />
      <RoomItem roomList={InfoData?.dest_list?.[cityName]} itemwidth="33.33%" />
      <SectionFooter name={ cityName } />
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  InfoData: PropTypes.object,
};

export default HomeSectionV2;
