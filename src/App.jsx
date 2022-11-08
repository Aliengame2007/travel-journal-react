import { useState } from 'react'
import NavBar from './NavBar'
import Journey from './Journey'
import data from './data'

function App() {

  const journeys = data.map(journey => {
    return(
      <Journey
        key={journey.id}
        journey={journey}
      />
    )
  })

  return (
    <div>
      <NavBar />
      {journeys}
    </div>
  )
}

export default App
