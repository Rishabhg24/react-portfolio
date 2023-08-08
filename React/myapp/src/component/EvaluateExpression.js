import React from 'react'

export default function EvaluateExpression () { const x=20; const y=15;
  return (
    <div>
      <h1>Evaluating Expression</h1>
    
        <h3> {x} {'>'} {y} {':'} {x>y?'true':'false'} </h3>
      
      

    </div>
  )
}
