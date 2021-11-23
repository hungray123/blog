export const getUser =()=>{
    const userStr=sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;

}
export const getToken =()=>{
    
}
export const setUserSession =(user)=>{
    sessionStorage.setItem("user",JSON.stringify());
    
}
export const removeUserSession =()=>{
    sessionStorage.removeItem("user");
    
}