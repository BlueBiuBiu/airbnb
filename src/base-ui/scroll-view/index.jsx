import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import React, { memo, useState, useEffect, useRef } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {

  /** 定义数据 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const currentIndexRef = useRef(0)
  const canMoveRef = useRef()
  const scrollContentRef = useRef()

  /** 副作用 */
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    canMoveRef.current = scrollWidth - clientWidth
    setShowRight(canMoveRef.current > 0)
  }, [props.children])

  
  /** 事件处理函数 */
  function controlClickHandle(isRight) {
    currentIndexRef.current = isRight ?
      currentIndexRef.current + 1 : 
      currentIndexRef.current - 1
    const currentItem = scrollContentRef.current.children[currentIndexRef.current]
    const currentItemOffsetLeft = currentItem.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${currentItemOffsetLeft}px)`
    console.log(canMoveRef, currentItemOffsetLeft, currentItem);
    // 控制显示按钮
    setShowRight(canMoveRef.current > currentItemOffsetLeft)
    setShowLeft(currentItemOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div> 
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView