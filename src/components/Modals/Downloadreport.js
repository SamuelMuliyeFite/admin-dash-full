import { useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { createRouter } from '@remix-run/router';
import { useNavigate } from 'react-router-dom';
export default function Downloadreports() {
  const [showModal, setShowModal] = useState(false);

  const [enabled, setEnabled] = useState(false);


  const [{ company, userEmail, currentCompany }, dispatch] = useStateValue();
 



  return (
    <>
      <div className="flex items-center justify-center h-30">
        <button
          className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md border-2 border-graydark "
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Buy/Sell
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
             <div>heyyy</div>
          </div>
        </>
      ) : null}
    </>
  );
}
