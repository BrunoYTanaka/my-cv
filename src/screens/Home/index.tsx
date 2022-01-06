import React from 'react'
import { Contact, AboutMe, Skills } from '@/components'

import { layout } from '@/config'

function Home() {
  return (
    <React.Fragment>
      <Contact {...layout.contact} />
      <Skills />
      <AboutMe {...layout.skills} />
    </React.Fragment>
  )
}

export { Home }
