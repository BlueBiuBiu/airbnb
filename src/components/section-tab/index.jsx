import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { SectionTabWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'


const SectionTab = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  /** 事件处理 */
  function handleTabClick(item, index) {
    setCurrentIndex(index)
    tabClick(item, index)
  }

  return (
    <SectionTabWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div key={item}
                className={classNames(['tab-item', {'active': currentIndex === index }])}
                onClick={e => handleTabClick(item, index)}
              >{item}</div>
            )
          })
        }
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTab