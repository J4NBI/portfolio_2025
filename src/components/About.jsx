import React from 'react'

const About = () => {
  return (
    <>
      <div className="bg-prime py-12">
        <div className="container">
          <section id='about' className='py-12 flex flex-row'>
            <div>
              <h2 className='text-third md:text-8xl text-6xl font-bold font-pop mb-8'>about.</h2>
              <p className='text-third font-pop md:w-[60%] md:text-xl'>Ich bin Jan, ein kreativer Kopf aus Berlin mit einem Hintergrund in Mediengestaltung und einem Diplom in Montage/Schnitt. Nach Jahren als freier Editor habe ich meine Leidenschaft für Grafikdesign und Webentwicklung entdeckt. Heute kombiniere ich mein technisches Know-how und meine kreative Vision, um ansprechende und funktionale Webseiten zu gestalten.</p>
            </div>
            <div>
              <p className='text-back md:text-8xl'>++//</p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default About