import {createContext, useState} from 'react';

export type AuthUser={
    name: string,
    email: string,
} 
//to use type for the children of provider
type UserContextProviderProps ={
    children: React.ReactNode
}
//to remove the user, setuser error 
type UserContextType ={
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>,
}
// here the as is used before <AuthUser|null> was used which removes the if conditions in User.tsx
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider =({children}:UserContextProviderProps)=>{
    //the state variables can be null or Auth user
    const [user, setUser] = useState<AuthUser|null>(null);
    return(
        // here we are going to add the functinalty which sets user logged in or logegd out 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}