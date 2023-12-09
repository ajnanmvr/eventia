import React from "react";
import Link from "next/link";
function Home() {
  return (
    <div>
      <div className="mx-auto rounded-[100px] h-96 border-2 border-white overflow-hidden max-w-[85vw]">
        <div className="bg-primary  text-white flex items-center w-full -mt-24">
          <img src="/logos/logo4.png" alt="logo" className="h-[600px] p-10" />
          <div className="flex flex-col gap-1">
            <h1 className="font-black leading-[60px] text-[70px]">Eventia</h1>
            <h1 className="font-regular text-2xl">Google Powered Event Explorer</h1>
            <div className="flex gap-4 items-center mt-4">
              <Link href={`/popular`}>
                <button className="border-2 font-bold border-white py-2 px-5 rounded-full hover:bg-white hover:text-primary">
                  Explore
                </button>
              </Link>
              <Link href={`/search`}>
                <button className="font-bold">Search</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
