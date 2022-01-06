import React from 'react'
import { Contact, Skills } from '@/components'

import { layout } from '@/config'

function Home() {
  return (
    <React.Fragment>
      <Contact {...layout.contact} />
      <Skills {...layout.skills} />
    </React.Fragment>
  )
}

export { Home }
