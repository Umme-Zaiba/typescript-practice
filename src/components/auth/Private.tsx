import {Login} from './Login';
import { ProfileProps } from './Profile';

type PrivateProps ={
    isloggedIn: boolean;
    component: React.ComponentType<ProfileProps>;
}

export const Private =({isloggedIn, component:Component}:PrivateProps)=>{
    if (isloggedIn){
        return<Component name ='Zaib'/>
    }else{
        return<Login/>
    }
}
