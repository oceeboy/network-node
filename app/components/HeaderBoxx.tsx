"use client";

import React from "react";
import styles from "../styles/navbar.module.css";

import Link from "next/link";
import Spinner from "./Spinner";
import Logo from "./Logo";
const HeaderBoxx = () => {
  return (
    <nav className={styles.navbar + " text-white p-4 "}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <div className="logo-container">
            <Link href={"/"} className=" flex cursor-pointer items-center ">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-5"></div>
      </div>
    </nav>
  );
};

export default HeaderBoxx;
