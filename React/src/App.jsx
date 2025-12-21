import React from 'react'
import Counter from './components/Counter'
import ListComponent from './components/list'
import DiffingPractice from './components/Reconciliation'

const App = () => {
  return (
    <div>
      <DiffingPractice/>
      <Counter/>
      <ListComponent/>
    </div>
  )
}

export default App
