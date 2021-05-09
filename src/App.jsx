import React from 'react'
import Header from './Header'
import Columns from './Columns'

// total number of columns
const total = 3

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header total={total} />
        <Columns total={total} />
      </div>
    </div>
  );
}

export default App
