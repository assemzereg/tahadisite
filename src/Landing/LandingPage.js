import React from 'react'

import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Foot from '../components/Footer'

export default function LandingPage() {
  //**************************************************/
  return (
    <div>
      <main>
        <Page1 />
        {/*************************************************/}
        <Page2 />
        {/*************************************************/}
        <Page3 />
        {/*************************************************/}
        <Page4 />
        {/*************************************************/}
        <Foot page="user" />
      </main>
    </div>
  )

  //******************************************** */
}
