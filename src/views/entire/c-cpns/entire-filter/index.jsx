import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selected, setSelected] = useState([])

  /** 事件处理 */
  function filterClick(item) {
    const newSelected = [...selected]
    if (newSelected.includes(item)) {
      const index = newSelected.findIndex(iten => item === iten)
      newSelected.splice(index, 1)
    } else {
      newSelected.push(item)
    }
    setSelected(newSelected)
  }

  return (
    <EntireFilterWrapper>
      {
        filterData.map(item => {
          return (
          <div className={classNames('item', { active: selected.includes(item) })}
            key={item}
            onClick={e => filterClick(item)}>{item}
          </div>)
        })
      }
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter