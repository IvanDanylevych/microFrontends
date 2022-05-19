import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'
import React, { useRef, useEffect } from 'react'

export default () => {
  const history = useHistory()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          if (history.location.pathname !== nextPathname) {
            history.push(nextPathname)
          }
        },
      })
      history.listen(onParentNavigate)
    }
  }, [])

  return <div ref={ref}></div>
}
