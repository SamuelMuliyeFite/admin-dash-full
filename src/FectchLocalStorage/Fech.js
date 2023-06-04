export const fetch=()=>{
   const token= localStorage.getItem('user') !== 'undefined'? localStorage.getItem('user'):null
   return token
}