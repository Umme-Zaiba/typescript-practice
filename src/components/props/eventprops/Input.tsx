type InputProps ={
    value:  string;
    handleChange : (event:React.ChangeEvent<HTMLInputElement>)=> void 
}
const Input = (props: InputProps) => {
    // defining the handler inside the component
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);
        // console.log("event"); 
    }
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  )
}

export default Input
