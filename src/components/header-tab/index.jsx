import PropTypes from "prop-types";
import React, { memo } from "react";

import { HeaderTabWrapper } from "./style";

const HeaderTab = memo((props) => {
  const { tabInfo } = props;
  return (
    <HeaderTabWrapper>
      <div className="tab">
        {tabInfo?.searchInfos?.map((item, index) => {
          return (
            <>
              <div className="item" key={index}>
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.desc}</div>
              </div>
              {(index < tabInfo?.searchInfos.length - 1) && <div className="divider"></div>}
            </>
          );
        })}
      </div>
    </HeaderTabWrapper>
  );
});

HeaderTab.propTypes = {};

export default HeaderTab;
