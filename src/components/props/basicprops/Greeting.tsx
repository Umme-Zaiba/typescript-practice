//TYPING PROPS
type GreetProps = { 
    name: string;
    workingHours?: number;  //question mark means optional type 
    isLoggedin: boolean;
}
 
const Greeting = (props: GreetProps) => {
    const { workingHours = 75} = props //destructuring the object from the prop and assigning the initialvalue to it, or default 
    return (
        <div>
            <h5>
            {
                props.isLoggedin ? 
                `Hey ${props.name}, your working hours is ${workingHours}`
                : `Hey Newbie`
            }   
                </h5>
            
        </div>
    )
}
export default Greeting

//TWO WAY OF SPECIFYING THE PROPS

// const Greeting:React.FC<GreetProps> = ({name}) => {
//   return (
//     <div>
//       <h2>Hello {name}</h2>
//     </div>
//   )
// }

