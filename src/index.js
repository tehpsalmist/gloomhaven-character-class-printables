import React, { useState } from 'react'
import { render } from 'react-dom'
import BeastTyrant from './assets/1.svg'
import Berserker from './assets/2.svg'
import Brute from './assets/3.svg'
import Doomstalker from './assets/4.svg'
import Elementalist from './assets/5.svg'
import MindThief from './assets/6.svg'
import NightShroud from './assets/7.svg'
import Plagueherald from './assets/8.svg'
import Spellweaver from './assets/9.svg'
import Summoner from './assets/10.svg'
import Sunkeeper from './assets/11.svg'
import Tinkerer from './assets/12.svg'
import Soothsinger from './assets/13.svg'
import Scoundrel from './assets/14.svg'
import Sawbones from './assets/15.svg'
import Quartermaster from './assets/16.svg'
import Cragheart from './assets/17.svg'
import Wind from './assets/wind.svg'
import Fire from './assets/fire.svg'
import Sun from './assets/sun.svg'
import Frost from './assets/frost.svg'
import Leaf from './assets/leaf.svg'
import Moon from './assets/moon.svg'

export const App = props => {
  const [flipped, setFlipped] = useState(false)
  const [color, setColor] = useState(true)

  return <div>
    <header className='print:hidden flex-center flex-col space-y-2 py-4'>
      <h1 className='text-2xl'>Gloomhaven Printables</h1>
      <p className='italic'>
        <strong>Instructions:</strong>{' '}
        Print on plain, letter-sized paper with a laser printer.
      </p>
      <div className='flex-center space-x-4'>
        <label for='flip' role='button' className='p-2 rounded shadow-md bg-gray-100'>
          <input id='flip' type='checkbox' className='mr-2' checked={flipped} onChange={e => setFlipped(e.target.checked)} />
          Flip Vertically
        </label>
        <label for='color' role='button' className='p-2 rounded shadow-md bg-gray-100'>
          <input id='color' type='checkbox' className='mr-2' checked={color} onChange={e => setColor(e.target.checked)} />
          Color
        </label>
        <button type='button' onClick={e => print()} className='p-2 rounded shadow-md bg-purple-400 hover:bg-purple-500 focus:bg-purple-600 text-white'>Print</button>
      </div>
    </header>
    <main className='w-8.5in h-11in border print:border-0 m-auto p-0.5in'>
      <section className='h-full w-full grid grid-cols-5 row-auto col-auto place-items-center border print:border-0'>
        <BeastTyrant className={`${flipped ? 'flip' : ''} ${color ? 'text-beasttyrant' : ''}`} height='1in' width='1in' />
        <Berserker className={`${flipped ? 'flip' : ''} ${color ? 'text-berserker' : ''}`} height='1in' width='1in' />
        <Brute className={`${flipped ? 'flip' : ''} ${color ? 'text-brute' : ''}`} height='1in' width='1in' />
        <Cragheart className={`${flipped ? 'flip' : ''} ${color ? 'text-cragheart' : ''}`} height='1in' width='1in' />
        <Doomstalker className={`${flipped ? 'flip' : ''} ${color ? 'text-doomstalker' : ''}`} height='1in' width='1in' />
        <Elementalist className={`${flipped ? 'flip' : ''} ${color ? 'text-elementalist' : ''}`} height='1in' width='1in' />
        <MindThief className={`${flipped ? 'flip' : ''} ${color ? 'text-mindthief' : ''}`} height='1in' width='1in' />
        <NightShroud className={`${flipped ? 'flip' : ''} ${color ? 'text-nightshroud' : ''}`} height='1in' width='1in' />
        <Plagueherald className={`${flipped ? 'flip' : ''} ${color ? 'text-plagueherald' : ''}`} height='1in' width='1in' />
        <Spellweaver className={`${flipped ? 'flip' : ''} ${color ? 'text-spellweaver' : ''}`} height='1in' width='1in' />
        <Summoner className={`${flipped ? 'flip' : ''} ${color ? 'text-summoner' : ''}`} height='1in' width='1in' />
        <Sunkeeper className={`${flipped ? 'flip' : ''} ${color ? 'text-sunkeeper' : ''}`} height='1in' width='1in' />
        <Tinkerer className={`${flipped ? 'flip' : ''} ${color ? 'text-tinkerer' : ''}`} height='1in' width='1in' />
        <Soothsinger className={`${flipped ? 'flip' : ''} ${color ? 'text-soothsinger' : ''}`} height='1in' width='1in' />
        <Scoundrel className={`${flipped ? 'flip' : ''} ${color ? 'text-scoundrel' : ''}`} height='1in' width='1in' />
        <Sawbones className={`${flipped ? 'flip' : ''} ${color ? 'text-sawbones' : ''}`} height='1in' width='1in' />
        <Quartermaster className={`${flipped ? 'flip' : ''} ${color ? 'text-quartermaster' : ''}`} height='1in' width='1in' />
        <Wind className={`${flipped ? 'flip' : ''} ${color ? 'text-wind' : ''}`} height='1in' width='1in' />
        <Sun className={`${flipped ? 'flip' : ''} ${color ? 'text-sun' : ''}`} height='1in' width='1in' />
        <Fire className={`${flipped ? 'flip' : ''} ${color ? 'text-fire' : ''}`} height='1in' width='1in' />
        <Frost className={`${flipped ? 'flip' : ''} ${color ? 'text-frost' : ''}`} height='1in' width='1in' />
        <Leaf className={`${flipped ? 'flip' : ''} ${color ? 'text-leaf' : ''}`} height='1in' width='1in' />
        <Moon className={`${flipped ? 'flip' : ''} ${color ? 'text-moon' : ''}`} height='1in' width='1in' />
      </section>
    </main>
  </div>
}

render(<App />, document.getElementById('app'))
