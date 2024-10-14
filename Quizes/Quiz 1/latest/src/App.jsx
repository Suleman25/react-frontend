import React from 'react'

const App = () => {
  return (
    <div>
      <div className='green' onClick={()=>alert('Green Box is CLicked')}>green</div>
      <div className='red' onClick={()=>alert('Red Box is CLicked')}>blue</div>
    </div>
  )
}

export default App