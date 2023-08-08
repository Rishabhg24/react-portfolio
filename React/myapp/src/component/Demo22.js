import React from 'react'
let m=[{name:'rishabh', age:'22'},
{name:'rishu', age:'21'},
{name:'rishi', age:'19'},
{name:'chirag', age:'18'}];
export default function Demo22() {
  return (
    <div>
      {m.map(obj) => {
        return (
            <p>{obj.name}</p>
            <p>{}obj.age</p>
        );
      }}
    </div>
  )
}
