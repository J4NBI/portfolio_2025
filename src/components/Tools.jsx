import React from 'react'

import html from '../assets/icons/html5.svg'
import css from '../assets/icons/css3.svg'
import js from '../assets/icons/square-js.svg'
import react from '../assets/icons/react.svg'
import git from '../assets/icons/github.svg'
import chrome from '../assets/icons/chrome.svg'

const Tools = () => {
  return (
    <>
    <div className=' bg-prime py-20'>
      <div className='container'>
        <section className=''>
          <h3 className='text-third md:text-8xl text-6xl font-bold font-pop mb-8'>tools.</h3>
          <div className="flex justify-between">
            <img className="size-20 text-back " src={html} alt="html icon" style={{ filter: 'invert(0.8)' }} />
            <img className="size-20 text-back" src={css} alt="html icon" style={{ filter: 'invert(0.8)' }} />
            <img className="size-20 text-back" src={js} alt="html icon" style={{ filter: 'invert(0.8)' }} />
            <img className="size-20 text-back" src={react} alt="html icon" style={{ filter: 'invert(0.8)' }} />
            <img className="size-20 text-back" src={chrome} alt="html icon" style={{ filter: 'invert(0.8)' }} />
          </div>

        </section>
      </div>
    </div>
    </>
  )
}

export default Tools