// combining the constraints and the default value
type APIresponse<Data extends object = {status:number}> ={
    data:Data
    isError : boolean
  }
  
// when we want to remove the type that we want to specify
export  const response2:APIresponse = {
    data:{
      status:200
    },
    isError:false
  }

// give the type to the generics that they must adhere to --
export  const response:APIresponse<{name:string}> = {
    data:{
      name:'sdf'
    },
    isError:false
  }