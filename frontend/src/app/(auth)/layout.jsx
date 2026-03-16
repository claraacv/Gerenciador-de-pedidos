"use client"

import Navbar from "../../../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="md:flex">
      <Navbar />
      <main className="md:px-10 p-4 pt-5 w-full">
        {children}
      </main>
    </div>
  );
}
