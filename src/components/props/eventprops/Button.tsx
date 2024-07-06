// Event has event type in typescript

type ButtonProp ={
    handleClick : (
        event: React.MouseEvent<HTMLButtonElement>, 
        id: number
    )=> void
}

const Button = (props: ButtonProp) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event,1)}>Click</button>
    </div>
  )
}

export default Button













// import React from 'react'

// const Button:React.FC = () => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
//     console.log("Button Clicked")
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }
// export default Button

