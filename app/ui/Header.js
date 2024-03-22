'use client'

import eventsApi from '../lib/api'

export default function Header({categories}){
  async function handleClick(value){
    // cache de la info
    const a = await eventsApi(value)
    const b = a.map(c => c)
    console.log(b)
  }

  const tabs = categories.map( tab => 
    <button key={tab.category} onClick={() => handleClick(tab.category)}>{tab.name}</button>
  )
  return <nav>{tabs}</nav>
}