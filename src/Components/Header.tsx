"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Login from "./Login";
import { useRouter } from "next/navigation";

export default function Header() {
  //temporary user role
  const [isOpen , setIsOpen ] = useState(false)
  const router = useRouter()
  
  const path = usePathname();
  
  const [user, setUser] = useState<any>();
  useEffect(()=>{
    const lUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
    setUser(lUser)
  })

  return (
    <><header
    className={`flex z-50 ${
      path === "/"
        ? "flex-col gap-6 justify-center p-12"
        : "justify-between px-12 py-8 sticky hrefp-0"
    } items-center content-center bg-white`}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/`}>
        <img
          src="/logos/logo.png"
          alt="Logo"
          className={`${path === "/" ? "h-16" : "h-12"} cursor-pointer`}
        />
      </Link>
    </motion.div>
    <div className="">
      <nav>
        <ul className="flex gap-2 items-center font-semibold">
          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/popular`}
                className={`${
                  path === "/popular" && "fill-primary text-primary"
                } flex cursor-pointer items-center hover:fill-primary hover:bg-smoke px-2 py-[5px] rounded-md hover:text-primary gap-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
                </svg>
                Popular
              </Link>
            </motion.div>
          </li>

          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/education`}
                className={`${
                  path === "/education" && "fill-primary text-primary"
                } flex cursor-pointer items-center hover:fill-primary hover:bg-smoke px-2 py-[5px] rounded-md hover:text-primary gap-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
                Education
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/society`}
                className={`${
                  path === "/society" && "fill-primary text-primary"
                } flex cursor-pointer items-center hover:fill-primary hover:bg-smoke px-2 py-[5px] rounded-md hover:text-primary gap-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                >
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                Society
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/culture`}
                className={`${
                  path === "/culture" && "fill-primary text-primary"
                } flex cursor-pointer items-center hover:fill-primary hover:bg-smoke px-2 py-[5px] rounded-md hover:text-primary gap-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                >
                  <path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4v73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384v96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7V224c0-17.7 14.3-32 32-32s32 14.3 32 32v80c0 8.8 7.2 16 16 16s16-7.2 16-16V219.1c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8V304c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-17.7 14.3-32 32-32s32 14.3 32 32V342.3c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480V384c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2V238.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z" />
                </svg>
                Culture
              </Link>
            </motion.div>
          </li>

          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/search`}
                className={`${
                  path === "/search" && "fill-primary text-primary"
                } flex cursor-pointer items-center hover:fill-primary hover:text-primary mx-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </Link>
            </motion.div>
          </li>

          <li>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/faq`}
                className={`${
                  path === "/faq" && "fill-primary text-primary"
                } flex cursor-pointer items-center px-2 py-[5px] hover:text-primary gap-1`}
              >
                FAQs
              </Link>
            </motion.div>
          </li>

          {user?.email  ? (
            <>
              <li>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                   // onClick={
                  //   ()=>{
                  //     router.push('/admin')
                  //   }
                  // }
                  href={'/admin'}
                    className={`${
                      path === "/admin" &&
                      "fill-primary text-primary border-primary"
                    } ${
                      path !== "/admin/dashboard" && "border-black"
                    } flex cursor-pointer items-center hover:fill-primary hover:text-primary border-2 rounded-full py-1 px-3 gap-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className=""
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <span className="font-semibold">{user.name}</span>
                  </Link>
                </motion.div>
              </li>

              <li
              onClick={()=>{
                setIsOpen(true)
              }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    className="hover:fill-red-600 cursor-pointer ml-2"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                  </svg>
                </motion.div>
              </li>
            </>
          ) : (
            <li>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* <Link
                  href={`/login`}
                  className={`${
                    path === "/login" &&
                    "fill-primary text-primary border-primary"
                  } flex cursor-pointer items-center hover:fill-primary hover:text-primary border-2 border-black hover:border-primary rounded-full p-2 mx-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className=""
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </Link> */}
                <Login/>
              </motion.div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  </header>
  <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
  </>
  );
}
