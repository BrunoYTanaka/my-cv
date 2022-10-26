import React from 'react'
import { SSRConfig } from 'next-i18next'
import { Contact, AboutMe, Skills, Experiences } from '@/components/Sections'
import { Metadata } from '@/components/Metadata'

interface HomeProps extends SSRConfig {
  layout: LayoutProps
}

function Home({ layout, ...rest }: HomeProps) {
  return (
    <React.Fragment>
      <Metadata />
      <Contact {...layout.contact} {...rest} />
      <AboutMe {...layout.aboutMe} {...rest} />
      <Skills {...layout.skills} {...rest} />
      <Experiences {...layout.experiences} {...rest} />
    </React.Fragment>
  )
}

export { Home }
