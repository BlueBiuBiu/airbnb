import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } =  props
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      { subtitle && <div className="sub-title">{ subtitle }</div> }
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader