"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Product {
  thumbnail: string;
  name: string;
  category: { name: string };
  description: string;
  specs: string[];
  discountPrice: number;
  price: number;
}

export default function ProductDetail() {
  // const router = useRouter();
  // const { slug } = router.query;

  // console.log(slug);

  const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  // Axios.get(`/data/s/${slug}`)
  //   .then((response) => {
  //     setProduct(response.data);
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }, [slug]);

  // Dummy data for testing
  useEffect(() => {
    setProduct({
      thumbnail: "https://cdn.wallpapersafari.com/70/46/738DUZ.jpg",
      name: "Event 1",
      category: { name: "Test Category" },
      description: "This is a dummy Event for testing purposes.",
      specs: ["Spec1", "Spec2", "Spec3"],
      discountPrice: 19.99,
      price: 29.99,
    });
  }, []);

  if (!product) {
    return (
      <div className="flex justify-center gap-20 pt-10 pb-16">
        <div className="h-[500px] w-[500px] bg-gray-300 animate-pulse rounded-lg cursor-zoom-in"></div>

        <div className="p-3 h-[500px] w-[500px]">
          <div className="bg-gray-300 h-8 w-3/4 mb-4 animate-pulse rounded-lg"></div>
          <div className="bg-gray-300 h-6 w-1/2 mb-4 animate-pulse rounded-lg"></div>
          <div className="bg-gray-300 h-4 w-2/3 mb-4 animate-pulse rounded-lg"></div>
          <div className="bg-gray-300 h-4 w-3/4 mb-4 animate-pulse rounded-lg"></div>
          <div className="bg-gray-300 h-4 w-2/5 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-20 pt-10 pb-16">
      <div className="h-[500px] w-[500px] overflow-hidden rounded-lg">
        <div className="h-[500px] w-[500px] transform hover:scale-105 transition-transform duration-300">
          <img
            src={product.thumbnail}
            alt="Thumbnail"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="p-3 h-[500px] w-[500px]">
        <h2 className="font-bold text-3xl">{product.name}</h2>
        <p>
          {" "}
          <span className="inline-block mt-3 bg-primary rounded-xl px-3 py-1 text-sm font-semibold text-white">
            26 Nov 2023
          </span>{" "}
          <span className="text-sm"> 3 Days </span>{" "}
        </p>

        <p className="text-slate-600 text-sm leading-4 mt-3">
          {product.description}
        </p>
        <div className="mt-1">
          {" "}
          {product.specs.map((spec, i) => (
            <span
              key={i}
              className="inline-block mt-3 rounded-full border border-primary px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{spec}
            </span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.009 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <div className="text-primary cursor-pointer mt-3 fill-primary inline-flex items-center gap-3 bg-smoker border-2 font-bold  rounded-xl border-dotted py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
              <p>Add to Calender</p>
            </div>
          </div>
        </motion.div>
<div className="mt-5">
<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62625.651409276375!2d75.92399265366197!3d11.17999338677096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3ba64f664c59c333%3A0x7ba0009765bd83e5!2sMuthuvalloor%2C%20Kerala!3m2!1d11.179912!2d75.9651926!4m0!5e0!3m2!1sen!2sin!4v1701872836888!5m2!1sen!2sin" width="600" height="200"  loading="lazy"></iframe>
</div>
        {/* <p className="mt-2 flex items-center gap-2">
          {product.discountPrice < product.price ? (
            <>
              <span className="text-primary text-lg bg-white border-2 font-bold rounded-lg border-dotted py-2 px-3 border-primary">
                ₹{product.discountPrice}.00
              </span>
              <span className="text-lg line-through text-slate-600">
                ₹{product.price}.00
              </span>
            </>
          ) : (
            <span className="text-primary text-lg bg-white border-2 font-bold rounded-lg border-dotted py-2 px-3 border-primary">
              ₹{product.price}.00
            </span>
          )}
        </p> */}
      </div>
    </div>
  );
}
