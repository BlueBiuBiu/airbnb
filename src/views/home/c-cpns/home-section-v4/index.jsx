import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HomeSectionV4Wrapper } from './style'

const HomeSectionV4 = memo((props) => {
  const { InfoData } = props
  
  return (
    <HomeSectionV4Wrapper>
      <SectionHeader title={ InfoData.title } subtitle={ InfoData.subtitle } />
      <ScrollView>
        {
          InfoData.list?.map(item => {
            return <RoomItem item={item} key={ item.id } itemwidth="20%" />
          })
        }
      </ScrollView>
      <SectionFooter name="plus"/>
    </HomeSectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  InfoData: PropTypes.object
}

export default HomeSectionV4