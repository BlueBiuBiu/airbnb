import React, { memo, useState } from 'react'

import { AppHeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'


const AppHeader = memo(() => {

  return (
    <AppHeaderWrapper>
      <div className="content">
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
      </div>
    </AppHeaderWrapper>
  )
})

export default AppHeader