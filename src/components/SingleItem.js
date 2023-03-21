import React from 'react'

const SingleItem = ({title, bid, image}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{bid}</h1>
    </div>
  )
}

export default SingleItem