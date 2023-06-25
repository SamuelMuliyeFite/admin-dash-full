import CardFour from '../../components/CardFour.js';
import CardOne from '../../components/CardOne.js';
import CardTwo from '../../components/CardTwo.js';
import ChartTwo from '..//..//components/ChartTwo.js'
import DefaultLayout from '../../layout/DefaultLayout.js';
import DropdownNotifications from '..//..//components/DropdownNotification.js';
import './App.css';
import { useEffect } from 'react';
import axiosinstance2 from '../../Axios/Axios2';
/* import axios from 'axios';
 */
import { useStateValue } from '../../Context/StateProvider.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ECommerce = () => {
  const [{ token, TotalSell, amount, customer }, dispatch] = useStateValue();
/*   const getcompanyData = async () => {
    const _token = localStorage.getItem('user');
    const result = await axios.get('http://localhost:2000/api/getCompany', {
      headers: {
        authorization: _token ? _token : '',
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(result);
    return result;
  };
  getcompanyData(); */
 
  useEffect(() => {
    const tokken = localStorage.getItem('user');
    /*   const CompanyName=localStorage.getItem('companyName')
    const amount=localStorage.getItem('amount') */
    if (tokken) {
      dispatch({
        type: 'signin',
        token: tokken,
      });
      /*   dispatch({
    type:'companyName',
    companyName:CompanyName
  }) */
      /*  dispatch({
    type:'amount',
    amount:amount
  })
  axiosinstance.post('/getTotalstock',{CompanyName:CompanyName})
  .then((res)=>{
    console.log(res,'thiss res')
    dispatch({
      type:'TotalSell',
      TotalSell:res.data.message
})
dispatch({
    type:'customer',
    customer:res.data.customers
})
dispatch({
  type:'amount',
  amount:amount - res.data.amount
}) */

      /*   })
  .catch((err)=>{
    console.log(err)
  }) */
    }

    

  }, []);
  return (
    token && (
      <DefaultLayout>
    <div className="app">
      <div className="components">
        <CardFour />
        <CardTwo />
      </div>
    </div>
        

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

          <div className="col-span-12 xl:col-span-8">
            <DropdownNotifications />
          </div>
        </div>
       
      </DefaultLayout>
    )
  );
};

export default ECommerce;
