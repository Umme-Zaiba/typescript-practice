// extracting a component prop type
import React from 'react'
import Greeting from '../basicprops/Greeting'

const CustomComponent = (props:React.ComponentProps<typeof Greeting>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default CustomComponent
