import React from 'react'
import { AboutMe } from '@/components/Sections'
import { SSRConfig } from 'next-i18next'
import { Metadata } from '@/components/Metadata'

interface AboutMeProps extends SSRConfig {
  layout: LayoutProps
}

function AboutMeScreen({ layout, ...rest }: AboutMeProps) {
  return (
    <React.Fragment>
      <Metadata />
      <AboutMe {...layout.aboutMe} {...rest} />
    </React.Fragment>
  )
}

export { AboutMeScreen }
