import {useState} from 'react';

type AuthUser = {
    name: string;
    email: string;
}
const User = () => {
    //the type user can be null or AuthUser 
    // here the type - AuthUser is not passed  to the User component
    // const [user, setUser] = useState<AuthUser|null>(null);
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = ()=>{
        setUser({
            name: 'John Doe',
            email: 'john@example.com'
        })
    }
    // const handleLogout = ()=>{
    //     setUser(null)
    // }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
        {/* Used Type Assertion */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default User
