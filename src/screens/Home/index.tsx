import React from 'react'
import { Contact, AboutMe, Skills, Experiences } from '@/components'

import { layout } from '@/config'

function Home() {
  return (
    <React.Fragment>
      <Contact {...layout.contact} />
      <AboutMe {...layout.aboutMe} />
      <Skills {...layout.skills} />
      <Experiences {...layout.experiences} />
    </React.Fragment>
  )
}

export { Home }
