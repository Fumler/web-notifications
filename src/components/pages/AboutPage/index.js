import React from 'react'

import { PageTemplate, Header } from 'components'
import { Notification } from 'containers'

const AboutPage = () => {
  return (
    <PageTemplate header={<Header />} notification={<Notification />}>
      <h1>Welcome, friend</h1>
      <p><i>In the Age of Ancients,</i></p>
      <p><i>The world was unformed, shrouded by fog</i></p>
      <p><i>A land of grey crags, archtrees, and everlasting dragons </i></p>
      <p><i>But then there was Fire </i></p>
      <p><i>And with Fire came Disparity. Heat and cold, life and death, and of course... Light and Dark. </i></p>
      <p><i>Then, from the Dark, They came </i></p>
      <p><i>And found the Souls of Lords within the flame. </i></p>
      <p><i>Nito, the first of the dead </i></p>
      <p><i>The Witch of Izalith, and her daughters of chaos </i></p>
      <p><i>Gwyn, the Lord of Sunlight, and his faithful knights </i></p>
      <p><i>And the furtive pygmy, so easily forgotten </i></p>
      <p><i>With the Strength of Lords, they challenged the dragons. </i></p>
      <p><i>Gwyn's mighty bolts peeled apart their stone scales </i></p>
      <p><i>The witches weaved great firestorms </i></p>
      <p><i>Nito unleashed a miasma of death and disease </i></p>
      <p><i>And Seath the Scaleless betrayed his own, and the dragons were no more </i></p>
      <p><i>Thus began the Age of Fire </i></p>
      <p><i>But soon, the flames will fade, and only Dark will remain </i></p>
      <p><i>Even now, there are only embers, and man sees not light, but only endless nights </i></p>
      <p><i>And amongst the living are seen, carriers of the accursed Darksign. </i></p>

    </PageTemplate>
  )
}

export default AboutPage