const reducer=(state,action)=>{
    
    switch(action.type){
        
               
    case 'signin':
        return{
            ...state,
            token:action.token
        }
        case 'signuprequest':
            return{
                ...state,
                signuprequest:action.signuprequest
            }
            case 'TotalSell':
            return{
                ...state,
                TotalSell:action.TotalSell
            }
            case 'amount':
                return{
                    ...state,
                    amount:action.amount
                }
                case 'customer':
                    return{
                        ...state,
                        customer:action.customer
                    }
                    case 'newcompany':
                        return{
                            ...state,
                            newCompanies :action.newCompanies
                        }
                        case 'allusers':
                            return{
                                ...state,
                                allusers :action.allusers
                            }
                            case 'useremail':
                                return{
                                    ...state,
                                    useremail :action.useremail
                                }
                            case 'companylength':
                        return{
                            ...state,
                            companylength :action.companylength
                        }
                        case 'userlength':
                        return{
                            ...state,
                            userlength :action.userlength
                        }
                        case 'transaction':
                            return{
                                ...state,
                                transaction :action.transaction
                            }
                            case 'message':
                                return{
                                    ...state,
                                    message :action.message
                                }
                        case 'company':
      return {
        ...state,
        company: action.company,
      };
        default:
            return state
        }

    }
    export  default reducer;