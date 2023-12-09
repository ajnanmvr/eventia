import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const Modal = (props: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-full bg-black bg-opacity-50 flex justify-center  items-center  ${
        props.isOpen ? "block" : "hidden"
      } `}
    >
      <div className="p-5 bg-white rounded-xl min-w-[70vw] gap-4">
        <h2 className="text-center text-3xl font-bold mb-2">Select Location</h2>
        <div className="flex gap-2 justify-center my-3">
          <input
            type="text"
            placeholder={`Search Here`}
            className="rounded-lg border-2 border-gray-900 border-dashed px-3 py-2 flex-1 transition-transform duration-300 transform hover:scale-[100.2%]"
          />
          <button className="bg-primary flex items-center gap-1 fill-white hover:bg-dark text-white py-1 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              className=""
              viewBox="0 0 512 512"
            >
              <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
            </svg>
            Current Location
          </button>
        </div>
        <div className="flex flex-wrap gap-1 w-full items-center justify-center">
          <div className="px-2 py-1 w-full text-lg fill-transparent hover:fill-primary bg-smoke font-semibold hover:bg-smoker flex items-center justify-between hover:border-primary border hover:text-primary rounded-md">
            Calicut
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <div className="px-2 py-1 w-full text-lg fill-transparent hover:fill-primary bg-smoke font-semibold hover:bg-smoker flex items-center justify-between hover:border-primary border hover:text-primary rounded-md">
            Cochin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <div className="px-2 py-1 w-full text-lg fill-transparent hover:fill-primary bg-smoke font-semibold hover:bg-smoker flex items-center justify-between hover:border-primary border hover:text-primary rounded-md">
            Chennai
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <div className="px-2 py-1 w-full text-lg fill-transparent hover:fill-primary bg-smoke font-semibold hover:bg-smoker flex items-center justify-between hover:border-primary border hover:text-primary rounded-md">
            New Delhi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <div className="px-2 py-1 w-full text-lg fill-transparent hover:fill-primary bg-smoke font-semibold hover:bg-smoker flex items-center justify-between hover:border-primary border hover:text-primary rounded-md">
            Mumbai
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className=""
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-center gap-2 mt-5">
          <button
            className="bg-primary text-white hover:bg-dark py-2 font-semibold w-full px-2 rounded-lg text-base"
            onClick={() => props.setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
