import DefaultLayout from '../../layout/DefaultLayout';
import axiosinstance from '../../Axios/Axios2';
import { useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import PopupImage from '../../components/Modals/PopupImage';
import TableTwo from '../../components/TableTwo';
const TableOne = () => {
  const [{ token, TotalSell, amount, customer, signuprequest }, dispatch] =
    useStateValue();
  useState(() => {
    axiosinstance
      .get('/admin/getNewCompany')
      .then((res) => {
        dispatch({
          type: 'signuprequest',
          signuprequest: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const decline = (companyName) => {
    axiosinstance
      .post('/admin/Declinesignup', { companyName: companyName })
      .then((res) => {
        if (res.status == '200') {
          axiosinstance
            .get('/admin/getNewCompany')
            .then((res) => {
              dispatch({
                type: 'signuprequest',
                signuprequest: res.data.message,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log('something wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accept = (companyEmail, password, companyName) => {
    axiosinstance
      .post('/admin/acceptsignup', {
        companyEmail: companyEmail,
        password: password,
        companyName: companyName,
      })
      .then((res) => {
        if (res.status == '200') {
          axiosinstance
            .get('/admin/getNewCompany')
            .then((res) => {
              dispatch({
                type: 'signuprequest',
                signuprequest: res.data.message,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log('somthing wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(signuprequest);
  return (
    <DefaultLayout>
      <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Company Requets
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3   rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 ">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Company Names
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Verified
              </h5>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
            {signuprequest &&
              signuprequest.map((item) => (
                <>
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0"></div>
                    <p className="hidden text-black dark:text-white sm:block">
                      {item.companyName}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {item.companyEmail}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">
                      {item.verified ? 'verified' : 'false'}
                    </p>
                  </div>
                  <PopupImage
                    src={`http://localhost:3000/${item.companyName}.png`}
                  ></PopupImage>
                  <button
                    onClick={() => {
                      accept(
                        item.companyEmail,
                        item.password,
                        item.companyName
                      );
                    }}
                    className="w-[50%] text-success p-3 border-2 boreder-success rounded-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      decline(item.companyName);
                    }}
                    className="w-[50%] text-danger p-3 border-2 boreder-danger rounded-sm"
                  >
                    Decline
                  </button>
                </>
              ))}
          </div>
        </div>
      </div>
          <div className="mt-4 grid gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 "> 

          <div className="col-span-12 xl:col-span-8">
            <TableTwo />
          </div>
        </div>
      
    </DefaultLayout>
    
  );
};

export default TableOne;