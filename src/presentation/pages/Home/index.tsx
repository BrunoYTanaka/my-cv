import React from 'react'
import { Contact } from '@/components/Sections/Contact'

import { layout } from '@/presentation/config'

function Home() {
  return (
    <React.Fragment>
      <Contact {...layout.contact} />
    </React.Fragment>
  )
}

export { Home }
