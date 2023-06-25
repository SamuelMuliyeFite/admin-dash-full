import { useEffect } from "react";
import axiosinstance from "../Axios/Axios3";
import { useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import PopMessage from "./Modals/PopMessage.js";

const TableTwo = () => {
  const [{useremail,message},dispatch]=useStateValue()
  const emaill=localStorage.getItem('useremail')
  useEffect(()=>{
     
    axiosinstance.post('/viewmessage', { to:emaill })
    .then((res) => {
      if (res.status == '200') {
      
        dispatch({
          type: 'message',
          message: res.data.message,
        });
      
      } else {
        console.log(res.data.error);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },)
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Customer Support Responses
      </h4>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Message
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          
          
          
        </div>
        {message && message.map((item)=>(
           <div className="flex items-center justify-between" key={item._id}>
           <div className="flex items-center gap-3 p-2.5 xl:p-5">
             <div className="flex-shrink-0">
             </div>
             <p className="text-sm font-medium uppercase xsm:text-bas">{item.from}</p>
           </div>
 
          <div className="flex items-center flex-nowrap justify-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 w-110">
            <p className="text-black dark:text-white text-center sm:text-left ">{item.message}</p>
          </div>
    <PopMessage from={item.from} to={item.to}></PopMessage>
 
       
 
         </div>
        ))}     

       
      </div>
    </div>
  );
};

export default TableTwo;
