'use client'

import { useState } from 'react'
import Header from './ui/header'
//import categories from './utils/config';

export default function Home() {
  const [category, setCategory] = useState('music');

  const handleClick = (tab) =>{
    setCategory(tab)
  }
  
  return (
    <Header handleClick={handleClick}/>
  )
}