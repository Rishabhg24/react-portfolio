import React from 'react'

export function Gallery(props) {
    return (
      <div>
        <img src={props.url}/>
      </div>
    )
  }
  export function Profile() {
    return (
      <div>
        <p>this image belong to the gallery</p>
      </div>
    )
  }
  