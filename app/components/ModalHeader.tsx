import { X } from "lucide-react";
import React from "react";

interface ModalHeaderProps {
  title:
    | "Connect Wallet"
    | "Access Wallet with Mnemonic Phrase"
    | "Add an account via seed";
  path: () => void;
}

const ModalHeader = ({ title, path }: ModalHeaderProps) => {
  return (
    <div className="flex justify-between pb-4 border-b-[0.5px] items-center mb-4">
      {title === "Connect Wallet" && (
        <div className="w-[26px] h-[14px] bg-slate-700 border-2 rounded-3xl"></div>
      )}
      <h3 className="text-white font-semibold"> {title}</h3>
      <button onClick={path} className="text-white">
        <X />
      </button>
    </div>
  );
};

export default ModalHeader;
