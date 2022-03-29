import React from 'react'
import { Contact, AboutMe, Skills, Experiences } from '@/components/Sections'
import { SSRConfig } from 'next-i18next'

interface HomeProps extends SSRConfig {
  layout: LayoutProps
}

function Home({ layout, ...rest }: HomeProps) {
  return (
    <React.Fragment>
      <Contact {...layout.contact} {...rest} />
      <AboutMe {...layout.aboutMe} {...rest} />
      <Skills {...layout.skills} {...rest} />
      <Experiences {...layout.experiences} {...rest} />
    </React.Fragment>
  )
}

export { Home }
