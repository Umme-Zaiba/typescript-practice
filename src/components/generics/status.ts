// here the default value for the status, if i ever dont pass the value then the status , it will take it number
type APIresponse<Data ={status:number}> ={
    data:Data
    isError : boolean
  }
  type UserResponse = APIresponse<{name:string, age:number}>
  // reusable
  type BlogResponse = APIresponse<{title:string}>
export  const response:UserResponse = {
    data:{
      name:'kyle',
      age:28,
    },
    isError:false
  }
  const blogresponse:BlogResponse = {
    data:{
      title:'Hey whats up kyle,'
    },
      isError:false
  }
  
  // here the status is specified
  const statusresponse: APIresponse<{status:number}> ={
    data:{
      status:404
    },
    isError:false
  }
  