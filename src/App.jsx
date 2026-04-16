import React from 'react'
import Header from './components/Header'
import Center from './components/Center'
import Bottom from './components/Bottom'

const App = () => {
  return (
    <div className='card'>
      <Header/>
      <Center/>
      <Bottom/>
    </div>
  )
}

export default App