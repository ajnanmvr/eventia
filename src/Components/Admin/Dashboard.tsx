import Link from "next/link";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <main className="pt-10 pb-16 min-h-[89vh] text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 lg:mb-5 lg:text-4xl">
        Dashboard
      </h1>

      <div className="flex justify-center gap-5 mt-16">
        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          > */}
        <div className="p-6 bg-white border border-indigo-100 rounded-xl hover:bg-indigo-100 cursor-pointer">
          <Link href={`/admin/events`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="h-20 w-20 fill-primary mx-auto mb-4"
              viewBox="0 0 512 512"
            >
              <path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
            <h2 className="text-2xl font-semibold mb-1">Event List</h2>
            <p className="w-60">View, manage and add Events here </p>
          </Link>
          <div className="mt-4 flex justify-center gap-2">
            <Link
              href={"/admin/events/add"}
              className="px-4 py-2 text-sm font-medium text-center text-white bg-primary flex items-center gap-1 fill-white rounded-lg hover:bg-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
              New
            </Link>
            <div className="px-4 py-2 text-sm font-medium text-center border rounded-lg  hover:bg-gray-800 text-white border-gray-600 bg-gray-700 hover:border-gray-700 ">
              All Items
            </div>
          </div>
        </div>
        {/* </motion.div> */}
        <div className="p-6 bg-white border border-indigo-100 rounded-xl hover:bg-indigo-100 cursor-pointer">
          <Link href={`/admin/add`}>
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          > */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 fill-primary mx-auto mb-4"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <h2 className="text-2xl font-semibold mb-1">Add Event</h2>
            <p className="w-60">Add events to your database from here </p>

            {/* </motion.div> */}
          </Link>
          <div className="mt-4 flex justify-center gap-2">
            <div className="px-4 py-2 text-sm font-medium text-center text-white bg-primary flex items-center gap-1 fill-white rounded-lg hover:bg-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
              New
            </div>
            <Link
              href={"/admin/data"}
              className="px-4 py-2 text-sm font-medium text-center border rounded-lg  hover:bg-gray-800 text-white border-gray-600 bg-gray-700 hover:border-gray-700 "
            >
              All Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
