import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'

import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [showPanel, setShowPanel] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }

    /** 第三个参数设置为true, 采用捕获的方式 */
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  /** 事件处理函数 */
  function showPanelClick() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <div className='btn'>登录</div>
        <div className='btn'>注册</div>
        <div className='btn'><IconGlobal/></div>
      </div>
      
      <div className="profile" onClick={showPanelClick}>
        <IconMenu/>
        <IconAvatar />
        {
          showPanel &&
          <div className='panel'>
            <div className="top">
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className="bottom">
              <div className='item'>出租房源</div>
              <div className='item'>开始体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight