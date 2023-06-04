import { fetch } from "../FectchLocalStorage/Fech"
const token=fetch()
export const initialstate={
    token:token,
    company:null,
    stock:null,
    newcompany:null,
    companyName:null,
    TotalSell:0,
    customer:0,
    signuprequest:null,
    transaction:[0,0,0,0,0,0,0,0,0,0,0,0]
    
    
}