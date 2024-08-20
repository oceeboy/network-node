"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles/item.module.css";
import { useToast } from "@/components/ui/use-toast";

export default function ItemCard({
  icon,
  title,
  description,
  openModal,
}: ItemCardProps) {
  const { toast } = useToast();

  function clicked() {
    openModal();
  }
  return (
    <button
      className="w-[288px] h-[200px] bg-customNavyBlue rounded-2xl  p-5 text-center shadow-customBold gap-5 text-white hover:shadow-lg transition-shadow duration-300"
      onClick={clicked}
    >
      <div className=" flex justify-center items-center">
        <div className="w-[90px] h-[90px] flex justify-center items-center">
          <Image
            src={icon}
            alt={title}
            width={20}
            height={20}
            className="w-10 h-10"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className="w-full h-[24px]">
          <h5 className={styles.title}>{title}</h5>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </button>
  );
}
