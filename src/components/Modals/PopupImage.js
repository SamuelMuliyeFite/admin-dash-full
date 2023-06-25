import { useState } from 'react';

function PopupImage({ src }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button
        className="bg-danger-200 hover:bg-blue-700 text-danger font-bold py-1 px-1 rounded"
        onClick={() => setShowPopup(true)}
      >
        View Licence
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div className="absolute bg-green-200 opacity-50 inset-0"></div>
          <div className="z-50 bg-white rounded-lg shadow-lg p-6">
            <div className="relative">
              <button
                className="absolute top-0 right-0"
                onClick={() => setShowPopup(false)}
              >
                <svg
                  className="fill-current text-gray-500 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L9 7.586l6.293-6.293a1 1 0 1 1 1.414 1.414L10.414 9l6.293 6.293a1 1 0 1 1-1.414 1.414L9 10.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L7.586 9 .293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </button>
              <img src={src} alt="placeholder" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupImage;