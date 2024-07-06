//Basic Props - objects
//importing the types from the file
import { PersonProps } from "./Person.types";

const Person = (props:PersonProps) => {
  return (
    <div>
      hey {props.name.first} {props.name.last}
    </div>
  )
}

export default Person
