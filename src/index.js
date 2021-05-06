import React from 'react'
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
  return <div>
    <header className='print:hidden flex-center flex-col space-y-2 py-4'>
      <h1 className='text-2xl'>Gloomhaven Printables</h1>
      <p className='italic'>
        <strong>Instructions:</strong>{' '}
        Print on plain, letter-sized paper with a laser printer.
      </p>
      <button type='button' onClick={e => print()} className='p-2 rounded shadow-md bg-purple-400 hover:bg-purple-500 focus:bg-purple-600 text-white'>Print</button>
    </header>
    <main className='w-8.5in h-11in border print:border-0 m-auto p-0.5in'>
      <section className='h-full w-full grid grid-cols-5 row-auto col-auto place-items-center border print:border-0'>
        <BeastTyrant height='1in' width='1in' />
        <Berserker className='flip' height='1in' width='1in' />
        <Brute height='1in' width='1in' />
        <Cragheart className='flip' height='1in' width='1in' />
        <Doomstalker height='1in' width='1in' />
        <Elementalist height='1in' width='1in' />
        <MindThief className='flip' height='1in' width='1in' />
        <NightShroud className='flip' height='1in' width='1in' />
        <Plagueherald height='1in' width='1in' />
        <Spellweaver height='1in' width='1in' />
        <Summoner className='flip' height='1in' width='1in' />
        <Sunkeeper height='1in' width='1in' />
        <Tinkerer height='1in' width='1in' />
        <Soothsinger className='flip' height='1in' width='1in' />
        <Scoundrel className='flip' height='1in' width='1in' />
        <Sawbones className='flip' height='1in' width='1in' />
        <Quartermaster height='1in' width='1in' />
        <Wind  className='flip text-wind' height='1in' width='1in' />
        <Sun height='1in' width='1in' />
        <Fire className='flip text-fire' height='1in' width='1in' />
        <Frost height='1in' width='1in' />
        <Leaf className='flip text-leaf' height='1in' width='1in' />
        <Moon className='flip text-moon' height='1in' width='1in' />
        <Leaf className='flip text-black' height='1in' width='1in' />
      </section>
    </main>
  </div>
}

render(<App />, document.getElementById('app'))
