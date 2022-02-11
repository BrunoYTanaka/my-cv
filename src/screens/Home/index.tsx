import React from 'react'
import { Contact, AboutMe, Skills, Experiences } from '@/components'
import { SSRConfig } from 'next-i18next'
import { layout } from '@/config'

function Home(props: SSRConfig) {
  return (
    <React.Fragment>
      <Contact {...layout.contact} {...props} />
      <AboutMe {...layout.aboutMe} {...props} />
      <Skills {...layout.skills} {...props} />
      <Experiences {...layout.experiences} {...props} />
    </React.Fragment>
  )
}

export { Home }
