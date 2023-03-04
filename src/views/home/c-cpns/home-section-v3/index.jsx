import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { InfoData } = props
  
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={ InfoData.title } subtitle={ InfoData.subtitle } />
      <div className='longfor-list'>
        <ScrollView>
          {
            InfoData.list?.map(item => {
              return (
                <div className='inner' key={item.city}>
                  <img className="cover" src={ item.picture_url } alt="" />
                  <div className='bg-cover'></div>
                  <div className='desc'>
                    <div className='name'>{ item.city }</div>
                    <div className='price'>均价{ item.price }</div>
                  </div>
                </div>
              )
            })
          }
        </ScrollView>
      </div>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  InfoData: PropTypes.object
}

export default HomeSectionV3