import BrandOne from '../images/brand/brand-02.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-02.svg';
import BrandFour from '../images/brand/brand-02.svg';
import BrandFive from '../images/brand/brand-02.svg';
import { useEffect, useState } from 'react';
import axiosinstance2 from '../Axios/Axios2';
import axios from 'axios';
import axiosinstance3 from '../Axios/Axios3';
import { useStateValue } from '../Context/StateProvider';
import { useNavigate } from 'react-router-dom';
import Downloadreports from './Modals/Downloadreport.js'
import Alerts from '../pages/UiElements/Alerts';
import jsPDF from 'jspdf';
const TableOne = () => {
  let info = [];
  const [{ company, userEmail, currentCompany }, dispatch] = useStateValue();
  const [error,seterror]=useState('')
  const gettransaction=(companyName,totalsell,e)=>{
    e.preventDefault();
   

    axiosinstance3.post('/company/getTransaction', { companyName:companyName })
      .then((res) => {
        if (res.status == '200') {
           console.log(res.data.message,'transactionnnnnnnnnnn')
           const reportdata=`companyName==${companyName}
           Total sell=${totalsell},
           total profit from january-december
           january==${res.data.message[0]}
           february==${res.data.message[1]}
           march==${res.data.message[2]}
           april==${res.data.message[3]}
           may==${res.data.message[4]}
           june==${res.data.message[5]}
           july==${res.data.message[6]}
           august==${res.data.message[7]}
           september==${res.data.message[8]}
           october==${res.data.message[9]}
           November==${res.data.message[10]}
           december==${res.data.message[11]}`
           const doc=new jsPDF()
           doc.text(reportdata,10,10)
           doc.save(`${companyName}-report.pdf`)
           

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
  const addcurrent = (name, price, stockName) => {
    /*info.push({ companyName: name, price: price, stockName: stockName });*/
    console.log(name, 'kjhjhjkhjkhjkhjkh');
  };
  console.log(userEmail, 'currrrrrrrrrent');
  useEffect(() => {
    axiosinstance3
      .get('/getCompany')
      .then((res) => {
        if (res) {
          console.log(res,"ressssssssss")
          dispatch({
            type: 'company',
            company: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(company, userEmail, 'sssssssss');
  return (
    <div className=" rounded-sm border border-stroke bg-white px-2 pt-3 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of Companies
      </h4>
  {error &&(
        <Alerts error={error}></Alerts>
  )}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Companies
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              No of Stock
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Stock Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Sell
            </h5>
          </div>
        </div>

        {company &&
          company.map((item) => (
            <div className="grid grid-cols-3 sm:grid-cols-5">
              <div className="flex items-center gap-3 p-4.5 xl:p-5">
                <div className="flex-shrink-0">
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {item.companyName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.amount}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.price}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.totalsell}</p>
              </div>
          
                 <button onClick={(e)=>{gettransaction(item.companyName,item.totalsell,e)}} className="inline-flex items-center justify-center rounded-md border border-meta-1 py-4 px-10 text-center font-medium text-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10">
                 Get Report
               </button>
          
             
                 
        

       

            </div>
          ))}
      </div>
    </div>
  );
};

export default TableOne;