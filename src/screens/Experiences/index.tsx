import React from 'react'
import { Experiences } from '@/components/Sections'
import { SSRConfig } from 'next-i18next'
import { Metadata } from '@/components/Metadata'

interface ExperiencesProps extends SSRConfig {
  layout: LayoutProps
}

function ExperiencesScreen({ layout, ...rest }: ExperiencesProps) {
  return (
    <React.Fragment>
      <Metadata />
      <Experiences {...layout.experiences} {...rest} />
    </React.Fragment>
  )
}

export { ExperiencesScreen }
