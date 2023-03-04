import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeSectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item-list";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { InfoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={InfoData.title} />
      <RoomItem roomList={InfoData.list} />
      <SectionFooter/>
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  InfoData: PropTypes.object,
};

export default HomeSectionV1;
