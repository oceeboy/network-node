"use client";
import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import { Cards } from "@/constants";
import { Modal } from "@mui/material";

import ModalContent from "../components/ModalContent";

function HomePage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function modalToggle(set: boolean) {
    setIsVisible(set);
  }

  return (
    <section className={"h-full pt-10 "}>
      <div className="container bg-[url('/icons/background.svg')] bg-contain bg-no-repeat bg-center mx-auto">
        <div className="min-h-screen   flex container items-center justify-center">
          <div className="grid grid-cols-1 px-10 py-10 items-center justify-center  sm:grid-cols-2  sm:gap-[50px] gap-[50px] max-w-[800px] ">
            {Cards.map((card, index) => (
              <ItemCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                openModal={() => modalToggle(true)}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={isVisible}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex items-center justify-center h-screen ">
            <ModalContent closeModal={() => modalToggle(false)} />
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default HomePage;
