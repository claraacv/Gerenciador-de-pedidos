"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faShirt,
  faBoxesStacked,
  faReceipt,
  faGear,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="md:hidden flex justify-between mt-3 items-center px-3">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setNavbarOpen(true)}
          className="text-3xl"
        ></FontAwesomeIcon>
        <img
          src="/logo.png"
          alt="Logo escrito Pedidos"
          className="w-auto h-10"
        />
        <FontAwesomeIcon icon={faUser} className="text-3xl"></FontAwesomeIcon>
      </div>
      <div
        className={`fixed md:static top-0 left-0 h-screen md:block bg-[#1D948A]/10 md:w-1/4 w-7/10 transform transition-transform duration-300 ${navbarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center md:justify-center mb-10 mt-5 px-3 md:pl-0">
          <img
            src="/logo.png"
            alt="Logo escrito Pedidos"
            className="w-auto h-10"
          />
          {navbarOpen && (
            <FontAwesomeIcon
              icon={faX}
              className="text-2xl block md:hidden cursor-pointer"
              onClick={() => setNavbarOpen(false)}
            ></FontAwesomeIcon>
          )}
        </div>
        <div className="flex flex-col gap-5 pl-3">
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faShirt}
              className="text-2xl"
            ></FontAwesomeIcon>
            <Link
              href="/"
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer"
            >
              Produtos
            </Link>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faBoxesStacked}
              className="text-2xl"
            ></FontAwesomeIcon>
            <Link
              href="/"
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer"
            >
              Pedidos
            </Link>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faReceipt}
              className="text-2xl"
            ></FontAwesomeIcon>
            <Link
              href="/"
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer"
            >
              Controle financeiro
            </Link>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl"
            ></FontAwesomeIcon>
            <Link
              href="/"
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer"
            >
              Configurações
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
