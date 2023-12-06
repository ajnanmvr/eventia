import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  card: {
    slug: string;
    thumbnail: string;
    name: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/event/${card.slug}`}>
        <div className="h-80 w-56 rounded-lg border overflow-hidden flex flex-col justify-between">
          <img
            src={card.thumbnail}
            alt="Thumbnail"
            className="w-full h-40 object-cover rounded-t-md"
          />

          <div className="p-3">
            <h2 className="font-bold text-xl">{card.name}</h2>
            <p className="text-slate-600 text-sm leading-4 mt-1">
              {card.description}
            </p>

            <p className="mt-2 flex items-center gap-2">

                  <span className="text-primary text-sm bg-white border-2 font-bold rounded-lg border-dotted py-2 px-3 border-primary">
                    26 Nov
                  </span>
                  <span className="text-sm text-slate-600 flex items-center gap-1 fill-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 3 days
                  </span>

            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
