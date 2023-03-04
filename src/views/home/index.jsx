import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeSectionV4 from './c-cpns/home-section-v4'


const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        { isEmptyO(discountInfo) && <HomeSectionV2 InfoData={ discountInfo } />}
        { isEmptyO(recommendInfo) && <HomeSectionV2 InfoData={ recommendInfo } />}
        { isEmptyO(longforInfo) && <HomeSectionV3 InfoData={ longforInfo } />}
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 InfoData={goodPriceInfo} />}
        { isEmptyO(highScoreInfo) && <HomeSectionV1 InfoData={ highScoreInfo } />}
        { isEmptyO(plusInfo) && <HomeSectionV4 InfoData={ plusInfo } />}
      </div>
    </HomeWrapper>
  )
})

export default Home