type StatusProps = {
    //String literal is used to avoid the unknown use of any different string other than these
    status: 'loading' | 'success' | 'error'
}
const Status = (props:StatusProps) => {
    //props used to display message
    let message; 
    if(props.status === 'loading'){
        message = 'Loading'
    } else if( props.status ==='success') {
        message = 'data Fetched Succesfully'
    } else if( props.status === 'error') {
        message ='error while fetching data'
    } 
  
  return (
    <div>
      <h4>Status - {message}</h4>
    </div>
  )
}

export default Status
