import axiosinstance2 from "../Axios/Axios2";
import { useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import jsPDF from 'jspdf';
const TableThree = () => {
  const [{ token, TotalSell, amount, customer, signuprequest,allusers }, dispatch] =
  useStateValue();
  const [error,seterror]=useState('')
    const getUserinfo=(userEmail,e)=>{
    e.preventDefault();
   

    axiosinstance2.post('/user/getuserinfo', { userName:userEmail })
      .then((res) => {
        if (res.status == '200') {
           console.log(res.data.message,'transactionnnnnnnnnnn')
           const reportdata=`User Report==${'By Stock-ET'}
           
         
      
            ${res.data.message && res.data.message.map((item)=>(
              `userEmail==${item.userName}
              company stock==${item.companyName}
              amount==${item.amount}
              Total sell=${item.price},
              `
            ))}
      
           `
           const doc=new jsPDF()
           doc.text(reportdata,10,10)
           doc.save(`${'user'}-report.pdf`)
           

          {/*dispatch({
            type: 'transaction',
            transaction: res.data.message,
          });*/}
        
        } else {
          console.log(res.data.error);
        }
      })
      .catch((err) => {
        seterror('This company has not done any transactions.')
        setTimeout(()=>{
           seterror('')
        },5000)
      });
  }
  useState(() => {
    axiosinstance2
      .get('/user/getuser')
      .then((res) => {
      console.log('samiiiiiii',  res.data.message)
        dispatch({
          type: 'allusers',
          allusers: res.data.message,
        });
        dispatch({
          type: 'userlength',
          userlength: res.data.message.length,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of Users
      </h4>
        
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              First Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Email
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Report
            </h5>
          </div>
        </div>

        {allusers && allusers.map((item)=>(
           <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5" key={item.email}>
           <div className="flex items-center gap-3 p-2.5 xl:p-5">
             <div className="flex-shrink-0">
             </div>
             <p className="hidden text-black dark:text-white sm:block">{item.firstName}</p>
           </div>
 
           <div className="flex items-center justify-center p-2.5 xl:p-5">
             <p className="text-black dark:text-white">{item.lastName}</p>
           </div>
 
           <div className="flex items-center justify-center p-2.5 xl:p-5">
             <p className="text-meta-3">{item.email}</p>
           </div>
 
            <button onClick={(e)=>{getUserinfo(item.email,e)}} className="inline-flex items-center justify-center rounded-md border border-meta-1 py-4 px-10 text-center font-medium text-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10">
                 Get Report
               </button>
 
         </div>
        ))}

        
      </div>
    </div>
  );
};
export default TableThree;
