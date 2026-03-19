"use client";

import { useState } from "react";
import Input from "../../../../../components/register/Input";
import InputText from "../../../../../components/register/InputText";
import InputDivision from "../../../../../components/register/InputDivision";

export default function ProductRegister() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState("");
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-10 md:min-w-200 xl:min-w-250">
        <div className="p-5 rounded-2xl border-gray-100 border-1 w-1/2">
          <h2>Imagem do produto</h2>
          <div className="bg-gray-100 w-full aspect-square h- rounded-2xl p-4">
            <label className="w-full flex items-center justify-center border-2 aspect-square border-dashed border-gray-300 p-6 cursor-pointer rounded-md">
              Clique ou arraste o arquivo aqui
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          <div className="p-5 rounded-2xl border-gray-100 border-1">
            <div className="flex-1 min-w-[200px] flex flex-col gap-2 w-full">
              <h1>Informações do produto</h1>
              <Input
                value={nome}
                label="Nome"
                placeholder={"Informe o nome do produto..."}
                onChange={setNome}
              ></Input>
              <InputDivision>
                <Input
                  value={codigo}
                  label="Código"
                  placeholder={"Informe o código..."}
                  type="number"
                  onChange={setCodigo}
                ></Input>
                <Input
                  value={preco}
                  label="Preço"
                  placeholder={"Informe o preço..."}
                  type="number"
                  onChange={setPreco}
                ></Input>
              </InputDivision>
              <InputText
                label="Descrição"
                value={descricao}
                placeholder={"Informe a descrição do produto..."}
                onChange={setDescricao}
              ></InputText>
            </div>
          </div>
          <div className="p-5 rounded-2xl border-gray-100 border-1">
            <h2>Informações da disponibilidade</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
