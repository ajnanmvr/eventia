import React from 'react'

interface Props{
    isOpen:boolean;
    setIsOpen : any
}

const Modal = (props:Props) => {
  return (
    <div
    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center  ${
      props.isOpen ? 'block' : 'hidden'
    } `}
  >
    <div className="p-5 bg-white rounded-xl gap-4">
    <p className='text-center text-lg'>
      Are you sure, do you want to delete candidate
    </p>
    <div className='w-full flex justify-center gap-2 mt-2'>
      <button
        className="bg-primary text-white py-1 px-2 rounded-md text-base"
        onClick={() => props.setIsOpen(false)}
      >
        Cancel
      </button>
      <button
        className="bg-red-500 text-white py-1 px-2 rounded-md text-base"
      >
        Delete
      </button>
    </div>
    </div>
  </div>
  )
}

export default Modal