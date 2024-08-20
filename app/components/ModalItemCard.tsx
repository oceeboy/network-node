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
      className="flex w-full mb-5 items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
    >
      <Image src={image} alt="Trust Wallet" width={24} height={24} />
      <span className="ml-4 text-white">{title}</span>
    </button>
  );
};

export default ModalItemCard;
