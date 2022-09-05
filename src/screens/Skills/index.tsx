import React from 'react'
import { Skills } from '@/components/Sections'
import { SSRConfig } from 'next-i18next'
import { Metadata } from '@/components/Metadata'

interface SkillsProps extends SSRConfig {
  layout: LayoutProps
}

function SkillsScreen({ layout, ...rest }: SkillsProps) {
  return (
    <React.Fragment>
      <Metadata />
      <Skills {...layout.skills} {...rest} />
    </React.Fragment>
  )
}

export { SkillsScreen }
