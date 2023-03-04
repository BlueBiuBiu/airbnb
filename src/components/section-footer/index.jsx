import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  const navigate = useNavigate()

  /** 事件处理 */
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper color={name ? "#00848A": "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{ showMessage }</span>
        <IconMoreArrow/>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter