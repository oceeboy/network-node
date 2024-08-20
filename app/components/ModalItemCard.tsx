import Image from "next/image";
import React from "react";

interface MobileItemCardProps {
  image: string;
  title: string;
  nextContent: () => void;
}
const ModalItemCard = ({ image, title, nextContent }: MobileItemCardProps) => {
  return (
    <button
      onClick={nextContent}
      className="flex w-full mb-5 items-center p-3 rounded-lg bg-gray-800 cursor-pointer"
    >
      <Image
        src={image}
        alt="Trust Wallet"
        width={30}
        height={30}
        className=" rounded-xl"
      />
      <span className="ml-4 font-semibold text-white">{title}</span>
    </button>
  );
};

export default ModalItemCard;
