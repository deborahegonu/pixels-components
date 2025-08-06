

import pixelsLogo from './assets/pixels-logo.svg'
import stieglLogo from "./assets/kundenlogos/Stiegl Logo.svg"
import swingLogo from "./assets/kundenlogos/swing-kitchen.svg"
import respactLogo from "./assets/kundenlogos/respACT.svg"
import donauKremsLogo from "./assets/kundenlogos/donau-krems-universitat.svg"
import ersteLogo from "./assets/kundenlogos/erste-sparkasse.svg"
import wienLogo from "./assets/kundenlogos/wien-museum.svg"
import impactsLogo from "./assets/kundenlogos/impacts-catering.svg"
import jpLogo from "./assets/kundenlogos/jp.svg"
import boschLogo from "./assets/kundenlogos/Bosch_M.svg"
import enuLogo from "./assets/kundenlogos/enu.svg"
import handelsLogo from "./assets/kundenlogos/handels-verband.svg"
import bbgLogo from "./assets/kundenlogos/bbg.svg"
import { Button } from './components/button'
import heroVideo from "./assets/videos/gpx_showreel.mp4"
import wienDemo from "./assets/arbeiten/bilder/wien-museum.svg"
import stieglDemo from "./assets/arbeiten/bilder/stiegl.svg"
import nabeDemo from "./assets/arbeiten/bilder/nabe.svg"
import joolaDemo from "./assets/arbeiten/bilder/joola.svg"
import demoVideo from "./assets/arbeiten/videos/consertis_showreel.mp4"
import baVideo from "./assets/arbeiten/videos/BA_Logoanimation_quadratisch_Loop.mp4"
import swingDemo from "./assets/arbeiten/bilder/swing.svg"
import fyssDemo from "./assets/arbeiten/bilder/fyss.svg"
import grapesDemo from "./assets/arbeiten/bilder/wien.svg"
import consolmoDemo from "./assets/arbeiten/bilder/consolmo.svg"
import handelsDemo from "./assets/arbeiten/bilder/handels.svg"
import naturlandDemo from "./assets/arbeiten/bilder/naturland.svg"

function App() {


  return (
    <>
      <header className='flex items-center justify-between'>
        <a href="#" target="_blank" className='w-1/6'>
          <img src={pixelsLogo} className="logo" alt="Vite logo" />
        </a>
        <nav className='bg-[#fefefc] w-1/2 flex items-center justify-between sticky top-0 rounded-[40px]'>
          <a href='#' className='stat-active'>Start</a>
          <a href='#'>Arbeiten</a>
          <a href='#'>Expertise</a>
          <a href='#'>Über uns</a>
          <a href='#'>Kontakt</a>
        </nav>
        <div className='w-1/6'></div>
      </header>
      
      <section className='py-44 relative'>
      <h1 className='py-8 text-center'>
      Verantwortungsvolles Design <br/>für eine vernetzte Welt.
      </h1>
      <div className='w-full h-full absolute'>
        <video width="95%" height="903" autoPlay muted loop className='rounded-[40px]'>
            <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>        
          
      </section>
      <section className='green py-44 px-20'>
        <h2 className='text-center mt-96'>Wir sind ein inhabergeführtes Büro für hybrides Kommunikationsdesign und entwickeln Markenerlebnisse, die Menschen online und offline begeistern.</h2>
        <div className='w-5/6 mx-auto grid grid-cols-6 gap-8 items-center justify-center py-24'>
          <img src={stieglLogo} alt='' />
          <img src={swingLogo} alt='' />
          <img src={respactLogo} alt='' />
          <img src={donauKremsLogo} alt='' />
          <img src={ersteLogo} alt='' />
          <img src={wienLogo} alt='' />
          <img src={impactsLogo} alt='' />
          <img src={jpLogo} alt='' />
          <img src={boschLogo} alt='' />
          <img src={enuLogo} alt='' />
          <img src={handelsLogo} alt='' />
          <img src={bbgLogo} alt='' />
        </div>
      </section>
      <section className='green-end py-44'>
        <div className='grid grid-cols-4 gap-8'>
          <div className='col-span-2 row-span-2 demo'>
            <img src={wienDemo} alt='Wien Museum' />
          </div>
          <div className='demo'>
            <img src={stieglDemo} alt='' />
          </div>
          <div className='demo'>
            <video width="379" height="379" autoPlay muted loop className='rounded-xl'>
              <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <div className='demo'>
            <img src={nabeDemo} alt='' />
          </div>
          <div className='demo'>
            <img src={joolaDemo} alt='' />
          </div>
          <div className='demo'>
          <video width="379" height="379" autoPlay muted loop className='rounded-xl'>
              <source src={baVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <div className='demo'>
            <img src={fyssDemo} alt='' />
          </div>
          <div className='col-span-2 demo'>
            <img src={swingDemo} alt='' />
          </div>
          <div className='demo'>
            <img src={grapesDemo} alt='' />
          </div>
          <div className='demo'>
            <img src={consolmoDemo} alt='' />
          </div>
          <div className='demo'>
            <img src={handelsDemo} alt='' />
          </div>
          <div className='demo'>
            <img src={naturlandDemo} alt='' />
          </div>
        </div>
      </section>
      <section className='yellow py-44'>
        <div className=''>
          <div>
            <h2>Ein kleines Büro mit großen Ideen!</h2>
            <p>Gutes Design ist für uns mehr als Ästhetik — es ist ein Navigationssystem in einer komplexen Welt. Als kleine Agentur bestehend aus Spezialisten helfen wir Unternehmen, sich in einer hybriden Welt authentisch zu präsentieren.</p>
            <Button label='Über uns' icon />
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App
