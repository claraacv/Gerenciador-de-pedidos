"use client";

import { useState } from "react";
import Input from "../../../../../components/register/Input";

export default function ProductRegister() {
  const [nome, setNome] = useState("");
  return (
    <div className="flex flex-col md:flex-wrap gap-4 w-full">
      <div className="bg-gray-100 w-full md:w-1/3 h- rounded-md p-4">
        <label className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 p-6 cursor-pointer rounded-md">
          Clique ou arraste o arquivo aqui
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="flex-1 min-w-[200px] flex flex-col gap-2">
        <Input
          value={nome}
          label="Nome"
          placeholder={"Informe o nome do produto..."}
          onChange={setNome}
        ></Input>
      </div>
    </div>
  );
}
