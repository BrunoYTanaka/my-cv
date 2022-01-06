import React from 'react'
import { Contact, AboutMe, Skills } from '@/components'

import { layout } from '@/config'

function Home() {
  return (
    <React.Fragment>
      <Contact {...layout.contact} />
      <AboutMe {...layout.aboutMe} />
      <Skills {...layout.skills} />
    </React.Fragment>
  )
}

export { Home }
