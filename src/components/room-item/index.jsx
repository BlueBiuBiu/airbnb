import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import Slider from "react-slick";
import ClassNames  from "classnames";

import { RoomItemWrapper } from "./style";
import { Rating } from '@mui/material'
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

const RoomItem = memo((props) => {
  const { item, itemwidth = "25%", itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  /** 数据定义 */
  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    afterChange: SliderChange
  };

  /** 事件处理 */
  function previousClick(e) {
    sliderRef.current.slickPrev()
    e.stopPropagation()
  }

  function nextClick(e) {
    sliderRef.current.slickNext()
    e.stopPropagation()
  }

  function SliderChange(index) {
    setSelectIndex(index)
  }

  function itemClickHandle() {
    if(itemClick) itemClick(item)
  }

  /** 不同情况的子元素 */
  const pictureElement = (
    <div className="cover">
      <img src={item.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={previousClick}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className="btn right" onClick={nextClick}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {
          item?.picture_urls?.map(item => {
            return (
              <div className="cover" key={ item }>
                <img src={ item } alt="" />
              </div>
            )
          })
        }
      </Slider>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            item?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={ClassNames('dot', {
                    active: index === selectIndex,
                  })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
    </div>
  )

  return (
    <RoomItemWrapper
      className="inner"
      verifycolor={item?.verify_info?.text_color || "#39576a"}
      key={item.id}
      itemwidth={itemwidth}
      onClick={itemClickHandle}
    >
      { !item.picture_urls ? pictureElement : sliderElement}
      <div className="desc">{item.verify_info.messages.join(" · ")}</div>
      <div className="name">{item.name}</div>
      <div className="price">¥{item.price}/晚</div>
      <div className="rate">
        <Rating
          value={item.star_rating ?? 5}
          precision={0.1}
          sx={{ fontSize: "12px", color: "#00848A" }}
        />
        <span className="count">{item.reviews_count}</span>
        {item.bottom_info && (
          <span className="extra">·{item.bottom_info.content}</span>
        )}
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  item: PropTypes.object
};

export default RoomItem;
