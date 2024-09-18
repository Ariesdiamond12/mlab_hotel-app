import React, { useState } from 'react';

function BookNowModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='fixed top-0 m-5 p-10 flex w-full h-full justify-center items-center'>


      {/* <button onClick={handleOpenModal}>Book Now</button> */}


      {isOpen && (
        <div className="bg-white w-full h-full">
          <div className="modal-content">
            <h2>Book Now Modal</h2>
            <p>This is the content of the modal.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}


    </div>
  );
}

export default BookNowModal;