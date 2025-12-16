"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  { id: 1, img: "/EID.png", name: "EID" },
  { id: 2, img: "/RAKTA.png", name: "RAKTA" },
  { id: 3, img: "/FEWA.png", name: "FEWA" },
  { id: 4, img: "/GRAK.png", name: "GRAK" },
  { id: 5, img: "/Mohealth.png", name: "Mohealth" },
  { id: 6, img: "/MOHRE.png", name: "MOHRE" },
  { id: 7, img: "/MOI.png", name: "MOI" },
  { id: 8, img: "/GDRFA.png", name: "GDRFA" },
  { id: 9, img: "/RAKEZ.png", name: "RAKEZ" },
  { id: 10, img: "/RAKM.png", name: "RAKM" },
  { id: 11, img: "/EVG.png", name: "EVG" },
  { id: 12, img: "/RAKCourt.png", name: "RAKCourt" },
];

export default function GovernmentBodies() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-yellow-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        UAE Government Bodies
        <br />
        We Work With
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="group rounded-xl bg-gray-200 dark:bg-gray-700 shadow-md flex items-center justify-center cursor-pointer hover:shadow-xl transition duration-300 overflow-hidden"
            style={{ aspectRatio: "1 / 1", width: "100%", maxWidth: 200 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => setSelectedCard(card)}
          >
            <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:scale-110">
              <Image
                src={card.img}
                alt={card.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-sm w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-48 mb-4 p-1">
              <Image
                src={selectedCard.img}
                alt={selectedCard.name}
                fill
                className="object-contain"
              />
            </div>
            
          </motion.div>
        </div>
      )}
    </section>
  );
}
