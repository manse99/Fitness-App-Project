import '../../src/App.css'
import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <p className='aboutInfo'>This workout application allows users to view workout's under the about section. The about section contains links to video's to show proper form for each workout. The add exercise page allows a user to add, delete, edit, and view workouts they have completed.</p>
        <img className='picture' src='https://i.imgur.com/pl7bYum.jpg' alt="" />
        <h1>Choose About to Learn different Workout's</h1>
        <h2 className='dev'>Developers</h2>
        <div className='contributions'>
          <a href='https://github.com/olstromej' target='_blank'>
            <img className='photo' src='https://i.imgur.com/jydoQMr.jpg' alt=''/>
          </a>
          <a href='https://github.com/Kan5661' target='_blank'>
          <img className='photo' src='https://i.imgur.com/674hvRQ.jpg'/>
          </a>
          <a href='https://github.com/Vasilis89' target='_blank'>
          <img className='photo' src='https://i.imgur.com/uV0dEUQ.jpg'/>
          </a>
          <a href='https://github.com/individual-ism' target='_blank'>
          <img className='photo' src='https://i.imgur.com/LCDtZKM.jpg'/>
          </a>
          <a href='https://github.com/manse99' target='_blank'>
          <img className='photo' src='https://i.imgur.com/QBiVmW7_d.jpg?maxwidth=520&shape=thumb&fidelity=high'/>
          </a>
        </div>
    </div>

  )
}