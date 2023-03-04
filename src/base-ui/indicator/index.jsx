import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    /** 获取content的宽度 */
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    const canScrollDistance = contentScroll - contentWidth
    // console.log(contentWidth, contentScroll);

    /** 获取选择的item */
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemElLeft = selectItemEl.offsetLeft
    const itemElWidth = selectItemEl.clientWidth
    // console.log(itemElLeft, itemElWidth);

    /** 计算selectIndex滚动的距离 */
    let distance = itemElLeft + itemElWidth * 0.5 - contentWidth * 0.5
    if (distance < 0) distance = 0
    if (distance > canScrollDistance) distance = canScrollDistance
    
    /** 开始滚动 */
    contentRef.current.style.transform = `translate(-${distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator