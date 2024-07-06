import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User =()=>{
    const userContext = useContext(UserContext)
    //the if condition is removed here because the 'as' keyword is used 
    const handleLogin =()=>{  
        userContext.setUser({
            name: 'hey',
            email: 'hey@example.com'
        })      
    }
    const handleLogout =()=>{    
        userContext.setUser(null)
}
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick ={handleLogout}>Logout</button>
            {/* the use of the 'as' keyword here removes the '?'operator because it is guaranteed that userContext will not be null */}
            <div>User name is {userContext.user?.name}</div>
            <div>User name is {userContext.user?.email}</div>
        </div>
    )
}
