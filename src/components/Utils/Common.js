export const getUser =()=>{
    const userStr=sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;

}
export const getToken =()=>{
    return sessionStorage.getItem("token") || null;
    
}
export const setUserSession = (user) =>{
   
    sessionStorage.setItem("user",JSON.stringify(user));
    sessionStorage.setItem("user",JSON.stringify(user))
    
    
}

export const removeUserSession =()=>{
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
   
    
}
export const getRole =()=>{
    const user__Role=sessionStorage.getItem("role");
    if(user__Role) return JSON.parse(user__Role);
    else return null;
    
}
export const user__Role = (role) =>{
   
    sessionStorage.setItem("role",JSON.stringify(role));  
    return  
}