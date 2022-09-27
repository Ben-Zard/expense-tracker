import React from 'react'

const Card = (props) => {
    const classes = 'card ' + props.className;
  return (
    <div ClassName={classes}>{props.children}</div>
  )
}

export default Card