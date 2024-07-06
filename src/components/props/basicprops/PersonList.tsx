//extract the types and use it over multiple places
import {Name} from './Person.types'

type PersonListProps ={
    names: Name[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.names.map((name)=>{
            return(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })
      }
    </div>
  )
}

export default PersonList
